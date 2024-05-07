"use client";

import React, { useContext } from "react";
import {
  FlightContext,
  FlightContextType,
} from "../../providers/flight-provider";

type Props = {};

export default function FlightsAvailable({}: Props) {
  const { flights, state } = useContext(FlightContext) as FlightContextType;
  return (
    <div className="title container max-w-[1130px] mx-auto flex flex-col gap-1 pt-[50px] pb-[68px]">
      <h1 className="font-bold text-[32px] leading-[48px]">
        {state?.departure !== null && state?.arrival !== null
          ? `${state?.departure} to ${state?.arrival}`
          : "Several Flights from Destination and Arrival"}
      </h1>
      <p className="font-medium text-lg leading-[27px]">
        {flights?.length} flights available
      </p>
    </div>
  );
}
