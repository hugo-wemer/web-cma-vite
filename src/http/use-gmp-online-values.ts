import { useQuery } from "@tanstack/react-query"
import type { GmpOnlineValuesRequestParams, GetGmpOnlineValuesResponse } from "./types/get-gmp-online-values-request"

type UseGmpOnlineValuesOptions = {
  enabled?: boolean
}

export function useGmpOnlineValues({
  companySlug,
  installationSlug,
  assetSlug,
}: GmpOnlineValuesRequestParams, options?: UseGmpOnlineValuesOptions) {
  return useQuery({
    queryKey: ["get-gmp-online-values", companySlug, installationSlug, assetSlug],
    queryFn: async () => {
      const response = await fetch(
        `http://192.168.3.130:3333/gmpOnlineValues/${companySlug}/${installationSlug}/${assetSlug}`
      )
      const result: GetGmpOnlineValuesResponse = await response.json()
      return result
    },
    enabled: !!companySlug && !!installationSlug && !!assetSlug && (options?.enabled ?? true),
  })
}
