import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import React from "react";
import { Logout } from "../actions";

export default function ButtonLogout() {
  return (
    <div className="space-y-2">
      <form action={Logout}>
        <Button
          variant={"destructive"}
          type="submit"
          className="w-full justify-start"
        >
          <LogOut className="mr-2 w-4 h-4" /> Logout
        </Button>
      </form>
    </div>
  );
}
