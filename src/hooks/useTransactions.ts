import { User } from "lucia";
import useCheckoutData from "./useCheckout";
import { useMemo, useState } from "react";
import { SEAT_VALUES, SeatValuesType } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

type Props = {
  user: User | null;
};

// type DataType = {
//   bookingDate: Date | string;
//   price: bigint;
//   customerId: string;
//   flightId: string;
//   seatId: string;
//   departureCityCode: string;
//   destinationCityCode: string;
// };

const useTransaction = ({ user }: Props) => {
  const checkout = useCheckoutData();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const selectedSeat = useMemo(() => {
    return SEAT_VALUES[(checkout?.seat as SeatValuesType) ?? "ECONOMY"];
  }, [checkout?.seat]);

  const transactionMutate = useMutation({
    mutationFn: (data: any) =>
      axios
        .post("/api/transactions/create", data, {
          method: "post",
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => res.data),
  });

  const payTransaction = async () => {
    if (!checkout && !user) {
      return null;
    }

    // const totalPrice = BigInt(
    //   checkout?.flightDetetail?.price ?? 0 + selectedSeat.additionalPrice
    // );
    const body: any = {
      bookingDate: new Date(),
      customerId: user?.id ?? "user not found",
      departureCityCode:
        checkout?.flightDetetail?.departureCityCode ?? "depature not found",
      destinationCityCode:
        checkout?.flightDetetail?.destinationCityCode ??
        "destination not found",
      flightId: checkout?.flightDetetail?.id ?? "flight not found",
      price:
        checkout?.flightDetetail?.price ?? 0 + selectedSeat.additionalPrice,
      seatId: checkout?.seatDetail?.id ?? "seat not found",
    };
    try {
      setIsLoading(true);
      const transaction = await transactionMutate.mutateAsync(body);
      window.snap.pay(transaction?.midtrans?.token, {
        onSuccess: (result: unknown) => {
          console.log(result);
          router.push("/success-checkout");
        },
        onPending: (result: unknown) => {
          console.log(result);
          router.push("/success-checkout");
        },
        onError: (result: unknown) => {
          console.log(result);
          alert("Transaksi gagal silahkan coba lagi");
        },
        onClose: (result: unknown) => {
          console.log(result);
          alert("Transaksi gagal silahkan coba lagi");
        },
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return {
    isLoading,
    payTransaction,
  };
};

export default useTransaction;
