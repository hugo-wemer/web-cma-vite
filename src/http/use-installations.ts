import { useQuery } from "@tanstack/react-query"
import type {
  GetInstallationsParams,
  GetInstallationsResponse,
} from "./types/get-installations-response"

export function useInstallations({ companySlug }: GetInstallationsParams) {
  return useQuery({
    queryKey: ["get-installations", companySlug],
    queryFn: async () => {
      const response = await fetch(
        `http://192.168.3.130:3333/installations/${companySlug}`
      )
      const result: GetInstallationsResponse = await response.json()
      return result
    },
    enabled: !!companySlug,
  })
}
