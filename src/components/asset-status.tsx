import { useEffect, useState } from "react"
import { getSensorStatus, type sensorStatusProps } from "@/lib/utils"
import type { AssetType } from "@/pages/status"
import { Sensor } from "./sensor"
import { Card, CardContent, CardTitle } from "./ui/card"

export function AssetStatus({
  asset,
  companySlug,
  installationSlug,
}: {
  asset: AssetType
  companySlug: string
  installationSlug: string
}) {
  const [worstStatus, setWorstStatus] = useState<sensorStatusProps>("NONE")

  useEffect(() => {
    let currentWorst: typeof worstStatus = "NONE"
    let currentPriority = 0

    for (const sensor of asset.sensors) {
      const { status, priority } = getSensorStatus(sensor)
      if (priority > currentPriority) {
        currentPriority = priority
        currentWorst = status
      }
    }

    setWorstStatus(currentWorst)
  }, [asset])
  return (
    <Card
      className={`flex max-w-72 rounded-lg border p-2 ${worstStatus === "RED BLINKING" && "animate-red-border-blink"}
      ${worstStatus === "ORANGE BLINKING" && "animate-orange-border-blink"}
      ${worstStatus === "YELLOW BLINKING" && "animate-yellow-border-blink"}
      ${worstStatus === "BLUE BLINKING" && "animate-blue-border-blink"}
      ${worstStatus === "RED" && "border border-destructive"}
      ${worstStatus === "ORANGE" && "border border-orange-500"}
      ${worstStatus === "YELLOW" && "border border-yellow-500"}
      ${worstStatus === "BLUE" && "border border-blue-500"}
    `}
    >
      <div className="flex flex-col space-y-3">
        <CardTitle className="font-semibold text-md text-muted-foreground">
          {asset.assetName}
        </CardTitle>
        <CardContent className="flex px-1">
          <div className="grid grid-flow-col-dense grid-rows-3 space-x-2">
            {asset.sensors.map((sensor) => (
              <div key={sensor.sensorOwnerId}>
                <Sensor
                  assetSlug={asset.assetSlug}
                  companySlug={companySlug}
                  installationSlug={installationSlug}
                  sensor={sensor}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
