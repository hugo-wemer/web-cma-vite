import { useMutation, useQueryClient } from "@tanstack/react-query"
import type {
  CreateCommentRequestBody,
  CreateCommentRequestParams,
} from "./types/create-comment-request"

export function useCreateComment() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async ({
      body,
      params,
    }: {
      body: CreateCommentRequestBody
      params: CreateCommentRequestParams
    }) => {
      const response = await fetch(
        `http://192.168.3.130:3333/comment/${params.companySlug}/${params.installationSlug}/${params.assetSlug}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      )

      return response.status
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-cronology"] })
    },
  })
}
