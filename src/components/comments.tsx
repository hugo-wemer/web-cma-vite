import { useQuery } from "@tanstack/react-query"
import { format, parseISO } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Loader2 } from "lucide-react"
import type { GetCommentsApiResponse } from "@/pages/cronology"
import { Badge } from "./ui/badge"

type CommentsProps = {
  companySlug: string
  installationSlug: string
  assetSlug: string
}

export function Comments({
  companySlug,
  installationSlug,
  assetSlug,
}: CommentsProps) {
  const { data: commentsPerDay, isLoading } = useQuery({
    queryKey: ["get-cronology", companySlug, installationSlug, assetSlug],
    queryFn: async () => {
      const response = await fetch(
        `http://192.168.3.130:3333/comments/${companySlug}/${installationSlug}/${assetSlug}`
      )
      const result: GetCommentsApiResponse = await response.json()
      return result.comments
    },
    enabled: !!companySlug && !!installationSlug && !!assetSlug,
  })

  return (
    <div className="space-y-8">
      {isLoading && <Loader2 className="mx-auto animate-spin" />}
      {commentsPerDay?.map((day) => (
        <div className="space-y-2.5" key={day.commentedAt}>
          <div className="flex items-baseline gap-2">
            <span className="font-semibold text-xl text-zinc-300">
              {format(parseISO(day.commentedAt), "PP", { locale: ptBR })}
            </span>
            <span className="font-semibold text-xl text-zinc-500">
              {format(parseISO(day.commentedAt), "EEEE", { locale: ptBR })}
            </span>
          </div>
          {day.comments.length > 0 ? (
            <div className="space-y-2.5">
              {day.comments.map((comment) => (
                <div className="space-y-2.5" key={comment.id}>
                  <div className="space-y-1 rounded-xl bg-zinc-900 px-4 py-2.5 shadow-shape">
                    <div className="flex items-center gap-3">
                      <span className="text-zinc-100">{comment.comment}</span>
                      <span className="ml-auto text-sm text-zinc-400">
                        {format(comment.commentedAt, "HH:mm")}h
                      </span>
                    </div>
                    <Badge className="rounded-sm bg-muted text-muted-foreground">
                      {comment.author}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-zinc-500">
              Nenhuma atividade cadastrada nessa data.
            </p>
          )}
        </div>
      ))}
    </div>
  )
}
