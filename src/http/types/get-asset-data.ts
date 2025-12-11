export type GetAssetResponse = {
  serialNumber: string
  manufacturer: string
  year: number
  ratedPower: string
  highVoltage: string
  lowVoltage: string
  ratedCurrentHighSide: string
  ratedCurrentLowSide: string
  insulationClass: string
  oilType: string
  assetOwnerId: string
}

export type GetAssetRequestParams = {
  companySlug: string
  installationSlug: string
  assetSlug: string
}
