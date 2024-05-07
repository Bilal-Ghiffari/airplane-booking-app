import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

type AlertProps = {
  messsage: string;
  variant: "default" | "destructive";
};

export default function Alerts({ messsage, variant }: AlertProps) {
  return (
    <Alert variant={variant}>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{messsage}</AlertDescription>
    </Alert>
  );
}
