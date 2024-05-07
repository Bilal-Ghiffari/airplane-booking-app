import { FlightSeat } from "@prisma/client";
import React, { createContext, useState } from "react";

type FligthSeatType = Pick<FlightSeat, "id" | "seatNumber">;

type SeatProviderType = {
  children: React.ReactNode;
};

export type SeatContextType = {
  seat: FligthSeatType | null;
  setSelectedSeat: (seat: FligthSeatType) => void;
};

export const SeatContext = createContext<SeatContextType | null>(null);

export default function SeatNumberProvider({ children }: SeatProviderType) {
  const [seat, setSeat] = useState<FligthSeatType | null>(null);

  const setSelectedSeat = (seat: FligthSeatType) => {
    setSeat(seat);
  };
  return (
    <SeatContext.Provider value={{ seat, setSelectedSeat }}>
      {children}
    </SeatContext.Provider>
  );
}
