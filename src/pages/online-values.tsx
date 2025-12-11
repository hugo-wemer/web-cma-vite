import { Navigate, useParams } from "react-router-dom"
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
    <div className="m-4">
      <OnlineValuesContainer
        assetSlug={assetSlug}
        companySlug={companySlug}
        installationSlug={installationSlug}
      />
    </div>
  )
}
