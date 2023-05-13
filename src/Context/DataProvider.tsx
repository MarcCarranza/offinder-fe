"use client";

// Dependencies
import { ReactElement, createContext, useState } from "react";

// Types
import { AppData } from "../Types/DataProvider";

export const DataContext = createContext<{
  appData: AppData;
  setAppData: Function;
}>({
  appData: {},
  setAppData: (val: AppData) => {},
});

type Props = {
  children: ReactElement;
};

export default function DataProvider({ children }: Props) {
  const [appData, setAppData] = useState<AppData>({});

  return (
    <DataContext.Provider value={{ appData, setAppData }}>
      {children}
    </DataContext.Provider>
  );
}
