import { useQuery } from "@tanstack/react-query"
import type {
  CronologyRequestParams,
  GetCommentsResponse,
} from "./types/get-comments-response"

export function useComments({
  companySlug,
  installationSlug,
  assetSlug,
}: CronologyRequestParams) {
  return useQuery({
    queryKey: ["get-cronology", companySlug, installationSlug, assetSlug],
    queryFn: async () => {
      const response = await fetch(
        `http://192.168.3.130:3333/comments/${companySlug}/${installationSlug}/${assetSlug}`
      )
      const result: GetCommentsResponse = await response.json()
      return result.comments
    },
    enabled: !!companySlug && !!installationSlug && !!assetSlug,
  })
}
