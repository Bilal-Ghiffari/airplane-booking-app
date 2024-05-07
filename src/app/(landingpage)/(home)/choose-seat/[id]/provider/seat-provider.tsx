import { FlightSeat } from "@prisma/client";
import React, { createContext, useState } from "react";

type SeatProviderType = {
  children: React.ReactNode;
};

export type SeatContextType = {
  seat: FlightSeat | null;
  setSelectedSeat: (seat: FlightSeat) => void;
};

export const SeatContext = createContext<SeatContextType | null>(null);

export default function SeatProvider({ children }: SeatProviderType) {
  const [seat, setSeat] = useState<FlightSeat | null>(null);

  const setSelectedSeat = (seat: FlightSeat) => {
    setSeat(seat);
  };
  return (
    <SeatContext.Provider value={{ seat, setSelectedSeat }}>
      {children}
    </SeatContext.Provider>
  );
}
