"use client";

import { Button } from "@/components/ui/button";
import { retrievePublicUrl } from "@/lib/supabase";
import { AirPlane, Flight, FlightSeat } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ColumnRouteFlight from "./column-route-flight";
import ColumnSeatPrice from "./column-seatprice";
import DeleteFlight from "./delete-flight";

export type FlightColumn = Flight & {
  plane: AirPlane;
  seats: FlightSeat[];
};

export const columsn: ColumnDef<FlightColumn>[] = [
  {
    accessorKey: "planeId",
    header: "Pesawat",
    cell: ({ row }) => {
      const flight = row.original;
      const planeFlightUrl = retrievePublicUrl(flight.plane.image);
      return (
        <div className="inline-flex items-center gap-5">
          <Image
            src={planeFlightUrl}
            alt="Image Flight"
            width={120}
            height={120}
            className="rounded-xl"
          />
          <div className="font-bold">{flight.plane.name}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "departureCity",
    header: "Rute",
    cell: ({ row }) => {
      const flight = row.original;
      return <ColumnRouteFlight flight={flight} />;
    },
  },
  {
    accessorKey: "price",
    header: "Harga",
    cell: ({ row }) => {
      const flight = row.original;
      return <ColumnSeatPrice flight={flight} />;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const flight = row.original;
      return (
        <div className="inline-flex gap-6 items-center">
          <Button variant="secondary" size="sm" asChild>
            <Link href={`/dashboard/flights/edit/${flight.id}`}>
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </Link>
          </Button>
          <DeleteFlight id={flight.id} />
        </div>
      );
    },
  },
];
