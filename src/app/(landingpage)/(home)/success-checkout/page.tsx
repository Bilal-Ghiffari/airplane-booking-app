import { getUser } from "@/lib/auth";
import Navbar from "../../components/molecules/navbar";
import CheckoutCard from "./components/checkout-card";
import CheckoutLink from "./components/checkout-link";

type Props = {};

export default async function SuccessCheckout({}: Props) {
  const { user } = await getUser();
  return (
    <>
      <section
        id="Header"
        className="bg-[url('/assets/images/background/airplane.png')] bg-no-repeat bg-cover bg-left-top h-[290px] relative"
      >
        <div className="Header-content bg-gradient-to-r from-[#080318] to-[rgba(8,3,24,0)] h-[290px]">
          <Navbar />
          <div className="w-full h-[15px] bg-gradient-to-t from-[#080318] to-[rgba(8,3,24,0)] absolute bottom-0"></div>
        </div>
      </section>
      <section
        id="Content"
        className="container max-w-[1130px] mx-auto -mt-[103px] z-10 relative"
      >
        <div className="checkout-container flex justify-center items-center gap-[100px]">
          <CheckoutCard user={user} />
          <CheckoutLink />
        </div>
      </section>
    </>
  );
}
