import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import { Card } from "./ui/card"

type CardLinkProps = {
  title: string
  link: string
  children: ReactNode
}

export function CardLink({ title, link, children, ...props }: CardLinkProps) {
  return (
    <div {...props}>
      <Link to={link}>
        <Card className="hover: flex w-64 flex-col items-center justify-center border text-muted-foreground hover:text-primary">
          <span className="font-semibold">{title}</span>
          {children}
        </Card>
      </Link>
    </div>
  )
}
