import { DataTable } from "@/components/ui/data-table";
import React from "react";
import { columns } from "./components/columns-user";
import { getUsers } from "./lib/data";

export default async function UserPage() {
  const users = await getUsers();
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold">Users</div>
      </div>
      <DataTable columns={columns} data={users} />
    </>
  );
}
