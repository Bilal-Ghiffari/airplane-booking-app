"use client";

import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";
import { deleteFlights } from "../lib/actions";

type Props = {
  id: string;
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button size="sm" disabled={pending} type="submit" variant="destructive">
      <Trash className="mr-2 w-4 h-4" />
      {pending ? "Process..." : "Hapus"}
    </Button>
  );
}

export default function DeleteFlight({ id }: Props) {
  const deleteFlightWithId = deleteFlights.bind(null, id);
  return (
    <form action={deleteFlightWithId}>
      <SubmitButton />
    </form>
  );
}
