"use server";

import { ActionResult } from "@/app/dashboard/(auth)/signin/form/actions";
import { userSchema } from "../../sign-up/lib/validation";
import prisma from "../../../../../../lib/prisma";
import bcrypt from "bcrypt";
import { lucia } from "@/lib/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function signInUsers(
  prevState: unknown,
  formData: FormData
): Promise<ActionResult> {
  const signInSchema = userSchema.pick({ email: true, password: true });
  const validate = signInSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validate.success) {
    const errorDesc = validate.error.issues.map((issues) => issues.message);
    return {
      errorTitle: "Error Validation",
      errorDesc,
    };
  }

  const existingUser = await prisma.user.findFirst({
    where: { email: validate.data.email },
  });
  if (!existingUser) {
    return {
      errorTitle: "Error",
      errorDesc: ["Email tidak ditemukan"],
    };
  }

  const validPassword = await bcrypt.compare(
    validate.data.password,
    existingUser.password
  );
  if (!validPassword) {
    return {
      errorTitle: "Error",
      errorDesc: ["Email / Password salah"],
    };
  }

  const session = await lucia.createSession(existingUser.id, {});
  const sessionCookie = await lucia.createSessionCookie(session.id);

  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  revalidatePath("/");
  return redirect("/");
}
