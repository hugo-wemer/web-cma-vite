import { useQuery } from "@tanstack/react-query"
import type { BmOnlineValuesRequestParams, GetBmOnlineValuesResponse } from "./types/get-bm-online-values-request"

type UseBmOnlineValuesOptions = {
  enabled?: boolean
}

export function useBmOnlineValues({
  companySlug,
  installationSlug,
  assetSlug,
}: BmOnlineValuesRequestParams, options?: UseBmOnlineValuesOptions) {
  return useQuery({
    queryKey: ["get-bm-online-values", companySlug, installationSlug, assetSlug],
    queryFn: async () => {
      const response = await fetch(
        `http://192.168.3.130:3333/bmOnlineValues/${companySlug}/${installationSlug}/${assetSlug}`
      )
      const result: GetBmOnlineValuesResponse = await response.json()
      return result
    },
    enabled: !!companySlug && !!installationSlug && !!assetSlug && (options?.enabled ?? true),
  })
}
