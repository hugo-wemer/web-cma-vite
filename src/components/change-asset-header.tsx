import { useQueryClient } from "@tanstack/react-query"
import { House, Loader2 } from "lucide-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAssets } from "@/http/use-assets"
import { useCompanies } from "@/http/use-companies"
import { useInstallations } from "@/http/use-installations"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Separator } from "./ui/separator"

export type ChangeAssetHeaderParams = {
  companySlug: string
  installationSlug: string
  assetSlug: string
  request: "cronology" | "onlineValues" | "transformer"
}

export function ChangeAssetHeader({
  companySlug,
  installationSlug,
  assetSlug,
  request,
}: ChangeAssetHeaderParams) {
  const navigate = useNavigate()
  const [selectedCompany, setSelectedCompany] = useState(companySlug)
  const [selectedInstallation, setSelectedInstallation] =
    useState(installationSlug)
  const [selectedAsset, setSelectedAsset] = useState(assetSlug)

  const { data: companies, isLoading: isFetchingCompanies } = useCompanies()
  const { data: installations, isLoading: isFetchingInstallations } =
    useInstallations({ companySlug: selectedCompany })
  const { data: assets, isLoading: isFetchingAssets } = useAssets({
    companySlug: selectedCompany,
    installationSlug: selectedInstallation,
  })
  const queryClient = useQueryClient()

  return (
    <header className="flex h-12 shrink-0 items-center justify-between border-b px-4 py-2">
      <div className="flex items-center gap-2">
        <Link to="/">
          <House className="size-5 text-muted-foreground" />
        </Link>
        <Separator
          className="data-[orientation=vertical]:h-4"
          orientation="vertical"
        />

        <Select
          defaultValue={companySlug}
          onValueChange={(value) => {
            setSelectedCompany(value)
            setSelectedInstallation("")
            setSelectedAsset("")

            queryClient.removeQueries({ queryKey: ["get-installations"] })
            queryClient.removeQueries({ queryKey: ["use-assets"] })
          }}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Selecione uma empresa" />
          </SelectTrigger>
          <SelectContent>
            {isFetchingCompanies && <Loader2 className="animate-spin-2" />}
            {companies?.map((company) => (
              <SelectItem key={company.id} value={company.companySlug}>
                {company.companyName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Separator
          className="data-[orientation=vertical]:h-4"
          orientation="vertical"
        />

        <Select
          defaultValue={installationSlug}
          onValueChange={(value) => {
            setSelectedInstallation(value)
            setSelectedAsset("")
            queryClient.removeQueries({ queryKey: ["use-assets"] })
          }}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Selecione uma instalação" />
          </SelectTrigger>
          <SelectContent>
            {isFetchingInstallations && <Loader2 className="animate-spin-2" />}
            {installations?.map((installation) => (
              <SelectItem
                key={installation.id}
                value={installation.installationSlug}
              >
                {installation.installationName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Separator
          className="data-[orientation=vertical]:h-4"
          orientation="vertical"
        />

        <Select
          onValueChange={(value) => {
            setSelectedAsset(value)
            navigate(
              `/${request}/${selectedCompany}/${selectedInstallation}/${value}`
            )
          }}
          value={selectedAsset}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Selecione um ativo" />
          </SelectTrigger>
          <SelectContent>
            {isFetchingAssets && <Loader2 className="animate-spin-2" />}
            {assets?.map((asset) => (
              <SelectItem key={asset.id} value={asset.assetSlug}>
                {asset.assetName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </header>
  )
}
