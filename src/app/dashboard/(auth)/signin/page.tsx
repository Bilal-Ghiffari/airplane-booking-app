import { Metadata } from "next";
import React from "react";
import FormSignIn from "./form";

type Props = {};
export const metadata: Metadata = {
  title: "Dashboard | Sign In",
};

export default function SignInPage({}: Props) {
  return <FormSignIn />;
}
