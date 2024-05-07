"use server";

import prisma from "../../../../../lib/prisma";

export const getCityFilter = async (): Promise<{
  departure: string[];
  destination: string[];
}> => {
  try {
    const data = await prisma.flight.groupBy({
      by: ["departureCity", "destinationCity"],
      where: {
        departureDate: {
          gt: new Date(),
        },
      },
      _count: {
        departureCity: true,
        destinationCity: true,
      },
    });
    const uniqueDepartureCities = new Set();
    const uniqueDestinationCities = new Set();
    data.filter((entry) => {
      if (entry.departureCity === entry.destinationCity) {
        return false; // Remove if departure and destination are the same
      } else {
        // Check if departureCity has been encountered before
        if (
          uniqueDepartureCities.has(entry.departureCity) &&
          uniqueDestinationCities.has(entry.destinationCity)
        ) {
          return false; // Remove if departure city has been encountered before
        } else {
          // Add departureCity to the unique departure cities set
          uniqueDepartureCities.add(entry.departureCity);
          // Check if destinationCity has been encountered before
          uniqueDestinationCities.add(entry.destinationCity);
        }
      }
    });
    const uniqueDepartureCitiesArray = Array.from(
      uniqueDepartureCities
    ) as string[];
    const uniqueDestinationCitiesArray = Array.from(
      uniqueDestinationCities
    ) as string[];
    return {
      // data,
      departure: uniqueDepartureCitiesArray,
      destination: uniqueDestinationCitiesArray,
    };
  } catch (error) {
    console.log(error);
    return {
      departure: [],
      destination: [],
    };
  }
};

export async function getAirplanes() {
  try {
    const data = await prisma.airPlane.findMany({
      where: {
        flight: {
          every: {
            id: undefined,
          },
        },
      },
    });
    return data;
  } catch (error) {
    console.log("Error", error);
    return [];
  }
}

export const getFlightById = async (id: string) => {
  try {
    const data = await prisma.flight.findFirst({
      where: {
        id,
      },
      include: {
        seats: {
          orderBy: {
            seatNumber: "asc",
          },
        },
        plane: true,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
