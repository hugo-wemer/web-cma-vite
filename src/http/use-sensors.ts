import { useQuery } from "@tanstack/react-query"

import type { GetSensorsResponse, SensorsRequestParams } from "./types/get-sensors-response"

export function useSensors({
  companySlug,
  installationSlug,
  assetSlug,
}: SensorsRequestParams) {
  return useQuery({
    queryKey: ["get-sensors-values", companySlug, installationSlug, assetSlug],
    queryFn: async () => {
      const response = await fetch(
        `http://192.168.3.130:3333/sensors/${companySlug}/${installationSlug}/${assetSlug}`
      )
      const result: GetSensorsResponse = await response.json()
      return result
    },
    enabled: !!companySlug && !!installationSlug && !!assetSlug,
  })
}
