"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
type QueryProviderType = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

export default function QueryProvider({ children }: QueryProviderType) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
