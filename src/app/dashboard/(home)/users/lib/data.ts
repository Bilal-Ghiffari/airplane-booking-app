"use server";

import prisma from "../../../../../../lib/prisma";

export async function getUsers() {
  try {
    const data = await prisma.user.findMany({ where: { role: "CUSTOMER" } });
    return data;
  } catch (error) {
    console.log("error", error);
    return [];
  }
}
