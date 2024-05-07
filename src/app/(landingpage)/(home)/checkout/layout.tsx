"use client";

import React from "react";
import QueryProvider from "../providers/query-provider";
import Script from "next/script";

const midtransClientKey = process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <QueryProvider>{children}</QueryProvider>
      <Script
        type="text/javascript"
        src="https://app.sandbox.midtrans.com/snap/snap.js"
        data-client-key={midtransClientKey}
      ></Script>
    </>
  );
}
