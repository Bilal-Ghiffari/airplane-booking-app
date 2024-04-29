import { NextRequest } from "next/server";
import prisma from "../../../../../lib/prisma";
import { TypeSeat } from "@prisma/client";

export async function POST(request: NextRequest) {
  const body = await request.json();

  let departureDate: Date | null = null;
  if (body.date) {
    departureDate = new Date(body.date);
    departureDate.setHours(1);
  }

  try {
    const data = await prisma.flight.findMany({
      where: {
        departureCity: body.departure !== null ? body.departure : {},
        destinationCity: body.arrival !== null ? body.arrival : {},
        seats:
          body.seat !== null
            ? {
                some: {
                  type: body.seat as TypeSeat,
                  isBooked: false,
                },
              }
            : {},
        departureDate:
          departureDate !== null
            ? {
                gte: departureDate,
              }
            : {},
        planeId:
          body.planeIds.length > 0
            ? {
                in: body.planeIds,
              }
            : {},
      },
      include: {
        plane: true,
        // seats: true,
        // tickets: true
      },
    });
    return Response.json({ data });
  } catch (error) {
    console.log("error", error);
    return Response.json(
      {
        error: true,
        // error_message: "Failed to get data",
        error_message: error,
      },
      { status: 500 }
    );
  }
}
