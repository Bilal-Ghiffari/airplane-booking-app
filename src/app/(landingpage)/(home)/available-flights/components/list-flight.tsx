"use client";
import React, { useContext } from "react";
import FlightItem from "./flight-item";
import {
  FlightContext,
  FlightContextType,
} from "../../providers/flight-provider";
import LoadingListFlight from "./loading-list-flight";

type Props = {};

export default function ListFlight({}: Props) {
  const { flights, isLoading } = useContext(FlightContext) as FlightContextType;
  console.log("flights", flights);
  if (isLoading) {
    return <LoadingListFlight />;
  }
  return (
    <div className="ticket-container flex flex-col w-full gap-6">
      {flights?.map((item) => (
        <FlightItem key={item.id} data={item} />
      ))}
      <p className="text-center text-sm text-[#A0A0AC] h-fit">
        You’ve reached the end of results.
      </p>
    </div>
  );
}
