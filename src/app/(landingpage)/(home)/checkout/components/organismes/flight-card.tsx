"use client";

import useCheckoutData from "@/hooks/useCheckout";
import { retrievePublicUrl } from "@/lib/supabase";
import { dateFormat, SEAT_VALUES, SeatValuesType } from "@/lib/utils";
import { User } from "lucia";
import Image from "next/image";
import React, { useMemo } from "react";

type FlightCardProps = {
  user: User | null;
};

export default function FlightCard({ user }: FlightCardProps) {
  const checkout = useCheckoutData();
  const selectedSeat = useMemo(() => {
    return SEAT_VALUES[(checkout?.seat as SeatValuesType) ?? "ECONOMY"];
  }, [checkout?.seat]);
  return (
    <div className="bg-white flex flex-col rounded-[20px] w-[340px]">
      <div className="flex flex-col p-[20px_20px_25px] border-b-2 border-dotted border-flysha-grey gap-4 relative">
        <div className="flex w-[300px] h-[130px] shrink-0 rounded-[14px] overflow-hidden bg-[#EDE8F5]">
          <Image
            width={300}
            height={130}
            src={
              checkout?.flightDetetail?.plane.image
                ? retrievePublicUrl(checkout?.flightDetetail?.plane.image)
                : ""
            }
            className="w-full h-full object-cover"
            alt="thumbnail"
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[2px]">
            <p className="font-bold text-lg text-flysha-black">
              {checkout?.flightDetetail?.plane.name}
            </p>
            <p className="text-sm text-flysha-grey">
              {checkout?.flightDetetail?.plane?.code} • {selectedSeat.label}
            </p>
          </div>
          <div className="flex h-fit">
            <Image
              width={20}
              height={20}
              src="/assets/images/icons/Star.svg"
              className="w-5 h-5"
              alt="star"
            />
            <Image
              width={20}
              height={20}
              src="/assets/images/icons/Star.svg"
              className="w-5 h-5"
              alt="star"
            />
            <Image
              width={20}
              height={20}
              src="/assets/images/icons/Star.svg"
              className="w-5 h-5"
              alt="star"
            />
            <Image
              width={20}
              height={20}
              src="/assets/images/icons/Star.svg"
              className="w-5 h-5"
              alt="star"
            />
            <Image
              width={20}
              height={20}
              src="/assets/images/icons/Star.svg"
              className="w-5 h-5"
              alt="star"
            />
          </div>
        </div>
        <div className="flex justify-between items-center w-[370px] absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 -bottom-[30px]">
          <div className="w-[30px] h-[30px] rounded-full flex shrink-0 bg-flysha-black"></div>
          <div className="w-[30px] h-[30px] rounded-full flex shrink-0 bg-flysha-black"></div>
        </div>
      </div>
      <div className="flex flex-col gap-[10px] p-[25px_20px_20px]">
        <div className="flex justify-between text-flysha-black">
          <span>Date</span>
          <span className="font-semibold">
            {checkout?.flightDetetail?.departureDate
              ? dateFormat(
                  checkout?.flightDetetail?.departureDate,
                  "DD MMM YYYY"
                )
              : ""}
          </span>
        </div>
        <div className="flex justify-between text-flysha-black">
          <span>Time</span>
          <span className="font-semibold">
            {checkout?.flightDetetail?.departureDate
              ? dateFormat(checkout?.flightDetetail?.departureDate, "HH:mm")
              : ""}{" "}
            -{" "}
            {checkout?.flightDetetail?.arrivalDate
              ? dateFormat(checkout?.flightDetetail?.arrivalDate, "HH:mm")
              : ""}
          </span>
        </div>
        <div className="flex justify-between text-flysha-black">
          <span>Airport</span>
          <span className="font-semibold">
            {checkout?.flightDetetail?.departureCityCode} -{" "}
            {checkout?.flightDetetail?.destinationCityCode}
          </span>
        </div>
        <div className="flex justify-between text-flysha-black">
          <span>Name</span>
          <span className="font-semibold">{user?.name}</span>
        </div>
        <div className="flex justify-between text-flysha-black">
          <span>Seat Choosen</span>
          <span className="font-semibold">
            {checkout?.seatDetail?.seatNumber}
          </span>
        </div>
        <div className="flex justify-between text-flysha-black">
          <span>Passport No.</span>
          <span className="font-semibold">{user?.passport}</span>
        </div>
        <div className="flex justify-between text-flysha-black">
          <span>Passenger</span>
          <span className="font-semibold">1 Person</span>
        </div>
      </div>
    </div>
  );
}