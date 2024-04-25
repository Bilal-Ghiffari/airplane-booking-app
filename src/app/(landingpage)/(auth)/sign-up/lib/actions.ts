"use server";

import { ActionResult } from "@/app/dashboard/(auth)/signin/form/actions";
import { userSchema } from "./validation";
import bcrypt from "bcrypt";
import prisma from "../../../../../../lib/prisma";
import { redirect } from "next/navigation";

export async function signUpUser(
  prevState: unknown,
  formData: FormData
): Promise<ActionResult> {
  const validate = userSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    passport: formData.get("passport"),
  });

  if (!validate.success) {
    const errorDesc = validate.error.issues.map((issues) => issues.message);
    return {
      errorTitle: "Error Validation",
      errorDesc,
    };
  }

  const hashingPassword = bcrypt.hashSync(validate.data.password, 10);
  try {
    const users = await prisma.user.findFirst({
      where: { email: validate.data.email },
    });

    if (users) {
      return {
        errorTitle: "Error Validation",
        errorDesc: ["Email is already exists"],
      };
    } else {
      await prisma.user.create({
        data: {
          ...validate.data,
          password: hashingPassword,
          role: "CUSTOMER",
        },
      });
    }
  } catch (error) {
    console.log("error", error);
  }
  return redirect("/sign-in");
}
