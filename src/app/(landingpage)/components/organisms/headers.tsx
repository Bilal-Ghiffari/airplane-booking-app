import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "../molecules/navbar";
import { getCityFilter } from "../../(home)/lib/data";
import CompanyLogos from "./company-logos";
import { searchFlight } from "../../(home)/lib/actions";

export default async function Header() {
  const { departure, destination } = await getCityFilter();
  return (
    <section
      id="Header"
      className="bg-[url('/assets/images/background/airplane.png')] bg-no-repeat bg-cover bg-left-top -z-10"
    >
      <div className="Header-content bg-gradient-to-r from-[#080318] to-[rgba(8,3,24,0)] z=0">
        <Navbar />
        <div className="hero-section container max-w-[1130px] w-full mx-auto flex flex-col gap-[90px] mt-[103px]">
          <div className="title flex flex-col gap-[30px]">
            <h1 className="font-extrabold text-[80px] leading-[90px]">
              Best Flights. <br />
              Cheaper Budget.
            </h1>
            <p className="font-medium text-lg leading-[36px]">
              No more long queue, get more delicious heavy meals. <br />
              Crafted by best talented people around the world.
            </p>
          </div>
          <form
            action={searchFlight}
            className="bg-white text-flysha-black w-full flex justify-between items-center rounded-[20px] p-5"
          >
            <div className="flex gap-[50px] items-center p-5">
              <div className="flex flex-col justify-center gap-[14px]">
                <label htmlFor="departure" className="text-lg">
                  Departure
                </label>
                <div className="flex gap-[10px]">
                  <div className="flex items-center w-8 h-8 shrink-0">
                    <Image
                      src="/assets/images/icons/airplane.svg"
                      alt="icon"
                      width={30}
                      height={30}
                    />
                  </div>
                  <select
                    name="departure"
                    id="departure"
                    className="font-semibold text-[22px] leading-[26.63px] appearance-none bg-[url(/assets/images/icons/arrow-down.svg)] bg-no-repeat bg-[right_1px] pr-[30px]"
                  >
                    <option value="" disabled selected>
                      Departure
                    </option>
                    {departure?.map((val, key) => (
                      <option key={`${key}-${val}`} value={val}>
                        {val}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <hr className="border border-[#EDE8F5] h-[60px]" />
              <div className="flex flex-col justify-center gap-[14px]">
                <label htmlFor="arrival" className="text-lg">
                  Arrival
                </label>
                <div className="flex gap-[10px]">
                  <div className="flex items-center w-8 h-8 shrink-0">
                    <Image
                      src="/assets/images/icons/airplane.svg"
                      alt="icon"
                      width={30}
                      height={30}
                    />
                  </div>
                  <select
                    name="arrival"
                    id="arrival"
                    className="font-semibold text-[22px] leading-[26.63px] appearance-none bg-[url(/assets/images/icons/arrow-down.svg)] bg-no-repeat bg-[right_1px] pr-[30px]"
                  >
                    <option value="" disabled selected>
                      Destination
                    </option>
                    {destination?.map((val, key) => (
                      <option key={`${key}-${val}`} value={val}>
                        {val}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <hr className="border border-[#EDE8F5] h-[60px]" />
              <div className="flex flex-col justify-center gap-[14px]">
                <label htmlFor="date" className="text-lg">
                  Departure Date
                </label>
                <div className="flex gap-[10px]">
                  <div className="flex items-center w-8 h-8 shrink-0">
                    <Image
                      src="/assets/images/icons/calendar.svg"
                      alt="icon"
                      width={30}
                      height={30}
                    />
                  </div>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="relative font-semibold text-[22px] leading-[26.63px] w-[157px] bg-transparent focus:outline-none appearance-none [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0"
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="font-bold text-2xl leading-9 text-flysha-black text-center bg-flysha-light-purple rounded-[18px] p-[12px_30px] flex shrink-0 items-center h-[108px]  transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF]"
            >
              Explore Now
            </button>
          </form>
        </div>
        <CompanyLogos />
      </div>
    </section>
  );
}
