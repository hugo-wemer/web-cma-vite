import { House, MapPin, Settings2 } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"

export function CronologyHeader() {
  return (
    <div className="mx-2 flex items-center">
      <Link to="/">
        <House className="size-5 text-muted-foreground" />
      </Link>

      <header className="m-2 flex flex-1 justify-between rounded-lg bg-card p-4 shadow-shape">
        <div className="flex items-center gap-2">
          <MapPin className="size-5 text-muted-foreground" />
          <span>CPFL Renováveis - EOLs,</span>
          <span>Icaraizinho - SE,</span>
          <span>Icaraizinho,</span>
          <span>04T1</span>
        </div>
        <div className="flex items-center gap-2">
          <Separator className="h-5!" orientation="vertical" />
          <Button className="cursor-pointer" size="sm">
            Trocar ativo <Settings2 />
          </Button>
        </div>
      </header>
    </div>
  )
}
