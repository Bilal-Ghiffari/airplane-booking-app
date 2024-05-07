import React from "react";
import { getFlightById } from "../../lib/data";
import FormFlight from "../../components/form-flights";
import { getAirPLanes } from "../../../airplane/lib/data";

type Params = {
  id: string;
};

interface EditFlightPageProps {
  params: Params;
}

export default async function EditFlightPage({ params }: EditFlightPageProps) {
  const airplanes = await getAirPLanes();
  const data = await getFlightById(params.id);
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold">Edit data Airplane</div>
      </div>
      <FormFlight type="EDIT" defaultValues={data} airplanes={airplanes} />
    </div>
  );
}
