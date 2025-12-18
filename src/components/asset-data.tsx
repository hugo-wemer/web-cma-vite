import { Loader2 } from "lucide-react"
import { useAssetData } from "@/http/use-asset-data"

type AssetDataProps = {
  companySlug: string
  installationSlug: string
  assetSlug: string
}

export function AssetData({
  companySlug,
  installationSlug,
  assetSlug,
}: AssetDataProps) {
  const {
    data: assetData,
    isLoading: isFetchingAssetData,
    isSuccess,
  } = useAssetData({
    companySlug,
    installationSlug,
    assetSlug,
  })

  return (
    <div>
      {isFetchingAssetData && <Loader2 className="animate-spin" />}
      {isSuccess && (
        <div className="flex gap-1 text-nowrap">
          {assetData?.manufacturer && (
            <div className="w-fit rounded-none bg-card/50 p-2 text-center first:rounded-l-md last:rounded-r-md">
              <div className="font-semibold text-muted-foreground">
                Fabricante
              </div>
              <div>{assetData.manufacturer}</div>
            </div>
          )}
          {assetData?.year && (
            <div className="w-fit rounded-none bg-card/50 p-2 text-center first:rounded-l-md last:rounded-r-md">
              <div className="font-semibold text-muted-foreground">Ano</div>
              <div>{assetData.year}</div>
            </div>
          )}
          {assetData?.ratedPower && (
            <div className="w-fit rounded-none bg-card/50 p-2 text-center first:rounded-l-md last:rounded-r-md">
              <div className="font-semibold text-muted-foreground">
                Potência
              </div>
              <div>{assetData.ratedPower} MVA</div>
            </div>
          )}
          {assetData?.highVoltage && (
            <div className="w-fit rounded-none bg-card/50 p-2 text-center first:rounded-l-md last:rounded-r-md">
              <div className="font-semibold text-muted-foreground">
                Tensão HV
              </div>
              <div>{assetData.highVoltage} kV</div>
            </div>
          )}
          {assetData?.lowVoltage && (
            <div className="w-fit rounded-none bg-card/50 p-2 text-center first:rounded-l-md last:rounded-r-md">
              <div className="font-semibold text-muted-foreground">
                Tensão LV
              </div>
              <div>{assetData.lowVoltage} kV</div>
            </div>
          )}
          {assetData?.ratedCurrentHighSide && (
            <div className="w-fit rounded-none bg-card/50 p-2 text-center first:rounded-l-md last:rounded-r-md">
              <div className="font-semibold text-muted-foreground">
                Corrente HV
              </div>
              <div>{assetData.ratedCurrentHighSide} A</div>
            </div>
          )}
          {assetData?.ratedCurrentLowSide && (
            <div className="w-fit rounded-none bg-card/50 p-2 text-center first:rounded-l-md last:rounded-r-md">
              <div className="font-semibold text-muted-foreground">
                Corrente LV
              </div>
              <div>{assetData.ratedCurrentLowSide} A</div>
            </div>
          )}
          {assetData?.insulationClass && (
            <div className="w-fit rounded-none bg-card/50 p-2 text-center first:rounded-l-md last:rounded-r-md">
              <div className="font-semibold text-muted-foreground">
                Classe isolação
              </div>
              <div>{assetData.insulationClass}</div>
            </div>
          )}
          {assetData?.oilType && (
            <div className="w-fit rounded-none bg-card/50 p-2 text-center first:rounded-l-md last:rounded-r-md">
              <div className="font-semibold text-muted-foreground">
                Tipo de óleo
              </div>
              <div>{assetData.oilType}</div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
