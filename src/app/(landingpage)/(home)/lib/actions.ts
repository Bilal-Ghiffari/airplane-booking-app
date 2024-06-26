"use server";

import { getUser, lucia } from "@/lib/auth";
import { dateFormat, objectToParams } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout(): Promise<{ error: string } | null> {
  const { session } = await getUser();
  if (!session) {
    return {
      error: "UnAuthorized",
    };
  }

  await lucia.invalidateSession(session.id);
  const sessionCookie = await lucia.createBlankSessionCookie();

  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  revalidatePath("/");
  return redirect("/");
}

export async function searchFlight(formData: FormData) {
  const dateNow = new Date();
  const defaultDate: string = dateFormat(dateNow, "YYYY-MM-DD");
  const searchData = {
    departure: formData.get("departure"),
    arrival: formData.get("arrival"),
    date: formData.get("date") || defaultDate,
  };

  const queryParams = objectToParams(searchData);
  return redirect(`/available-flights?${queryParams}`);
}
