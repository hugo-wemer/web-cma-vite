import { House, Loader2 } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { useCompanies } from "@/http/use-companies"
import { Legend } from "./legend"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Separator } from "./ui/separator"

export function Header({ companySlug }: { companySlug: string }) {
  const { data: companies, isLoading } = useCompanies()
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
            {isLoading && <Loader2 className="animate-spin" />}
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
