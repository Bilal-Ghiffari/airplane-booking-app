"use server";

import prisma from "../../../../../../lib/prisma";

export const getTickets = async () => {
  try {
    const data = await prisma.ticket.findMany({
      include: {
        customer: true,
        flight: true,
        seat: true,
      },
    });
    return data;
  } catch (error) {
    console.log("error", error);
    return [];
  }
};
