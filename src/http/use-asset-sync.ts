import { useQuery } from "@tanstack/react-query"
import type { GetAssetSyncResponse } from "./types/get-asset-sync"

export function useAssetSync({autoMode}: {autoMode: boolean}) {
  return useQuery({
    queryKey: ["get-asset-sync"],
    queryFn: async () => {
      const response = await fetch("http://192.168.3.130:3333/assetSync")
      const result: GetAssetSyncResponse = await response.json()
      return result
    },
    refetchInterval: 15 * 1000,
    enabled: !!autoMode
  })
}
