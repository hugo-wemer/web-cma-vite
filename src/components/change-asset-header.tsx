import { useQueryClient } from "@tanstack/react-query"
import { House, Loader2, Shuffle } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAssetSync } from "@/http/use-asset-sync"
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
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group"

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
  const [autoMode, setAutoMode] = useState(false)

  const { data: syncAsset } = useAssetSync({ autoMode })

  useEffect(() => {
    if (autoMode && syncAsset?.assetSlug) {
      setSelectedCompany(syncAsset.companySlug)
      setSelectedInstallation(syncAsset.installationSlug)
      setSelectedAsset(syncAsset.assetSlug)

      navigate(
        `/${request}/${syncAsset.companySlug}/${syncAsset.installationSlug}/${syncAsset.assetSlug}/`
      )
    }
  }, [autoMode, syncAsset, request, navigate])

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
          onValueChange={(value) => {
            setSelectedCompany(value)
            setSelectedInstallation("")
            setSelectedAsset("")
            setAutoMode(false)

            queryClient.removeQueries({ queryKey: ["get-installations"] })
            queryClient.removeQueries({ queryKey: ["use-assets"] })
            queryClient.removeQueries({ queryKey: ["get-asset-data"] })
          }}
          value={selectedCompany}
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
          onValueChange={(value) => {
            setSelectedInstallation(value)
            setSelectedAsset("")
            setAutoMode(false)
            queryClient.removeQueries({ queryKey: ["use-assets"] })
            queryClient.removeQueries({ queryKey: ["get-asset-data"] })
          }}
          value={selectedInstallation}
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
            setAutoMode(false)
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

      <ToggleGroup
        onValueChange={(value) => {
          setAutoMode(value === "on")
        }}
        size="sm"
        spacing={2}
        type="single"
        value={autoMode ? "on" : ""}
        variant="outline"
      >
        <ToggleGroupItem
          aria-label="Toggle auto mode"
          className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-green-500 data-[state=on]:*:[svg]:stroke-green-500"
          value="on"
        >
          <Shuffle />
          Auto
        </ToggleGroupItem>
      </ToggleGroup>
    </header>
  )
}
