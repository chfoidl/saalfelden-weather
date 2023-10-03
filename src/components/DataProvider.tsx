"use client";

import { PropsWithChildren, createContext, useEffect, useRef, useState } from "react";

type Value = {
  median: { temperature: number; humidity: number; };
  ritzensee: { temperature: number; humidity: number; };
  ramseiden: { temperature: number; humidity: number; };
}

export const DataContext = createContext<Value | undefined>(undefined);

export const DataProvider = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState<Value>();
  const started = useRef(false);

  const fetchData = async () => {
    const response = await fetch("/api/data", {
      cache: "no-cache"
    });
    const data = await response.json() as Value;

    setData(data);
  }

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    fetchData();
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}
