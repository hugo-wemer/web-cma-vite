import { Navigate, useParams } from "react-router-dom"
import { ChangeAssetHeader } from "@/components/change-asset-header"
import { OnlineValuesContainer } from "@/components/online-values-container"

type OnlineValuesParams = {
  companySlug: string
  installationSlug: string
  assetSlug: string
}

export function OnlineValues() {
  const { companySlug, installationSlug, assetSlug } =
    useParams<OnlineValuesParams>()
  if (!(companySlug && installationSlug && assetSlug)) {
    return <Navigate to="/" />
  }

  return (
    <div className="m-4 space-y-2">
      <ChangeAssetHeader
        assetSlug={assetSlug}
        companySlug={companySlug}
        installationSlug={installationSlug}
      />
      <OnlineValuesContainer
        assetSlug={assetSlug}
        companySlug={companySlug}
        installationSlug={installationSlug}
      />
    </div>
  )
}
