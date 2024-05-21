import { Suspense } from "react";
import Navbar from "../../components/molecules/navbar";
import FilterAirLine from "./components/filter-airline";
import SeatClass from "./components/filter-class";
import FilterFlight from "./components/filter-flight";
import FlightsAvailable from "./components/flights-available";
import ListFlight from "./components/list-flight";
import LoadingFilterAirline from "./components/loading-filter-airline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Searah",
  description:
    "Pesan tiket pesawat. Cukup satu aplikasi untuk kamu liburan. Mau ke mana? Semua ada tiketnya!",
  icons: "/assets/images/logos/logo.svg",
};

export default function AvailableFlightsPage() {
  return (
    <>
      <section
        id="Header"
        className="bg-[url('/assets/images/background/airplane.png')] bg-no-repeat bg-cover bg-left-top h-[290px] relative"
      >
        <div className="Header-content bg-gradient-to-r from-[#080318] to-[rgba(8,3,24,0)] h-[290px]">
          <Navbar />
          <FlightsAvailable />
          <div className="w-full h-[15px] bg-gradient-to-t from-[#080318] to-[rgba(8,3,24,0)] absolute bottom-0" />
        </div>
      </section>
      <section
        id="Content"
        className="container max-w-[1130px] mx-auto -mt-[33px] z-10 relative pb-[105px]"
      >
        <div className="flex w-full">
          <form className="ticket-filter flex flex-col shrink-0 w-[230px] gap-[30px] text-flysha-off-purple">
            <SeatClass />
            <FilterFlight />
            <Suspense fallback={<LoadingFilterAirline />}>
              <FilterAirLine />
            </Suspense>
          </form>
          <ListFlight />
        </div>
      </section>
    </>
  );
}
