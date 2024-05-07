"use client";

import { AirPlane } from "@prisma/client";
import React, { ChangeEvent, useContext } from "react";
import {
  FilterActionKind,
  FlightContext,
  FlightContextType,
} from "../../providers/flight-provider";

type CheckBoxAirPLaneType = {
  val: AirPlane;
};

export default function CheckboxAirplane({ val }: CheckBoxAirPLaneType) {
  const { dispatch } = useContext(FlightContext) as FlightContextType;

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    dispatch({
      type: isChecked
        ? FilterActionKind.ADD_PLANE
        : FilterActionKind.REMOVE_PLANE,
      payload: {
        planeId: value,
      },
    });
  };
  return (
    <label
      htmlFor={val.name}
      className="font-semibold flex items-center gap-[10px] text-white"
    >
      <input
        type="checkbox"
        name="airlines"
        value={val.id}
        id={val.name}
        onChange={handleChangeInput}
        className="w-[18px] h-[18px] appearance-none checked:border-[3px] checked:border-solid checked:border-flysha-black rounded-[6px] checked:bg-flysha-light-purple ring-2 ring-flysha-off-purple checked:ring-white"
      />
      {val.name}
    </label>
  );
}
