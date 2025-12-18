import { Loader2 } from "lucide-react"
import type { SensorsRequestParams } from "@/http/types/get-sensors-response"
import { useBmOnlineValues } from "@/http/use-bm-online-values"
import { useGmpOnlineValues } from "@/http/use-gmp-online-values"
import { useSensors } from "@/http/use-sensors"
import { useTmOnlineValues } from "@/http/use-tm-online-values"
import BmLogo from "/bm.svg"
import GmpLogo from "/gmp.svg"
import TmLogo from "/tm.svg"
import { BmCard } from "./bm-card"
import { GmpCard } from "./gmp-card"
import { TmCard } from "./tm-card"

export function OnlineValuesContainer({
  companySlug,
  installationSlug,
  assetSlug,
}: SensorsRequestParams) {
  const { data: sensors } = useSensors({
    companySlug,
    installationSlug,
    assetSlug,
  })

  const hasBm =
    sensors?.some((sensor) => sensor.sensorShowName === "BM") ?? false
  const hasTm =
    sensors?.some((sensor) => sensor.sensorShowName === "TM1") ?? false
  const hasGmp =
    sensors?.some((sensor) => sensor.sensorShowName === "GMP") ?? false

  const { data: bmOnlineValues, isLoading: isLoadingBm } = useBmOnlineValues(
    {
      companySlug,
      installationSlug,
      assetSlug,
    },
    { enabled: hasBm }
  )

  const { data: tmOnlineValues, isLoading: isLoadingTm } = useTmOnlineValues(
    {
      companySlug,
      installationSlug,
      assetSlug,
    },
    { enabled: hasTm }
  )

  const { data: gmpOnlineValues, isLoading: isLoadingGmp } = useGmpOnlineValues(
    {
      companySlug,
      installationSlug,
      assetSlug,
    },
    { enabled: hasGmp }
  )

  return (
    <div className="space-y-2">
      <div>
        {isLoadingBm && <Loader2 className="animate-spin" />}
        {hasBm && bmOnlineValues ? (
          <BmCard
            capacitanceData={bmOnlineValues.capacitanceData}
            leakageCurrentData={bmOnlineValues.leakageCurrentData}
            tangentDeltaData={bmOnlineValues.tangentDeltaData}
          />
        ) : (
          <div className="flex h-96 flex-col items-center justify-center gap-4 rounded-lg border bg-card/30 p-4 shadow-shape">
            <img
              alt="logo sam"
              className="opacity-20"
              height={100}
              src={BmLogo}
              width={70}
            />
            <span className="font-semibold text-muted-foreground/50">
              Sem monitoramento de bucha no ativo
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        <div className="flex flex-1">
          {isLoadingTm && <Loader2 className="animate-spin" />}
          {hasTm && tmOnlineValues && tmOnlineValues.loadData.length > 0 ? (
            <TmCard loadData={tmOnlineValues.loadData} />
          ) : (
            <div className="flex h-96 flex-1 flex-col items-center justify-center gap-4 rounded-lg border bg-card/30 p-4 shadow-shape">
              <img
                alt="logo sam"
                className="opacity-20"
                height={100}
                src={TmLogo}
                width={200}
              />
              <span className="font-semibold text-muted-foreground/50">
                Sem monitoramento de temperatura no ativo
              </span>
            </div>
          )}
        </div>
        <div className="flex">
          {isLoadingGmp && <Loader2 className="animate-spin" />}
          {hasGmp && gmpOnlineValues ? (
            <GmpCard
              h2Data={gmpOnlineValues.h2Data}
              moistureData={gmpOnlineValues.moistureData}
            />
          ) : (
            <div className="flex h-96 flex-col items-center justify-center gap-4 rounded-lg border bg-card/30 p-4 shadow-shape">
              <img
                alt="logo sam"
                className="opacity-20"
                height={100}
                src={GmpLogo}
                width={200}
              />
              <span className="font-semibold text-muted-foreground/50">
                Sem monitoramento de gás e umidade no ativo
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
