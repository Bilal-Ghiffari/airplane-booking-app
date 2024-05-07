"use client";

import { ActionResult } from "@/app/dashboard/(auth)/signin/form/actions";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useFormState } from "react-dom";
import SubmitFormButton from "../../components/submit-form-button";
import { signUpUser } from "../lib/actions";

type Props = {};
const initialFormState: ActionResult = {
  errorTitle: null,
  errorDesc: [],
};

export default function FormSignUp({}: Props) {
  const [state, formAction] = useFormState(signUpUser, initialFormState);
  return (
    <form
      className="bg-white text-flysha-black w-[500px] flex flex-col rounded-[20px] gap-5 p-5"
      action={formAction}
    >
      {state.errorTitle !== null && (
        <div className="bg-red-500 w-full p-3 rounded-lg text-white">
          <div className="font-bold mb-4">{state.errorTitle}</div>
          <ul className="list-disc list-inside">
            {state.errorDesc?.map((val, i) => (
              <li key={i}>{val}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex gap-5">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" className="font-medium">
            Complete Name
          </Label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Write your name"
            className="rounded-full w-full p-[12px_20px] h-[48px] bg-[#EDE8F5] appearance-none outline-none font-semibold focus:ring-2 focus:ring-flysha-light-purple"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="passport" className="font-medium">
            No. Passport
          </Label>
          <input
            type="text"
            name="passport"
            id="passport"
            placeholder="Write passport number"
            className="rounded-full w-full p-[12px_20px] h-[48px] bg-[#EDE8F5] appearance-none outline-none font-semibold focus:ring-2 focus:ring-flysha-light-purple"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="email" className="font-medium">
          Email Address
        </Label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Write your email"
          className="rounded-full w-full p-[12px_20px] h-[48px] bg-[#EDE8F5] appearance-none outline-none font-semibold  focus:ring-2 focus:ring-flysha-light-purple"
        />
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="password" className="font-medium">
          Password
        </Label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Type your password"
          className="rounded-full w-full p-[12px_20px] h-[48px] bg-[#EDE8F5] appearance-none outline-none font-semibold focus:ring-2 focus:ring-flysha-light-purple"
        />
      </div>
      <SubmitFormButton />
      <Link
        href="/sign-in"
        className="text-center text-flysha-black hover:text-white rounded-full bg-white hover:bg-flysha-black font-semibold w-full p-[12px_30px] border border-flysha-black transition-all duration-300"
      >
        Sign In
      </Link>
    </form>
  );
}
