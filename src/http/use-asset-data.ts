import { useQuery } from "@tanstack/react-query"
import type {
  GetAssetRequestParams,
  GetAssetResponse,
} from "./types/get-asset-data"

export function useAssetData({
  companySlug,
  installationSlug,
  assetSlug,
}: GetAssetRequestParams) {
  return useQuery({
    queryKey: ["get-asset-data", companySlug, installationSlug, assetSlug],
    queryFn: async () => {
      const response = await fetch(
        `http://192.168.3.130:3333/assetsData?companySlug=${companySlug}&installationSlug=${installationSlug}&assetSlug=${assetSlug}`
      )
      const result: GetAssetResponse = await response.json()
      return result
    },
    enabled: !!companySlug && !!installationSlug && !!assetSlug,
  })
}
