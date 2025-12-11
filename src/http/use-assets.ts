import { useQuery } from "@tanstack/react-query"
import type {
  GetAssetParams,
  GetAssetResponse,
} from "./types/get-asset-response"

export function useAssets({ companySlug, installationSlug }: GetAssetParams) {
  return useQuery({
    queryKey: ["use-assets", companySlug, installationSlug],
    queryFn: async () => {
      const response = await fetch(
        `http://192.168.3.130:3333/assets/${companySlug}/${installationSlug}`
      )
      const result: GetAssetResponse = await response.json()
      return result
    },
    enabled: !!companySlug && !!installationSlug,
  })
}
