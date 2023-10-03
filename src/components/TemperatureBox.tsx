import { inter, quicksand } from "@/styles/fonts";
import classNames from "classnames";

type Props = {
  temperature: number;
  humidity?: number;
  label: string;
  className?: string;
};

export const TemperatureBox = ({ className, temperature, humidity, label }: Props) => {
  return (
    <div className={classNames("text-center px-3 sm:px-4 py-6 rounded-lg border border-white bg-gradient-to-r from-indigo-800 to-indigo-900", className)}>
      <div className={classNames("text-3xl sm:text-4xl font-bold", inter.className)}>{temperature} °C</div>
      <div className={classNames("text-2xl text-white/70 mt-1", inter.className)}>{humidity ? `${humidity}% rF` : null}</div>

      <div className={classNames("mt-4 text-2xl font-semibold", quicksand.className)}>{label}</div>
    </div>
  )
}
