import { User } from "lucia";
import React from "react";
import FlightCard from "../../checkout/components/organismes/flight-card";

type Props = {
  user: User | null;
};

export default function CheckoutCard({ user }: Props) {
  return <FlightCard user={user} />;
}
