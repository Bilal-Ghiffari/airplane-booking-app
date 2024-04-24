"use server";

import { ActionResult } from "@/app/dashboard/(auth)/signin/form/actions";
import { formFlightSchema } from "./validation";
import prisma from "../../../../../../lib/prisma";
import { generateSeatPerClass } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function saveFlights(
  prevState: unknown,
  formData: FormData
): Promise<ActionResult> {
  const validate = formFlightSchema.safeParse({
    planeId: formData.get("planeId"),
    price: formData.get("price"),
    departureDate: new Date(formData.get("departureDate") as string),
    departureCity: formData.get("departureCity"),
    departureCityCode: formData.get("departureCityCode"),
    arrivalDate: new Date(formData.get("arrivalDate") as string),
    destinationCity: formData.get("destinationCity"),
    destinationCityCode: formData.get("destinationCityCode"),
  });

  if (!validate.success) {
    const errorDesc = validate.error.issues.map((issues) => issues.message);
    return {
      errorTitle: "Error Validation",
      errorDesc,
    };
  }

  try {
    const flights = await prisma.flight.create({
      data: {
        ...validate.data,
        price: Number.parseInt(validate.data.price),
      },
    });
    const seats = generateSeatPerClass(flights.id);
    await prisma.flightSeat.createMany({
      data: seats,
    });
  } catch (error) {
    console.log("error", error);
  }

  revalidatePath("/dashboard/flights");
  redirect("/dashboard/flights");
}

export async function updateFlight(
  prevState: unknown,
  formData: FormData,
  id: string
): Promise<ActionResult> {
  const validate = formFlightSchema.safeParse({
    planeId: formData.get("planeId"),
    price: formData.get("price"),
    departureDate: new Date(formData.get("departureDate") as string),
    departureCity: formData.get("departureCity"),
    departureCityCode: formData.get("departureCityCode"),
    arrivalDate: new Date(formData.get("arrivalDate") as string),
    destinationCity: formData.get("destinationCity"),
    destinationCityCode: formData.get("destinationCityCode"),
  });

  if (!validate.success) {
    const errorDesc = validate.error.issues.map((issues) => issues.message);
    return {
      errorTitle: "Error Validation",
      errorDesc,
    };
  }

  try {
    await prisma.flight.update({
      where: { id },
      data: {
        ...validate.data,
        price: Number.parseInt(validate.data.price),
      },
    });
  } catch (error) {
    console.log("error", error);
  }

  revalidatePath("/dashboard/flights");
  redirect("/dashboard/flights");
}

export const deleteFlights = async (
  id: string
): Promise<ActionResult | undefined> => {
  try {
    const checkFlight = await prisma.flight.findFirst({ where: { id } });
    if (!checkFlight) {
      return {
        errorTitle: "Data not found",
        errorDesc: [],
      };
    }
    await prisma.flightSeat.deleteMany({ where: { flightId: id } });
    await prisma.flight.delete({ where: { id } });
  } catch (error) {
    console.log("Error", error);
  }
  revalidatePath("/dashboard/flights");
};
