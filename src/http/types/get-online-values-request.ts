export type GetOnlineValuesParams = {
  companySlug: string
  installationSlug: string
  assetSlug: string
}

export type GetOnlineValuesResponse = Array<{
  company: string
  installation: string
  asset: string
  value: number
  variableName: string
  unit: string
}>
