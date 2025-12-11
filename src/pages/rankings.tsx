import { useParams } from "react-router-dom"
import { ChangeCompanyHeader } from "@/components/change-company-header"
import { RankingCard } from "@/components/ranking-card"

type RankingParams = {
  companySlug?: string
}

export function Rankings() {
  const { companySlug } = useParams<RankingParams>()
  return (
    <>
      <ChangeCompanyHeader companySlug={companySlug} request="rankings" />
      <div className="m-2">
        <div className="flex flex-wrap justify-center gap-2">
          <RankingCard companySlug={companySlug} component="oil-temperature" />
          <RankingCard
            companySlug={companySlug}
            component="winding-temperature-1"
          />
          <RankingCard companySlug={companySlug} component="load" />
          <RankingCard companySlug={companySlug} component="hydrogen" />
          <RankingCard companySlug={companySlug} component="moisture" />
          <RankingCard companySlug={companySlug} component="apparente-power" />
        </div>
      </div>
    </>
  )
}
