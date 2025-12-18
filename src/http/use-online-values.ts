import { useQuery } from "@tanstack/react-query"
import type {
  GetOnlineValuesParams,
  GetOnlineValuesResponse,
} from "./types/get-online-values-request"

export function useOnlineValues({
  companySlug,
  installationSlug,
  assetSlug,
}: GetOnlineValuesParams) {
  return useQuery({
    queryKey: ["get-online-values", companySlug, installationSlug, assetSlug],
    queryFn: async () => {
      const response = await fetch(
        `http://192.168.3.130:3333/onlineValues/${companySlug}/${installationSlug}/${assetSlug}`
      )
      const result: GetOnlineValuesResponse = await response.json()
      return result
    },
    enabled: !!companySlug && !!installationSlug && !!assetSlug,
  })
}
