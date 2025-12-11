export type GetSensorsResponse = {
  id: string
  sensorName: string
  sensorSlug: string
  sensorShowName: string
}[]

export type SensorsRequestParams = {
  companySlug: string
  installationSlug: string
  assetSlug: string
}
