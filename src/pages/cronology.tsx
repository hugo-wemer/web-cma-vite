import { Navigate, useParams } from "react-router-dom"
import { ChangeAssetHeader } from "@/components/change-asset-header"
import { Comments } from "@/components/comments"
import { CreateCommentForm } from "@/components/create-comment-form"

type CronologyParams = {
  companySlug: string
  installationSlug: string
  assetSlug: string
}

export function Cronology() {
  const { companySlug, installationSlug, assetSlug } =
    useParams<CronologyParams>()
  if (!(companySlug && installationSlug && assetSlug)) {
    return <Navigate to="/" />
  }

  return (
    <div className="m-2">
      <ChangeAssetHeader
        assetSlug={assetSlug}
        companySlug={companySlug}
        installationSlug={installationSlug}
        request="cronology"
      />
      <div className="mx-12 my-4 flex gap-8">
        <div className="w-full space-y-6">
          <div className="flex justify-between">
            <h1 className="font-semibold text-3xl">Cronologia</h1>
            <CreateCommentForm
              assetSlug={assetSlug}
              companySlug={companySlug}
              installationSlug={installationSlug}
            />
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
