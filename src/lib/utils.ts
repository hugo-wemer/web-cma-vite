import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { SensorType } from "@/pages/status"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type sensorStatusProps =
  | "RED"
  | "ORANGE"
  | "YELLOW"
  | "BLUE"
  | "RED BLINKING"
  | "ORANGE BLINKING"
  | "YELLOW BLINKING"
  | "BLUE BLINKING"
  | "NONE"

export function getSensorStatus(sensor: SensorType): {
  status: sensorStatusProps
  priority: number
} {
  if (
    sensor.sigmaAlarm &&
    !sensor.sigmaRecognized &&
    !sensor.internallyRecognized
  ) {
    return { status: "RED BLINKING", priority: 8 }
  }
  if (
    sensor.sigmaAlarm &&
    sensor.sigmaRecognized &&
    !sensor.internallyRecognized
  ) {
    return { status: "ORANGE BLINKING", priority: 7 }
  }
  if (
    !(
      sensor.sigmaAlarm ||
      sensor.sigmaRecognized ||
      sensor.internallyRecognized
    )
  ) {
    return { status: "YELLOW BLINKING", priority: 6 }
  }
  if (
    !sensor.sigmaAlarm &&
    sensor.sigmaRecognized &&
    !sensor.internallyRecognized
  ) {
    return { status: "BLUE BLINKING", priority: 5 }
  }
  if (
    sensor.sigmaAlarm &&
    !sensor.sigmaRecognized &&
    sensor.internallyRecognized
  ) {
    return { status: "RED", priority: 4 }
  }
  if (
    sensor.sigmaAlarm &&
    sensor.sigmaRecognized &&
    sensor.internallyRecognized
  ) {
    return { status: "ORANGE", priority: 3 }
  }
  if (
    !(sensor.sigmaAlarm || sensor.sigmaRecognized) &&
    sensor.internallyRecognized
  ) {
    return { status: "YELLOW", priority: 2 }
  }

  return { status: "NONE", priority: 0 }
}
