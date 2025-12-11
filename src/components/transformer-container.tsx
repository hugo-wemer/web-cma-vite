/** biome-ignore-all lint/correctness/useImageSize: <explanation> */

import { SirenIcon, Volume2, VolumeX } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useAlarmedSensors } from "@/http/use-alarmed-sensors"
import Bladder from "/transformer/bladder.png"
import Bushings from "/transformer/bushings.png"
import Fans from "/transformer/fans.png"
import Oil from "/transformer/oil.png"
import Oltc from "/transformer/oltc.png"
import Transformer from "/transformer/transformer.png"
import Winding from "/transformer/winding.png"
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

  // Mantém a mesma instância de Audio durante todo o ciclo de vida do componente
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

  return (
    <div className="">
      <div className="over flex h-[calc(100vh-50px)] flex-1 flex-col items-center justify-center bg-[url(/bg.png)] bg-center bg-no-repeat">
        {alarmedSensors && alarmedSensors.length > 0 && (
          <div className="absolute top-16 left-8 space-y-1 text-destructive">
            <p>IEDs alarmados</p>
            {alarmedSensors?.map((sensor) => (
              <div className="flex items-center gap-1 font-bold" key={sensor}>
                <SirenIcon className="pb-1" />
                <p>{sensor}</p>
              </div>
            ))}
          </div>
        )}
        <img
          alt="transformer"
          className="relative h-auto w-2/5"
          src={Transformer}
        />
        <img
          alt="bushings"
          className={`absolute h-auto w-2/5 ${!isBmAlarmed && "hidden"}`}
          src={Bushings}
        />
        <img
          alt="bladder"
          className={`absolute h-auto w-2/5 ${!isMbrAlarmed && "hidden"}`}
          src={Bladder}
        />
        <img
          alt="fans"
          className={`absolute h-auto w-2/5 ${"hidden"}`}
          src={Fans}
        />
        <img
          alt="oil"
          className={`absolute h-auto w-2/5 ${!isGmpAlarmed && "hidden"}`}
          src={Oil}
        />
        <img
          alt="winding"
          className={`absolute h-auto w-2/5 ${!isTmAlarmed && "hidden"}`}
          src={Winding}
        />
        <img
          alt="oltc"
          className={`absolute h-auto w-2/5 ${!isOltcAlarmed && "hidden"}`}
          src={Oltc}
        />
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
