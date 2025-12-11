export type GetAssetParams = {
  companySlug: string
  installationSlug: string
}

export type GetAssetResponse = Array<{
  id: string
  assetName: string
  assetSlug: string
  installationOwnerId: string
}>
