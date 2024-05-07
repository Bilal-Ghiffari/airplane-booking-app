"use client";

import React from "react";
import { Toaster } from "@/components/ui/toaster";
import SeatProvider from "./provider/seat-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SeatProvider>
      {children} <Toaster />
    </SeatProvider>
  );
}
