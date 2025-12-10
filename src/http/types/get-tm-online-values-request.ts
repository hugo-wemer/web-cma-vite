

export type GetTmOnlineValuesResponse = {
  loadData: {
    variable: string
    current: number | null
    max: number | null
    alarm: number | null
    average: number | null
  }[]
}

export type TmOnlineValuesRequestParams = {
  companySlug: string
  installationSlug: string
  assetSlug: string
}
