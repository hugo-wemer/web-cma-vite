type variableData = {
      variable: string,
      current: number,
      max: number,
      alarm: number,
      average: number
}
export type GetGmpOnlineValuesResponse = {
  h2Data: variableData[],
  moistureData: variableData[],
}

export type GmpOnlineValuesRequestParams = {
  companySlug: string
  installationSlug: string
  assetSlug: string
}
