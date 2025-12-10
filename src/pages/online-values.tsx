import { Navigate, useParams } from "react-router-dom"
import { OnlineValuesContainer } from "@/components/online-values-container"
import type { OnlineValuesRequestParams } from "@/http/types/get-online-values-response"

export function OnlineValues() {
  const { companySlug, installationSlug, assetSlug } =
    useParams<OnlineValuesRequestParams>()
  if (!(companySlug && installationSlug && assetSlug)) {
    return <Navigate to="/" />
  }

  return (
    <OnlineValuesContainer
      assetSlug={assetSlug}
      companySlug={companySlug}
      installationSlug={installationSlug}
    />
  )
}
