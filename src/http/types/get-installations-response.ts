export type GetInstallationsParams = {
  companySlug: string
}

export type GetInstallationsResponse = Array<{
  id: string
  installationName: string
  installationSlug: string
  companyOwnerId: string
}>
