import { Link, useParams } from "react-router-dom"

type CronologyParams = {
  companySlug: string
  installationSlug: string
  assetSlug: string
}

export function Cronology() {
  const { companySlug, installationSlug, assetSlug } =
    useParams<CronologyParams>()
  return (
    <div>
      <h1>
        Cronology of {companySlug}
        {installationSlug}
        {assetSlug}
      </h1>
      <Link className="underline" to="/">
        Home
      </Link>
    </div>
  )
}
