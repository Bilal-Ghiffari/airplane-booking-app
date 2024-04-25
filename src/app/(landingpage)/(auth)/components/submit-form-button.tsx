"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";

export default function SubmitFormButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      className="text-center text-flysha-black rounded-full disabled:opacity-40 bg-flysha-light-purple font-bold w-full p-[12px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF]"
    >
      {pending ? "Loading..." : "Sign In"}
    </Button>
  );
}
