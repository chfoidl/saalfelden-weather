import { inter, quicksand } from "@/styles/fonts";
import classNames from "classnames";
import { SpinningCircleIcon } from "./SpinningCircleIcon";

type Props = {
  temperature: number;
  humidity?: number;
  label: string;
  className?: string;
  loading?: boolean;
};

export const TemperatureBox = ({ className, temperature, humidity, label, loading }: Props) => {
  return (
    <div className={classNames("text-center px-3 sm:px-4 py-6 rounded-lg border border-white bg-gradient-to-r from-indigo-800 to-indigo-900 relative", className)}>
      <div className={classNames("transition", {
        "opacity-0": loading
      })}>
        <div className={classNames("text-3xl sm:text-4xl font-bold", inter.className)}>{temperature} °C</div>
        <div className={classNames("text-2xl text-white/70 mt-1", inter.className)}>{humidity ? `${humidity}% rF` : '-'}</div>

        <div className={classNames("mt-4 text-2xl font-semibold", quicksand.className)}>{label}</div>
      </div>

      <div className={classNames("absolute top-0 left-0 w-full h-full flex items-center justify-center transition", {
        "opacity-0 pointer-events-none": !loading
      })}>
        <SpinningCircleIcon />
      </div>
    </div>
  )
}
