"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SubmitFormButton from "../../components/submit-form-button";
import { AirPlane, Flight } from "@prisma/client";
import { useFormState } from "react-dom";
import { saveFlights, updateFlight } from "../lib/actions";
import { ActionResult } from "@/app/dashboard/(auth)/signin/form/actions";
import { dateFormat } from "@/lib/utils";

const initialFormState: ActionResult = {
  errorDesc: [],
  errorTitle: null,
};

type Props = {
  airplanes: AirPlane[];
  type?: "ADD" | "EDIT";
  defaultValues?: Flight | null;
};

export default function FormFlight({ airplanes, defaultValues, type }: Props) {
  const updateFlightWithId = (_state: ActionResult, formData: FormData) =>
    updateFlight(null, formData, defaultValues?.id!!);
  const [state, formAction] = useFormState(
    type === "ADD" ? saveFlights : updateFlightWithId,
    initialFormState
  );
  return (
    <form className="space-y-6" action={formAction}>
      {state?.errorTitle !== null && (
        <div className="mx-auto my-7 bg-red-500 w-[400px] p-4 rounded-lg text-white">
          <div className="font-bold mb-4">{state.errorTitle}</div>
          <ul className="list-disc list-inside">
            {state.errorDesc?.map((value, i) => (
              <li key={i + value}>{value}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="planeId">Pilih pesawat</Label>
          <Select name="planeId" defaultValue={defaultValues?.planeId}>
            <SelectTrigger id="planeId">
              <SelectValue placeholder="pilih pesawat" />
            </SelectTrigger>
            <SelectContent>
              {airplanes.map((item) => (
                <SelectItem key={item.id} value={item.id}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="price">Harga Ticket</Label>
          <Input
            placeholder="Harga Ticket..."
            name="price"
            id="price"
            type="number"
            min={0}
            defaultValue={defaultValues?.price}
            required
          />
          <span className="text-xs text-gray-500">
            Harga untuk class business bertambah Rp 500.000 & class first
            bertambah Rp 750.000
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="departureCity">Kota Keberangkatan</Label>
          <Input
            placeholder="Kota Keberangkatan..."
            name="departureCity"
            id="departureCity"
            defaultValue={defaultValues?.departureCity}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="departureDate">Tanggal Keberangkatan</Label>
          <Input
            className="block"
            type="datetime-local"
            placeholder="Tanggal Keberangkatan..."
            name="departureDate"
            id="departureDate"
            defaultValue={dateFormat(
              defaultValues?.departureDate!!,
              "YYYY-MM-DDTHH:MM"
            )}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="departureCityCode">Kode Kota</Label>
          <Input
            placeholder="Kode Kota..."
            name="departureCityCode"
            id="departureCityCode"
            defaultValue={defaultValues?.departureCityCode}
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="destinationCity">Kota Tujuan</Label>
          <Input
            placeholder="Kota Tujuan"
            name="destinationCity"
            id="destinationCity"
            defaultValue={defaultValues?.destinationCity}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="arrivalDate">Tanggal Tiba</Label>
          <Input
            className="block"
            type="datetime-local"
            placeholder="Tanggal Tiba..."
            name="arrivalDate"
            id="arrivalDate"
            defaultValue={dateFormat(
              defaultValues?.arrivalDate!!,
              "YYYY-MM-DDTHH:MM"
            )}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="destinationCityCode">Kode Kota</Label>
          <Input
            placeholder="Kode Kota..."
            name="destinationCityCode"
            id="destinationCityCode"
            defaultValue={defaultValues?.destinationCityCode}
            required
          />
        </div>
      </div>
      <SubmitFormButton />
    </form>
  );
}
