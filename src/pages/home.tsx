import { EthernetPort, FileTextIcon, MapIcon } from "lucide-react"
import { CardLink } from "@/components/card-link"
import SamLogo from "/sam-logo.svg"

export function Home() {
  return (
    <div className="flex h-screen w-screen flex-1 flex-col items-center justify-center bg-[url(/bg.png)] bg-center bg-no-repeat">
      <img
        alt="logo sam"
        className="my-4 invert-0"
        height={100}
        src={SamLogo}
        width={100}
      />
      <div className="flex h-full max-w-5xl flex-wrap items-center justify-center gap-4">
        <CardLink
          link="/status/cpfl-renovaveis-eols"
          title="Status de comunicação e alarmes"
        >
          <EthernetPort className="size-8" />
        </CardLink>
        <CardLink link="/assetMap" title="Mapa dos ativos">
          <MapIcon className="size-8" />
        </CardLink>
        <CardLink
          link="/cronology/cpfl-renovaveis-eols/albatroz-se/01t1"
          title="Cronologia"
        >
          <FileTextIcon className="size-8" />
        </CardLink>
      </div>
    </div>
  )
}
