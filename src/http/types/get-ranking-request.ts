export type GetRankingParams = {
  companySlug?: string
  component: string
}

export type GetRankingResponse = Array<{
  company: string
  installation: string
  asset: string
  value: number
  variableName: string
  unit: string
}>
