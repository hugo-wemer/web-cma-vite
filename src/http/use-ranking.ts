import { useQuery } from "@tanstack/react-query"
import type {
  GetRankingParams,
  GetRankingResponse,
} from "./types/get-ranking-request"

export function useRanking({ companySlug, component }: GetRankingParams) {
  return useQuery({
    queryKey: ["get-ranking", companySlug, component],
    queryFn: async () => {
      const url = companySlug
        ? `http://192.168.3.130:3333/ranking/${component}?companySlug=${companySlug}`
        : `http://192.168.3.130:3333/ranking/${component}`
      const response = await fetch(url)
      const result: GetRankingResponse = await response.json()
      return result
    },
    enabled: !!component,
  })
}
