import { useQuery } from "@tanstack/react-query"
import { House, Loader } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { Legend } from "./legend"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Separator } from "./ui/separator"

type GetCompanyApiResponse = Array<{
  id: string
  companyName: string
  companySlug: string
}>

export function Header({ companySlug }: { companySlug: string }) {
  const { data: companies, isLoading } = useQuery({
    queryKey: ["get-companies"],
    queryFn: async () => {
      const response = await fetch("http://192.168.3.130:3333/companies")
      const result: GetCompanyApiResponse = await response.json()
      return result
    },
  })
  const navigate = useNavigate()

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
          onValueChange={(company: string) => navigate(`/status/${company}`)}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Selecione uma empresa" />
          </SelectTrigger>
          <SelectContent>
            {isLoading && <Loader className="animate-spin" />}
            {companies?.map((company) => (
              <SelectItem key={company.id} value={company.companySlug}>
                {company.companyName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-1">
        {/* <FilterForm /> */}
        <Legend />
      </div>
    </header>
  )
}
