import { useQuery } from "@tanstack/react-query"
import type {
  GetAlarmedSensorsRequestParams,
  GetAlarmedSensorsResponse,
} from "./types/get-alarmed-sensors-by-asset-request"

export function useAlarmedSensors({
  companySlug,
  installationSlug,
  assetSlug,
}: GetAlarmedSensorsRequestParams) {
  return useQuery({
    queryKey: ["get-alarmed-sensors", companySlug, installationSlug, assetSlug],
    queryFn: async () => {
      const response = await fetch(
        `http://192.168.3.130:3333/alarms/${companySlug}/${installationSlug}/${assetSlug}`
      )
      const result: GetAlarmedSensorsResponse = await response.json()
      return result
    },
    enabled: !!companySlug && !!installationSlug && !!assetSlug,
  })
}
