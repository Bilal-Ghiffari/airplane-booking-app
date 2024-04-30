import React from "react";
import SeatItem from "../molecules/seat-item";

type Props = {};

export default function SeatList({}: Props) {
  return (
    <form className="flex flex-col gap-5">
      <div className="seat-row flex justify-between">
        <div className="seat-col flex gap-[19px]">
          <SeatItem />
          <SeatItem />
        </div>
        <div className="seat-col flex gap-[19px]">
          <SeatItem />
          <SeatItem />
        </div>
      </div>
    </form>
  );
}
