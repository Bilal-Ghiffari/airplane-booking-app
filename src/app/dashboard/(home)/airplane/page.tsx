import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import { columns } from "./components/columns-table";
import { getAirPLanes } from "./lib/data";

export default async function AirPlans() {
  const planes = await getAirPLanes();
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-semibold">Airplanes</div>
        <Button asChild>
          <Link href={"/dashboard/airplane/create"}>
            <Plus className="mr-2 h-4 w-4" />
            Tambah Data
          </Link>
        </Button>
      </div>
      <DataTable columns={columns} data={planes} />
    </>
  );
}
