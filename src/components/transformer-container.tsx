/** biome-ignore-all lint/correctness/useImageSize: <explanation> */

import { Loader2, Volume2, VolumeX } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useAlarmedSensors } from "@/http/use-alarmed-sensors"
import { useOnlineValues } from "@/http/use-online-values"
import Bladder from "/transformer/bladder.png"
import Bushings from "/transformer/bushings.png"
import Fans from "/transformer/fans.png"
import Oil from "/transformer/oil.png"
import Oltc from "/transformer/oltc.png"
import Winding from "/transformer/winding.png"
import { AssetData } from "./asset-data"
import { Button } from "./ui/button"

export function TransformerContainer({
  companySlug,
  installationSlug,
  assetSlug,
}: {
  companySlug: string
  installationSlug: string
  assetSlug: string
}) {
  const { data: alarmedSensors } = useAlarmedSensors({
    companySlug,
    installationSlug,
    assetSlug,
  })

  const [soundEnabled, setSoundEnabled] = useState(false)

  const alarmSoundRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio("/alarm.mp3")
    audio.loop = true
    alarmSoundRef.current = audio

    // Cleanup ao desmontar
    return () => {
      audio.pause()
      audio.currentTime = 0
    }
  }, [])

  useEffect(() => {
    const audio = alarmSoundRef.current
    if (!audio) {
      return
    }

    const hasAlarm = !!alarmedSensors && alarmedSensors.length > 0

    if (!(soundEnabled && hasAlarm)) {
      audio.pause()
      audio.currentTime = 0
      return
    }

    audio.play().catch((err) => {
      console.error("Erro ao tocar áudio:", err)
    })
  }, [soundEnabled, alarmedSensors])

  const isBmAlarmed = alarmedSensors?.some((sensor) => sensor === "BM")
  const isMbrAlarmed = alarmedSensors?.some((sensor) => sensor === "MBR")
  const isTmAlarmed = alarmedSensors?.some(
    (sensor) => sensor === "TM" || sensor === "TM1" || sensor === "TM2"
  )
  const isGmpAlarmed = alarmedSensors?.some((sensor) => sensor === "GMP")
  const isOltcAlarmed = alarmedSensors?.some((sensor) => sensor === "IDM")

  const { data: onlineData, isLoading: isFetchingOnlineData } = useOnlineValues(
    { companySlug, installationSlug, assetSlug }
  )

  return (
    <div className="flex h-[calc(100vh-50px)] flex-col justify-between">
      <div className="m-2 flex flex-col">
        <AssetData
          assetSlug={assetSlug}
          companySlug={companySlug}
          installationSlug={installationSlug}
        />
      </div>
      <div className="mx-8 my-auto flex gap-8">
        <div className="">
          <div className="relative size-120 bg-[url(/transformer/transformer.png)] bg-center bg-cover bg-no-repeat">
            <img
              alt="oil"
              className={`absolute size-120 animate-blink ${!(isGmpAlarmed || isTmAlarmed) && "hidden"}`}
              src={Oil}
            />
            <img
              alt="bushings"
              className={`absolute size-120 animate-blink ${!isBmAlarmed && "hidden"}`}
              src={Bushings}
            />
            <img
              alt="bladder"
              className={`absolute size-120 animate-blink ${!isMbrAlarmed && "hidden"}`}
              src={Bladder}
            />
            <img
              alt="fans"
              className={`absolute size-120 ${"hidden"}`}
              src={Fans}
            />
            <img
              alt="oil"
              className={`absolute size-120 animate-blink ${!(isGmpAlarmed || isTmAlarmed) && "hidden"}`}
              src={Oil}
            />
            <img
              alt="winding"
              className={`absolute size-120 animate-blink ${!isTmAlarmed && "hidden"}`}
              src={Winding}
            />
            <img
              alt="oltc"
              className={`absolute size-120 animate-blink ${!isOltcAlarmed && "hidden"}`}
              src={Oltc}
            />
          </div>
        </div>
        <div className="flex h-fit flex-wrap gap-2 py-2">
          {isFetchingOnlineData && <Loader2 className="animate-spin" />}
          {onlineData
            ?.sort((a, b) => b.variables.length - a.variables.length)
            .map((sensor) => (
              <div
                className={`${alarmedSensors?.some((alarmedSensor) => alarmedSensor === sensor.sensorShowName) && "animate-red-border-blink border"} flex flex-col gap-1 rounded-sm bg-card/50 p-2 shadow-shape`}
                key={sensor.id}
              >
                <span
                  className={`font-semibold ${alarmedSensors?.some((alarmedSensor) => alarmedSensor === sensor.sensorShowName) ? "text-destructive" : "text-muted-foreground"}`}
                >
                  {sensor.sensorShowName}
                </span>
                <div className="space-y-1">
                  {sensor.variables
                    .filter((variable) => variable.function === "measurement")
                    .map((variable) => (
                      <div
                        className="flex h-5 justify-between gap-4"
                        key={variable.variableName}
                      >
                        <span>
                          {(() => {
                            const cleaned = variable.variableName.replace(
                              "Indicação de ",
                              ""
                            )
                            return (
                              cleaned.charAt(0).toUpperCase() + cleaned.slice(1)
                            )
                          })()}
                        </span>
                        <div className="space-x-1">
                          <span className="font-bold">
                            {variable.valueRecent}
                          </span>
                          <span className="text-muted-foreground">
                            {variable.unit}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
      <Button
        className="fixed right-4 bottom-4 opacity-25"
        onClick={() => setSoundEnabled((prev) => !prev)}
        size="icon"
      >
        {soundEnabled ? <Volume2 /> : <VolumeX />}
      </Button>
    </div>
  )
}
