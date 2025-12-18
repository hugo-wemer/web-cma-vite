export type GetOnlineValuesParams = {
  companySlug: string
  installationSlug: string
  assetSlug: string
}

export type GetOnlineValuesResponse = Array<{
  id: string
  sensorName: string
  sensorShowName: string
  variables: Array<{
    valueMax: number
    valueAverage: number
    valueMin: number
    valueRecent: number
    variableName: string
    unit: string
    component: string
    function: string
    updatedAt: string
  }>
}>
