import { DataProvider } from '@/components/DataProvider';
import { TemperatureBoxes } from '@/components/TemperatureBoxes';
import { quicksand } from '@/styles/fonts'
import classNames from 'classnames'

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-violet-900 to-violet-950">
      <div className="flex flex-col items-center px-4 py-12">
        <h1 className={classNames("text-4xl font-semibold text-white text-center", quicksand.className)}>Saalfelden Wetter</h1>
        <div className="max-w-[375px] w-full mx-auto mt-12 grid grid-cols-2 gap-4">
          <DataProvider>
            <TemperatureBoxes />
          </DataProvider>
        </div>
      </div>
    </div>
  )
}

