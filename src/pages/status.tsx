import { Link } from "react-router-dom"

export function Status() {
  return (
    <div>
      <h1>Status</h1>
      <Link className="underline" to="/">
        Home
      </Link>
    </div>
  )
}
