"use client";

import React, { useMemo } from "react";
import SeatItem from "../molecules/seat-item";
import useCheckoutData from "@/hooks/useCheckout";
import { FlightSeat } from "@prisma/client";

type SeatListType = {
  seats: FlightSeat[];
};

export default function SeatList({ seats }: SeatListType) {
  const checkout = useCheckoutData();
  const { seatA, seatB, seatC, seatD } = useMemo(() => {
    const typeSeats = seats.filter((seat) => seat.type === checkout?.seat);
    const seatA = typeSeats.filter((seat) => seat.seatNumber.startsWith("A"));
    const seatB = typeSeats.filter((seat) => seat.seatNumber.startsWith("B"));
    const seatC = typeSeats.filter((seat) => seat.seatNumber.startsWith("C"));
    const seatD = typeSeats.filter((seat) => seat.seatNumber.startsWith("D"));
    return { seatA, seatB, seatC, seatD };
  }, [checkout, seats]);
  return (
    <form className="flex flex-row justify-between gap-5">
      <div className="flex gap-5">
        <div className="flex flex-col gap-[19px]">
          {seatA.map((seat) => (
            <SeatItem key={seat.id} seat={seat} />
          ))}
        </div>
        <div className="flex flex-col gap-[19px]">
          {seatB.map((seat) => (
            <SeatItem key={seat.id} seat={seat} />
          ))}
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-[19px]">
          {seatC.map((seat) => (
            <SeatItem key={seat.id} seat={seat} />
          ))}
        </div>
        <div className="flex flex-col gap-[19px]">
          {seatD.map((seat) => (
            <SeatItem key={seat.id} seat={seat} />
          ))}
        </div>
      </div>
    </form>
  );
}
