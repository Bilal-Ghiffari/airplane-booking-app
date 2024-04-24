import React from "react";
import FormFlight from "../components/form-flights";
import { getAirPLanes } from "../../airplane/lib/data";

export default async function CreateFlightPage() {
  const airplanes = await getAirPLanes();
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <div className="my-6 text-2xl font-semibold">Tambah data Flight</div>
      </div>
      <FormFlight type="ADD" airplanes={airplanes} />
    </div>
  );
}
