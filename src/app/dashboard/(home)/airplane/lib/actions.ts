"use server";

import { ActionResult } from "@/app/dashboard/(auth)/signin/form/actions";
import { airplaneFormSchema } from "./validation";
import { deleteFile, uploadFile } from "@/lib/supabase";
import prisma from "../../../../../../lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { AirPlane } from "@prisma/client";

export async function getAirplaneById(id: string) {
  try {
    const data = await prisma.airPlane.findFirst({
      where: {
        id,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function saveAirplane(
  prevState: any,
  formData: FormData
): Promise<ActionResult> {
  const values = airplaneFormSchema.safeParse({
    name: formData.get("name"),
    image: formData.get("image"),
    code: formData.get("code"),
  });

  if (!values.success) {
    const errorDesc = values.error.issues.map((issues) => issues.message);
    return {
      errorTitle: "Error Validation",
      errorDesc,
    };
  }

  const uploadedFile = await uploadFile(values.data.image);
  if (uploadFile instanceof Error) {
    return {
      errorTitle: "Failed to upload file",
      errorDesc: ["Terjadi masalah pada koneksi, silahkan coba lagi"],
    };
  }

  try {
    await prisma.airPlane.create({
      data: {
        image: uploadedFile as string,
        name: values.data.name,
        code: values.data.code,
      },
    });
  } catch (error) {
    return {
      errorTitle: "Failed to upload file",
      errorDesc: ["Terjadi masalah pada koneksi, silahkan coba lagi"],
    };
  }
  revalidatePath("/dashboard/airplane");
  redirect("/dashboard/airplane");
}

export async function updateAirplane(
  prevState: unknown,
  defaultValues: AirPlane,
  formData: FormData
): Promise<ActionResult> {
  const id = defaultValues?.id;

  // user did not upload image
  const image = formData.get("image") as File;
  let airplaneFormSchemaUpdate;
  if (image.size === 0) {
    airplaneFormSchemaUpdate = airplaneFormSchema.omit({ image: true });
  } else {
    airplaneFormSchemaUpdate = airplaneFormSchema;
  }

  const values = airplaneFormSchemaUpdate.safeParse({
    name: formData.get("name"),
    image: formData.get("image"),
    code: formData.get("code"),
  });

  if (!values.success) {
    const errorDesc = values.error.issues.map((issues) => issues.message);
    return {
      errorTitle: "Error Validation",
      errorDesc,
    };
  }

  let filename: unknown;
  if (image.size > 0) {
    const uploadedFile = await uploadFile(image);
    if (uploadedFile instanceof Error) {
      return {
        errorTitle: "Failed to upload file",
        errorDesc: ["Terjadi masalah pada koneksi, silahkan coba lagi"],
      };
    }
    filename = uploadedFile as string;
  } else {
    // not upload image
    const airplane = await prisma.airPlane.findFirst({
      where: {
        id,
      },
      select: {
        image: true,
      },
    });
    filename = airplane?.image;
  }

  //update airplane
  try {
    await prisma.airPlane.update({
      where: {
        id,
      },
      data: {
        name: values.data.name,
        code: values.data.code,
        image: filename as string,
      },
    });
  } catch (error) {
    return {
      errorTitle: "Failed to update data",
      errorDesc: ["Terjadi masalah pada koneksi, silahkan coba lagi"],
    };
  }
  revalidatePath("/dashboard/airplane");
  redirect("/dashboard/airplane");
}

export async function deleteAirplane(
  id: string
): Promise<ActionResult | undefined> {
  const data = await prisma.airPlane.findFirst({
    where: { id },
  });

  if (!data) {
    return {
      errorTitle: "Data not found",
      errorDesc: [],
    };
  }

  const deletedFile = await deleteFile(data?.image);
  if (deletedFile instanceof Error) {
    return {
      errorTitle: "Failed to delete file",
      errorDesc: ["Terjadi masalah pada koneksi, silahkan coba lagi"],
    };
  }

  try {
    await prisma.airPlane.delete({
      where: { id },
    });
  } catch (error) {
    return {
      errorTitle: "Failed to delete data",
      errorDesc: ["Terjadi masalah pada koneksi, silahkan coba lagi"],
    };
  }

  revalidatePath("/dashboard/airplane");
}
