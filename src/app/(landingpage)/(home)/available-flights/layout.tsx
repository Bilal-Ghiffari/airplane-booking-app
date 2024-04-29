import React from "react";
import QueryProvider from "../providers/query-provider";
import FlightProvider from "../providers/flight-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProvider>
      <FlightProvider>{children}</FlightProvider>
    </QueryProvider>
  );
}
