export type SensorProps = {
  sensorOwnerId: string
  sensorShowName: string
  sigmaAlarm: boolean
  sigmaRecognized: boolean
  internallyRecognized: boolean
  sensorCommunicationStatus: string
  sensorMuted: boolean
}
export type GetStatusResponseBody = {
  status: {
    installationName: string
    installationSlug: string
    assets: {
      assetName: string
      assetSlug: string
      sensors: SensorProps[]
    }[]
  }[]
}

export type GetStatustParams = {
  companySlug?: string
}
