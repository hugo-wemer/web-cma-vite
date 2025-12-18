import { SirenIcon } from "lucide-react"
import type { GetAlarmedSensorsResponse } from "@/http/types/get-alarmed-sensors-by-asset-request"

type AlarmedSensorsProps = {
  alarmedSensors: GetAlarmedSensorsResponse
}

export function AlarmedSensors({ alarmedSensors }: AlarmedSensorsProps) {
  return (
    <div className="rounded bg-red-500">
      {alarmedSensors && alarmedSensors.length > 0 && (
        <div className="space-y-1 p-2 text-red-950">
          <p className="font-semibold">IEDs alarmados</p>
          {alarmedSensors?.map((sensor) => (
            <div className="flex items-center gap-1" key={sensor}>
              <SirenIcon className="pb-1" />
              <p>{sensor}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
