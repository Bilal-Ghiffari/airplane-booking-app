"use client";

import { useRouter } from "next/navigation";

type Props = {};

export default function CheckoutLink({}: Props) {
  const router = useRouter();
  const handleLinkButton = (link: string) => {
    if (link) {
      router.push(link);
      sessionStorage.clear();
    }
  };
  return (
    <div className="flex flex-col gap-[42px] w-fit">
      <h1 className="font-bold text-[32px] leading-[48px]">
        Success Checkout. <br />
        Enjoy Your Best Flight.
      </h1>
      <div className="flex flex-col gap-[14px]">
        <button
          onClick={() => handleLinkButton("/available-flights")}
          className="font-bold text-flysha-black bg-flysha-light-purple rounded-full h-12 w-full transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF] flex justify-center items-center"
        >
          Book More Flights
        </button>
        <button
          onClick={() => handleLinkButton("/my-tickets")}
          className="font-semibold bg-flysha-black hover:bg-flysha-bg-purple border border-white hover:border-0 rounded-full h-12 w-full transition-all duration-300 flex justify-center items-center"
        >
          View My Tickets
        </button>
      </div>
    </div>
  );
}
