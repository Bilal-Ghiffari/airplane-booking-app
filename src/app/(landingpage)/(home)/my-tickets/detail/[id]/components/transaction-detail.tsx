import React from "react";
import { AirPlane, Flight, FlightSeat, Ticket, User } from "@prisma/client";
import { cn, rupiahFormat } from "@/lib/utils";

type Data = Ticket & {
  flight: Flight & {
    plane: AirPlane;
  };
  customer: User;
  seat: FlightSeat;
};

interface TransactionDetailProps {
  data: Data;
}
export default function TransactionDetail({ data }: TransactionDetailProps) {
  return (
    <div className="flex flex-col gap-[30px] w-[400px]">
      <div className="flex flex-col gap-[18px]">
        <p className="font-semibold">Payment Details</p>
        <div className="flex justify-between">
          <span>ID Transaction</span>
          <span className="font-semibold">{data.code}</span>
        </div>
        <div className="flex justify-between">
          <span>Seat Price</span>
          <span className="font-semibold">
            {rupiahFormat(Number(data.price))}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Insurance 24%</span>
          <span className="font-semibold">Free</span>
        </div>
        <div className="flex justify-between">
          <span>Baggage</span>
          <span className="font-semibold">
            {rupiahFormat(data.flight.baggage)}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Grand Total</span>
          <span className="font-bold text-flysha-light-purple">
            {rupiahFormat(Number(data.price) + data.flight.baggage)}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Status</span>
          <span
            className={cn(
              "font-bold",
              data.status === "PENDING" && "text-yellow-500",
              data.status === "SUCCESS" && "text-[#8DFFBA]",
              data.status === "FAILED" && "text-[#c33f65]"
            )}
          >
            {data.status}
          </span>
        </div>
      </div>
    </div>
  );
}
