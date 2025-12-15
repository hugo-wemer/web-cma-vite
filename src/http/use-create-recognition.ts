import { useMutation, useQueryClient } from "@tanstack/react-query"
import type {
  CreateRecognitionRequestBody,
  CreateRecognitionRequestParams,
} from "./types/create-recognition-request"

export function useCreateRecognition() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async ({
      body,
      params,
    }: {
      body: CreateRecognitionRequestBody
      params: CreateRecognitionRequestParams
    }) => {
      const date = new Date(Date.now())
      const responseRecognition = await fetch(
        `http://192.168.3.130:3333/status/alarm/${params.sensorOwnerId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            internallyRecognized: true,
            updatedAt: date,
          }),
        }
      )
      const responseComment = await fetch(
        `http://192.168.3.130:3333/comment/${params.companySlug}/${params.installationSlug}/${params.assetSlug}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            author: body.author,
            comment: `Reconhecimento de alarme: ${body.comment}`,
            commentedAt: date,
          }),
        }
      )

      return {
        comment: responseComment.status,
        recognition: responseRecognition.status,
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-status"] })
    },
  })
}
