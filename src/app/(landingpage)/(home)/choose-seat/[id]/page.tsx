import React from "react";
import SeatList from "./components/organism/seat-list";
import SlideDetail from "./components/organism/slide-detail";
import { getFlightById } from "../../lib/data";
import { getUser } from "@/lib/auth";
import { Session } from "lucia";

type Params = {
  id: string;
};

interface ChooseSeatType {
  params: Params;
}

export default async function ChooseSeat({ params }: ChooseSeatType) {
  const { session } = await getUser();
  const flight = await getFlightById(params.id);
  return (
    <section
      id="Chosse-Seat"
      className="container flex flex-col sm:flex-row items-center sm:items-start justify-between sm:w-[904px] pt-10 mx-auto sm:pb-0 min-h-screen"
    >
      <div className="flex h-[calc(100vh-40px)] items-end">
        <div className="flex shrink-0 w-[409px] overflow-visible relative">
          <div className="plane-body absolute overflow-x-hidden sm:overflow-visible bottom-0">
            <img
              src="../assets/images/background/plane-body.svg"
              className="z-0"
              alt="images"
            />
            <img
              src="../assets/images/background/plane-windshield.svg"
              className="z-10 absolute transform -translate-x-1/2 left-1/2 top-[18px]"
              alt="images"
            />
            <div className="flex justify-center w-[927px] shrink-0 absolute transform -translate-x-1/2 left-[54%] bottom-0 -z-10 ">
              <img
                src="../assets/images/background/plane-wings.svg"
                className="w-[927px]"
                alt="images"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 mb-[30px] px-[30px] w-full z-50">
            <div className="flex gap-[30px]">
              <div className="flex items-center gap-[6px]">
                <div className="w-[14px] h-[14px] flex shrink-0 rounded-full bg-flysha-light-purple"></div>
                <span className="font-semibold">Selected</span>
              </div>
              <div className="flex items-center gap-[6px]">
                <div className="w-[14px] h-[14px] flex shrink-0 rounded-full bg-flysha-dark-grey"></div>
                <span className="font-semibold">Taken</span>
              </div>
              <div className="flex items-center gap-[6px]">
                <div className="w-[14px] h-[14px] flex shrink-0 rounded-full bg-flysha-black border border-white"></div>
                <span className="font-semibold">Available</span>
              </div>
            </div>
            {flight?.seats && <SeatList seats={flight.seats} />}
          </div>
        </div>
      </div>
      {flight && <SlideDetail flight={flight} session={session as Session} />}
    </section>
  );
}