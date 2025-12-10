import { useQuery } from "@tanstack/react-query"
import type { TmOnlineValuesRequestParams, GetTmOnlineValuesResponse } from "./types/get-tm-online-values-request"

type UseTmOnlineValuesOptions = {
  enabled?: boolean
}

export function useTmOnlineValues({
  companySlug,
  installationSlug,
  assetSlug,
}: TmOnlineValuesRequestParams, options?: UseTmOnlineValuesOptions) {
  return useQuery({
    queryKey: ["get-tm-online-values", companySlug, installationSlug, assetSlug],
    queryFn: async () => {
      const response = await fetch(
        `http://192.168.3.130:3333/tmOnlineValues/${companySlug}/${installationSlug}/${assetSlug}`
      )
      const result: GetTmOnlineValuesResponse = await response.json()
      return result
    },
    enabled: !!companySlug && !!installationSlug && !!assetSlug && (options?.enabled ?? true),
  })
}
