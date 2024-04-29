"use client";

import { AirPlane, Flight } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import React, { createContext, Dispatch, useReducer } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";

type FlightProviderProps = {
  children: React.ReactNode;
};

export enum FilterActionKind {
  ADD_PLANE = "ADD_PLANE",
  REMOVE_PLANE = "REMOVE_PLANE",
  SET_SEAT = "SET_SEAT",
}

type FilterState = {
  departure?: string | null;
  arrival?: string | null;
  date?: string | null;
  planeId: string;
  planeIds: string[];
  seat?: string | null;
};

type FilterAction = {
  type: FilterActionKind;
  payload: Omit<FilterState, "planeIds">;
};

function filterReducer(state: FilterState, action: FilterAction): FilterState {
  const { type, payload } = action;

  switch (type) {
    case FilterActionKind.ADD_PLANE:
      return {
        ...state,
        planeIds: [...state.planeIds, payload.planeId],
      };
    case FilterActionKind.REMOVE_PLANE:
      return {
        ...state,
        planeIds: state.planeIds.filter((item) => item !== payload.planeId), // [23, 24, 23]
      };
    case FilterActionKind.SET_SEAT:
      return {
        ...state,
        seat: payload.seat,
      };
    default:
      return state;
  }
}

export type FlightWithPlane = Flight & {
  plane: AirPlane;
};

export type FlightContextType = {
  flights: FlightWithPlane[] | undefined;
  isLoading: boolean;
  dispatch: Dispatch<FilterAction>;
  state: FilterState;
};

export const FlightContext = createContext<FlightContextType | null>(null);

export default function FlightProvider({ children }: FlightProviderProps) {
  const search = useSearchParams();

  const params = {
    departure: search.get("departure"),
    arrival: search.get("arrival"),
    date: search.get("date"),
  };

  const [state, dispatch] = useReducer(filterReducer, {
    departure: params.departure,
    arrival: params.arrival,
    date: params.date,
    planeId: "",
    planeIds: [],
    seat: null,
  });

  const { data, isLoading } = useQuery({
    queryKey: ["flights-list", state],
    queryFn: () =>
      axios
        .post("/api/flights", state, {
          method: "post",
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => res.data.data),
  });

  return (
    <FlightContext.Provider
      value={{ flights: data, isLoading, dispatch, state }}
    >
      {children}
    </FlightContext.Provider>
  );
}
