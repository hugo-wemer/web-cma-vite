import {
  WifiHighIcon,
  WifiLowIcon,
  WifiNoneIcon,
  WifiSlashIcon,
} from "@phosphor-icons/react"
import { useState } from "react"
import type { SensorProps } from "@/http/types/get-status-request"
import { RecognizeAlarmModal } from "./recognize-alarm-modal"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"

const wifiBaseProps = {
  className: "size-3 shrink-0",
  size: 32,
  weight: "duotone" as const,
}

function getStatusIcon(status: string) {
  switch (status) {
    case "Ativo":
      return (
        <WifiHighIcon
          {...wifiBaseProps}
          className={`${wifiBaseProps.className} text-success`}
        />
      )
    case "Inativo":
      return (
        <WifiSlashIcon
          {...wifiBaseProps}
          className={`${wifiBaseProps.className} text-destructive`}
        />
      )
    case "Comunicacao Parcial":
      return <WifiLowIcon {...wifiBaseProps} />
    // case "Desabilitado":
    // case "IED desativado":
    // case "Em manutenção":
    // case "Indeterminado":
    // case "Simulacao":
    // case "Estabelecendo comunicação":
    default:
      return <WifiNoneIcon {...wifiBaseProps} />
  }
}

function getSensorTextColor(sensor: SensorProps) {
  const { sigmaAlarm, sigmaRecognized, internallyRecognized } = sensor

  // Com alarme
  if (sigmaAlarm) {
    return sigmaRecognized ? "text-orange-500" : "text-destructive"
  }

  // Sem alarme, mas reconhecido
  if (sigmaRecognized) {
    // Internamente reconhecido -> volta pro padrão
    return internallyRecognized ? "text-foreground" : "text-blue-400"
  }

  // Sem alarme e não reconhecido
  return "text-yellow-500"
}

export function Sensor({
  sensor,
  companySlug,
  installationSlug,
  assetSlug,
}: {
  sensor: SensorProps
  companySlug: string
  installationSlug: string
  assetSlug: string
}) {
  const icon = getStatusIcon(sensor.sensorCommunicationStatus)
  const textColor = getSensorTextColor(sensor)
  const shouldBlink = !sensor.internallyRecognized

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger disabled={!shouldBlink} onClick={() => setIsOpen(true)}>
        <div className="flex shrink-0 cursor-pointer items-center gap-2 rounded hover:bg-muted-foreground/10">
          {icon}

          <p
            className={`truncate text-md ${textColor} ${
              shouldBlink ? "animate-blink" : ""
            }`}
          >
            {sensor.sensorShowName}
          </p>
        </div>
      </DialogTrigger>
      <DialogContent className="">
        <RecognizeAlarmModal
          assetSlug={assetSlug}
          companySlug={companySlug}
          installationSlug={installationSlug}
          sensorOwnerId={sensor.sensorOwnerId}
          sensorSlug={sensor.sensorShowName}
          setIsOpen={setIsOpen}
        />
      </DialogContent>
    </Dialog>
  )
}
