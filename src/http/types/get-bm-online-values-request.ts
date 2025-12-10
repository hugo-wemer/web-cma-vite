export type Phase = 'Fase A' | 'Fase B' | 'Fase C'

export interface PhaseData {
  phase: Phase
  currentValue: number
  initialValue: number
  alarmValue: number
}

export interface PhaseDataLeakCurrent {
  phase: Phase
  currentValue: number
  alarmValue: number
}

export type GetBmOnlineValuesResponse = {
  capacitanceData: PhaseData[]
  tangentDeltaData: PhaseData[]
  leakageCurrentData: PhaseDataLeakCurrent[]
}

export type BmOnlineValuesRequestParams = {
  companySlug: string
  installationSlug: string
  assetSlug: string
}
