import { Plus } from "lucide-react"
import { Navigate, useParams } from "react-router-dom"
import { Comments } from "@/components/comments"
import { Button } from "@/components/ui/button"

type CronologyParams = {
  companySlug: string
  installationSlug: string
  assetSlug: string
}

export type GetCommentsApiResponse = {
  comments: {
    commentedAt: string
    comments: {
      id: string
      assetOwnerId: string
      author: string
      comment: string
      commentedAt: string
    }[]
  }[]
}

export function Cronology() {
  const { companySlug, installationSlug, assetSlug } =
    useParams<CronologyParams>()
  if (!(companySlug && installationSlug && assetSlug)) {
    return <Navigate to="/" />
  }

  return (
    <div className="">
      <div className="mx-12 my-4 flex gap-8">
        <div className="w-full space-y-6">
          <div className="flex justify-between">
            <h1 className="font-semibold text-3xl">Cronologia</h1>
            <Button className="cursor-pointer" size="sm">
              <Plus /> Adicionar comentário ao ativo
            </Button>
          </div>
          <Comments
            assetSlug={assetSlug}
            companySlug={companySlug}
            installationSlug={installationSlug}
          />
        </div>
      </div>
    </div>
  )
}
