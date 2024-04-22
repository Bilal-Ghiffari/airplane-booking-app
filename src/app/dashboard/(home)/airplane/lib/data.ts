"use server";

import prisma from "../../../../../../lib/prisma";

export async function getAirPLanes() {
  try {
    const planes = await prisma.airPlane.findMany();
    return planes;
  } catch (error) {
    return [];
  }
}
