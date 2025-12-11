import { useQuery } from "@tanstack/react-query"
import { Loader2 } from "lucide-react"
import { Navigate, useParams } from "react-router-dom"
import { AssetStatus } from "@/components/asset-status"
import { ChangeCompanyHeader } from "@/components/change-company-header"

export type SensorType = {
  sensorOwnerId: string
  sensorShowName: string
  sigmaAlarm: boolean
  sigmaRecognized: boolean
  internallyRecognized: boolean
  sensorCommunicationStatus: string
  sensorMuted: boolean
}

export type AssetType = {
  assetName: string
  assetSlug: string
  sensors: SensorType[]
}

type GetStatusApiResponse = {
  status: {
    installationName: string
    installationSlug: string
    assets: AssetType[]
  }[]
}

type StatusParams = {
  companySlug: string
}

export function Status() {
  const { companySlug } = useParams<StatusParams>()

  const { data: status, isLoading } = useQuery({
    queryKey: ["get-status", companySlug],
    queryFn: async () => {
      const response = await fetch(
        `http://192.168.3.130:3333/status/${companySlug}`
      )
      const result: GetStatusApiResponse = await response.json()
      return result.status
    },
    enabled: !!companySlug,
    refetchInterval: 10_000,
  })

  if (!companySlug) {
    return <Navigate replace to="/" />
  }

  return (
    <div>
      {isLoading ? (
        <div className="flex min-h-screen flex-col items-center justify-center text-muted-foreground">
          <Loader2 className="animate-spin" />
          <p>Carregando status...</p>
        </div>
      ) : (
        <ChangeCompanyHeader companySlug={companySlug} request="status" />
      )}
      <div className="m-4 flex flex-wrap gap-2">
        {status?.map((installation) => (
          <div
            className="w-fit space-y-2 rounded-lg border-2 border-dashed p-4"
            key={installation.installationSlug}
          >
            <p className="font-medium">{installation.installationName}</p>
            <div className="flex gap-2">
              {installation.assets.map((asset) => (
                <div className="" key={asset.assetSlug}>
                  <AssetStatus
                    asset={asset}
                    installation={installation.installationName}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
