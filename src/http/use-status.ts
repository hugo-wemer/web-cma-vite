import { useQuery } from "@tanstack/react-query"
import type {
  GetStatusResponseBody,
  GetStatustParams,
} from "./types/get-status-request"

export function useStatus({ companySlug }: GetStatustParams) {
  return useQuery({
    queryKey: ["get-status", companySlug],
    queryFn: async () => {
      const response = await fetch(
        `http://192.168.3.130:3333/status/${companySlug}`
      )
      const result: GetStatusResponseBody = await response.json()
      return result.status
    },
    enabled: !!companySlug,
    refetchInterval: 10_000,
  })
}
