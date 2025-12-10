import { BookMarked } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"

export function Legend() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="text-foreground/80" size="sm" variant="ghost">
          <BookMarked className="size-4 text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-fit flex-col gap-3">
        <span className="font-semibold">Legenda</span>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="space-x-2 text-sm">
              <Badge className="ml-5 w-40 rounded-sm rounded-b-none">
                Sigma
              </Badge>
              <Badge className="w-24 rounded-sm rounded-b-none">CMA</Badge>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1 w-3 animate-blink rounded-full bg-destructive" />
            <div className="space-x-1 text-sm">
              {/* <Badge variant="secondary">
                Alarme presente e ainda não visto
              </Badge> */}
              <Badge variant="secondary">Alarmado</Badge>
              <Badge className="line-through opacity-30" variant="secondary">
                Reconhecido
              </Badge>
              <Badge className="line-through opacity-30" variant="secondary">
                Em tratamento
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1 w-3 animate-blink rounded-full bg-orange-500" />
            <div className="space-x-1 text-sm">
              {/* <Badge variant="secondary">
                Alarme presente mas visto apenas no Sigma
              </Badge> */}
              <Badge variant="secondary">Alarmado</Badge>
              <Badge variant="secondary">Reconhecido</Badge>
              <Badge className="line-through opacity-30" variant="secondary">
                Em tratamento
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1 w-3 animate-blink rounded-full bg-yellow-500" />
            <div className="space-x-1 text-sm">
              {/* <Badge variant="secondary">
                Algum alarme entrou e saiu sem ser visto
              </Badge> */}
              <Badge className="line-through opacity-30" variant="secondary">
                Alarmado
              </Badge>
              <Badge className="line-through opacity-30" variant="secondary">
                Reconhecido
              </Badge>
              <Badge className="line-through opacity-30" variant="secondary">
                Em tratamento
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1 w-3 animate-blink rounded-full bg-blue-500" />
            <div className="space-x-1 text-sm">
              {/* <Badge variant="secondary">
                Algum alarme entrou e saiu e foi visto apenas no Sigma
              </Badge> */}
              <Badge className="line-through opacity-30" variant="secondary">
                Alarmado
              </Badge>
              <Badge variant="secondary">Reconhecido</Badge>
              <Badge className="line-through opacity-30" variant="secondary">
                Em tratamento
              </Badge>
            </div>
          </div>
          <Separator />
          <div className="flex items-center gap-2">
            <div className="h-1 w-3 rounded-full bg-destructive" />
            <div className="space-x-1 text-sm">
              {/* <Badge variant="secondary">
                Alarme presente já em tratamento mas não reconhecido no Sigma
              </Badge> */}
              <Badge variant="secondary">Alarmado</Badge>
              <Badge className="line-through opacity-30" variant="secondary">
                Reconhecido
              </Badge>
              <Badge variant="secondary">Em tratamento</Badge>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1 w-3 rounded-full bg-orange-500" />
            <div className="space-x-1 text-sm">
              {/* <Badge variant="secondary">
                Alarme presente já em tratamento
              </Badge> */}
              <Badge variant="secondary">Alarmado</Badge>
              <Badge variant="secondary">Reconhecido</Badge>
              <Badge variant="secondary">Em tratamento</Badge>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1 w-3 rounded-full bg-yellow-500" />
            <div className="space-x-1 text-sm">
              {/* <Badge variant="secondary">
                Alarme entrou e saiu, está em tratamento mas ainda não foi
                reconhecido no Sigma
              </Badge> */}
              <Badge className="line-through opacity-30" variant="secondary">
                Alarmado
              </Badge>
              <Badge className="line-through opacity-30" variant="secondary">
                Reconhecido
              </Badge>
              <Badge variant="secondary">Em tratamento</Badge>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1 w-3 rounded-full shadow-shape" />
            <div className="space-x-1 text-sm">
              {/* <Badge variant="secondary">Não existe alarme a ser tratado</Badge> */}
              <Badge className="line-through opacity-30" variant="secondary">
                Alarmado
              </Badge>
              <Badge variant="secondary">Reconhecido</Badge>
              <Badge variant="secondary">Em tratamento</Badge>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
