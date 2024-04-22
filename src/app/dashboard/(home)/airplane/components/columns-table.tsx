"use client";
import { Button } from "@/components/ui/button";
import { retrievePublicUrl } from "@/lib/supabase";
import { AirPlane } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DeleteAirplane from "./delete-airplane";

export const columns: ColumnDef<AirPlane>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const plane = row.original;
      return (
        <Image
          src={retrievePublicUrl(plane.image)}
          alt="Image planes"
          height={100}
          width={100}
        />
      );
    },
  },
  {
    accessorKey: "code",
    header: "Code",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const plane = row.original;
      console.log("original", plane);
      return (
        <div className="inline-flex gap-6 items-center">
          <Button variant="secondary" size="sm" asChild>
            <Link href={`/dashboard/airplane/edit/${plane.id}`}>
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </Link>
          </Button>
          <DeleteAirplane id={plane.id} />
        </div>
      );
    },
  },
];
