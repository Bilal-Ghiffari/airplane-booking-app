import React from "react";
import FormAirPLane from "../components/form-airplane";

export default function CreateAirplanePage() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold">Tambah data Airplane</div>
      </div>
      <FormAirPLane type="ADD" />
    </div>
  );
}
