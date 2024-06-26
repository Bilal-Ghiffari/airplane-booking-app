"use client";

import { TypeSeat } from "@prisma/client";
import React, { ChangeEvent, useContext } from "react";
import {
  FilterActionKind,
  FlightContext,
  FlightContextType,
} from "../../providers/flight-provider";

type Props = {};
const SEAT_OPTIONS: TypeSeat[] = ["ECONOMY", "BUSINESS", "FIRST"];

export default function SeatClass({}: Props) {
  const { dispatch } = useContext(FlightContext) as FlightContextType;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FilterActionKind.SET_SEAT,
      payload: {
        planeId: "",
        typeSeat: event.target.value,
      },
    });
  };
  return (
    <div className="flex flex-col gap-4">
      <p className="font-semibold">Seat Class</p>
      {SEAT_OPTIONS.map((val, i) => (
        <label
          key={`${val}-${i}`}
          htmlFor={val}
          className="font-semibold flex items-center gap-[10px] has-[:checked]:text-white"
        >
          <input
            type="radio"
            name="seat"
            value={val}
            onChange={handleChange}
            id={val}
            className="w-[18px] h-[18px] appearance-none checked:border-[3px] checked:border-solid checked:border-flysha-black rounded-full checked:bg-flysha-light-purple ring-2 ring-flysha-off-purple checked:ring-white"
          />
          {val}
        </label>
      ))}
    </div>
  );
}
