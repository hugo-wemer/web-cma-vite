import { Navigate, useParams } from "react-router-dom"
import { ChangeAssetHeader } from "@/components/change-asset-header"
import { TransformerContainer } from "@/components/transformer-container"

type TransformerParams = {
  companySlug: string
  installationSlug: string
  assetSlug: string
}

export function Transformer() {
  const { companySlug, installationSlug, assetSlug } =
    useParams<TransformerParams>()
  if (!(companySlug && installationSlug && assetSlug)) {
    return <Navigate to="/" />
  }

  return (
    <div>
      <ChangeAssetHeader
        assetSlug={assetSlug}
        companySlug={companySlug}
        installationSlug={installationSlug}
        request="transformer"
      />
      <TransformerContainer
        assetSlug={assetSlug}
        companySlug={companySlug}
        installationSlug={installationSlug}
      />
    </div>
  )
}
