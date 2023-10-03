"use client";

import { useContext } from "react";
import { TemperatureBox } from "./TemperatureBox";
import { DataContext } from "./DataProvider";

export const TemperatureBoxes = () => {
  const context = useContext(DataContext);

  return (
    <>
      <TemperatureBox 
        className="col-span-2" 
        label="Durchschnitt" 
        temperature={context?.median.temperature ?? 0} 
        humidity={context?.median.humidity ?? 0} 
        loading={!context}
      />
      <TemperatureBox 
        className="opacity-70" 
        label="Ritzensee" 
        temperature={context?.ritzensee.temperature ?? 0} 
        humidity={context?.ritzensee.humidity ?? 0} 
        loading={!context}
      />
      <TemperatureBox 
        className="opacity-70" 
        label="Ramseiden" 
        temperature={context?.ramseiden.temperature ?? 0} 
        humidity={context?.ramseiden.humidity ?? 0} 
        loading={!context}
      />
    </>
  )
}
