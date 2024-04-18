"use server";

import { getUser, lucia } from "@/lib/auth";
import { ActionResult } from "../(auth)/signin/form/actions";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function Logout(): Promise<ActionResult> {
  const { session } = await getUser();
  if (!session) {
    return {
      errorTitle: "Error",
      errorDesc: ["Unauthorization"],
    };
  }

  await lucia.invalidateSession(session.id);
  // mengkosongkan session yang berada didalam cookie
  const sessionCookie = await lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  return redirect("/dashboard/signin");
}
