import { Link } from "react-router-dom"
export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link className="underline" to="/status/cpfl-renovaveis-eols">
        Status
      </Link>
      <br />
      <Link className="underline" to="/assetMap">
        Asset Map
      </Link>
    </div>
  )
}
