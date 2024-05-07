import { Checkout, CHECKOUT_KEY } from "@/lib/utils";
import { useEffect, useState } from "react";

const useCheckoutData = () => {
  const [data, setData] = useState<Checkout | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.sessionStorage) {
      const value = window.sessionStorage.getItem(CHECKOUT_KEY);
      if (value) {
        setData(JSON.parse(value));
      }
    }
  }, []);
  console.log(data);
  return data;
};

export default useCheckoutData;
