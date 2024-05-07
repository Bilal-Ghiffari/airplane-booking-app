"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { saveAirplane, updateAirplane } from "../lib/actions";
import { ActionResult } from "@/app/dashboard/(auth)/signin/form/actions";
import { AirPlane } from "@prisma/client";

interface FormAirplaneProps {
  type?: "ADD" | "Edit";
  defaultValues?: AirPlane | null;
}

const initialFormState: ActionResult = {
  errorDesc: [],
  errorTitle: null,
};

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} className="w-full">
      Submit
    </Button>
  );
};
export default function FormAirplane({
  defaultValues,
  type,
}: FormAirplaneProps) {
  const updateAirplaneWithId = (_state: ActionResult, formData: FormData) =>
    updateAirplane(null, defaultValues!!, formData);
  const [state, formAction] = useFormState(
    type === "ADD" ? saveAirplane : updateAirplaneWithId,
    initialFormState
  );
  return (
    <form className="w-[40%] space-y-4" action={formAction}>
      {state.errorTitle !== null && (
        <div className="mx-auto my-7 bg-red-500 w-[400px] p-4 rounded-lg text-white">
          <div className="font-bold mb-4">{state.errorTitle}</div>
          <ul className="list-disc list-inside">
            {state.errorDesc?.map((value, i) => (
              <li key={i + value}>{value}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="">
        <Label htmlFor="code">Kode Pesawat</Label>
        <Input
          placeholder="Kode Pesawat..."
          name="code"
          id="code"
          defaultValue={defaultValues?.code}
          required
        />
      </div>
      <div className="">
        <Label htmlFor="name">Nama Pesawat</Label>
        <Input
          placeholder="Nama Pesawat..."
          name="name"
          id="name"
          defaultValue={defaultValues?.name}
          required
        />
      </div>
      <div className="">
        <Label htmlFor="image">Upload Foto</Label>
        <Input type="file" name="image" id="name" />
      </div>
      <SubmitButton />
    </form>
  );
}
