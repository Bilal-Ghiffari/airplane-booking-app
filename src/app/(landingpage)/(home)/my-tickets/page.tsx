import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import Navbar from "../../components/molecules/navbar";
import TicketCard from "./components/ticket-card";
import { getMyTicket } from "./lib/data";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Tickets",
  description:
    "Pesan tiket pesawat. Cukup satu aplikasi untuk kamu liburan. Mau ke mana? Semua ada tiketnya!",
  icons: "/assets/images/logos/logo.svg",
};

export default async function MyTickets() {
  const { session, user } = await getUser();
  if (!session) {
    redirect("/sign-in");
  }

  const tickets = await getMyTicket(user.id);
  return (
    <>
      <section
        id="Header"
        className="bg-[url('/assets/images/background/airplane.png')] bg-no-repeat bg-cover bg-left-top h-[290px] relative"
      >
        <div className="Header-content bg-gradient-to-r from-[#080318] to-[rgba(8,3,24,0)] h-[290px]">
          <Navbar />
          <div className="title container max-w-[1130px] mx-auto flex flex-col gap-1 pt-[50px] pb-[68px]">
            <h1 className="font-bold text-[32px] leading-[48px]">My Tickets</h1>
            <p className="font-medium text-lg leading-[27px]">
              183,042 flights avaiable
            </p>
          </div>
          <div className="w-full h-[15px] bg-gradient-to-t from-[#080318] to-[rgba(8,3,24,0)] absolute bottom-0"></div>
        </div>
      </section>
      <section
        id="Content"
        className="container max-w-[1130px] mx-auto flex justify-end -mt-[60px] pb-[100px] z-10 relative"
      >
        <div className="ticket-container flex flex-col w-[900px] gap-6">
          {tickets.map((val) => (
            <TicketCard key={val.id} data={val} />
          ))}
          <p className="text-center text-sm text-[#A0A0AC] h-fit">
            You’ve reached the end of results.
          </p>
        </div>
      </section>
    </>
  );
}
