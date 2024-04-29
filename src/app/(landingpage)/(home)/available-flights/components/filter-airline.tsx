import React from "react";
import { getAirplanes } from "../../lib/data";
import CheckboxAirplane from "./checkbox-airplane";

type Props = {};

export default async function FilterAirLine({}: Props) {
  const airplane = await getAirplanes();
  // console.log(airplane);
  return (
    <div className="flex flex-col gap-4">
      <p className="font-semibold">Airlines</p>
      {airplane.map((val, i) => (
        <CheckboxAirplane val={val} key={`${val.id + i}`} />
      ))}
    </div>
  );
}
