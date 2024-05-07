"use client";

import useCheckoutData from "@/hooks/useCheckout";
import useTransaction from "@/hooks/useTransactions";
import { rupiahFormat, SEAT_VALUES, SeatValuesType } from "@/lib/utils";
import { User } from "lucia";
import React, { useMemo } from "react";

type PaymentDetailProps = {
  user: User | null;
};

export default function PaymentDetail({ user }: PaymentDetailProps) {
  const checkout = useCheckoutData();
  const selectedSeat = useMemo(() => {
    return SEAT_VALUES[(checkout?.typeSeat as SeatValuesType) ?? "ECONOMY"];
  }, [checkout?.typeSeat]);

  const grandTotal = useMemo(() => {
    const seatPrice =
      checkout?.flightDetetail?.price ?? 0 + selectedSeat.additionalPrice;
    const baggage = checkout?.flightDetetail?.baggage ?? 0;
    const total = baggage + seatPrice;
    return {
      total,
    };
  }, [
    checkout?.flightDetetail?.baggage,
    checkout?.flightDetetail?.price,
    checkout?.typeSeat,
  ]);

  const { isLoading, payTransaction } = useTransaction({ user });
  return (
    <div className="flex flex-col gap-[30px] w-[400px]">
      <div className="flex flex-col gap-[18px]">
        <p className="font-semibold">Payment Details</p>
        <div className="flex justify-between">
          <span>Seat Price</span>
          <span className="font-semibold">
            {rupiahFormat(
              checkout?.flightDetetail?.price ??
                0 + selectedSeat.additionalPrice
            )}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Insurance 24%</span>
          <span className="font-semibold">Free</span>
        </div>
        <div className="flex justify-between">
          <span>Baggage</span>
          <span className="font-semibold">
            {rupiahFormat(checkout?.flightDetetail?.baggage ?? 0)}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Grand Total</span>
          <span className="font-bold text-flysha-light-purple">
            {rupiahFormat(grandTotal.total)}
          </span>
        </div>
      </div>
      <button
        type="button"
        disabled={isLoading}
        onClick={payTransaction}
        className="font-bold text-flysha-black bg-flysha-light-purple rounded-full h-12 w-full transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF] flex justify-center items-center"
      >
        Checkout with Midtrans
      </button>
    </div>
  );
}
