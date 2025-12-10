import { useQuery } from "@tanstack/react-query"
import { Link, Navigate, useParams } from "react-router-dom"

type GetStatusApiResponse = {
  status: {
    installationName: string
    installationSlug: string
    assets: {
      assetName: string
      assetSlug: string
      sensors: {
        sensorOwnerId: string
        sensorShowName: string
        sigmaAlarm: boolean
        sigmaRecognized: boolean
        internallyRecognized: boolean
        sensorCommunicationStatus: string
        sensorMuted: boolean
      }[]
    }[]
  }[]
}

type StatusParams = {
  companySlug: string
}

export function Status() {
  const { companySlug } = useParams<StatusParams>()

  const { data: status, isLoading } = useQuery({
    queryKey: ["get-status"],
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
      {isLoading ? <p>Carregando...</p> : null}
      <div>
        {status?.map((installation) => (
          <div key={installation.installationSlug}>
            <Link to="/">{installation.installationName}</Link>
            {installation.assets.map((asset) => (
              <div className="flex flex-col" key={asset.assetSlug}>
                <Link
                  className="underline"
                  to={`/cronology/${companySlug}/${installation.installationSlug}/${asset.assetSlug}`}
                >
                  {asset.assetName}
                </Link>
                {asset.sensors.map((sensor) => (
                  <div className="" key={sensor.sensorShowName}>
                    {sensor.sensorShowName}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
