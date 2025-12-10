import type { SensorsRequestParams } from "@/http/types/get-sensors-response"
import { useBmOnlineValues } from "@/http/use-bm-online-values"
import { useGmpOnlineValues } from "@/http/use-gmp-online-values"
import { useSensors } from "@/http/use-sensors"
import { useTmOnlineValues } from "@/http/use-tm-online-values"
import { BmCard } from "./bm-card"
import { Loader2 } from "lucide-react"
import { TmCard } from "./tm-card"
import { GmpCard } from "./gmp-card"

export function OnlineValuesContainer({
  companySlug,
  installationSlug,
  assetSlug,
}: SensorsRequestParams) {
  const { data: sensors, isLoading } = useSensors({
    companySlug,
    installationSlug,
    assetSlug,
  })
    
  const hasBm = sensors?.some((sensor) => sensor.sensorShowName === "BM") ?? false
  const hasTm = sensors?.some((sensor) => sensor.sensorShowName === "TM1") ?? false
  const hasGmp = sensors?.some((sensor) => sensor.sensorShowName === "GMP") ?? false


  const {data: bmOnlineValues, isLoading: isLoadingBm} = useBmOnlineValues({
    companySlug,
    installationSlug,
    assetSlug,
  }, {enabled: hasBm} )

  const {data: tmOnlineValues, isLoading: isLoadingTm} = useTmOnlineValues({
    companySlug,
    installationSlug,
    assetSlug,
  }, {enabled: hasTm} )

  const {data: gmpOnlineValues, isLoading: isLoadingGmp} = useGmpOnlineValues({
    companySlug,
    installationSlug,
    assetSlug,
  }, {enabled: hasGmp} )



  return (
    <>
      {isLoadingBm && <Loader2 className="animate-spin" />}
      {hasBm && bmOnlineValues && <BmCard 
        capacitanceData={bmOnlineValues.capacitanceData} 
        tangentDeltaData={bmOnlineValues.tangentDeltaData} 
        leakageCurrentData={bmOnlineValues.leakageCurrentData}
      />}
      {isLoadingTm && <Loader2 className="animate-spin" />}
      {hasTm && tmOnlineValues && <TmCard 
        loadData={tmOnlineValues.loadData}
      />}
      {isLoadingGmp && <Loader2 className="animate-spin" />}
      {hasGmp && gmpOnlineValues && <GmpCard h2Data={gmpOnlineValues.h2Data} moistureData={gmpOnlineValues.moistureData}/>}
    </>
  )
   
  
}
