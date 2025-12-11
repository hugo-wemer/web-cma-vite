import { useQuery } from "@tanstack/react-query"
import type { GetCompaniesResponse } from "./types/get-companies-response"

export function useCompanies() {
  return useQuery({
    queryKey: ["get-companies"],
    queryFn: async () => {
      const response = await fetch("http://192.168.3.130:3333/companies")
      const result: GetCompaniesResponse = await response.json()
      return result
    },
  })
}
