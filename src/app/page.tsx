import { TemperatureBox } from '@/components/TemperatureBox'
import { fetchWeatherData } from '@/lib/fetchData'
import { quicksand } from '@/styles/fonts'
import classNames from 'classnames'

export default async function Home() {
  const { ritzensee, ramseiden, median } = await fetchWeatherData();

  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-violet-900 to-violet-950">
      <div className="flex flex-col items-center px-4 py-12">
        <h1 className={classNames("text-4xl font-semibold text-white text-center", quicksand.className)}>Saalfelden Wetter</h1>
        <div className="max-w-[375px] w-full mx-auto mt-12 grid grid-cols-2 gap-4">
          <TemperatureBox className="col-span-2" label="Durchschnitt" temperature={median.temperature} humidity={median.humidity} />
          <TemperatureBox className="opacity-70" label="Ritzensee" temperature={ritzensee.temperature} humidity={ritzensee.humidty} />
          <TemperatureBox className="opacity-70" label="Ramseiden" temperature={ramseiden.temperature} humidity={ramseiden.humidty} />
        </div>
      </div>
    </div>
  )
}

