import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AssetMap } from "./pages/asset-map"
import { Home } from "./pages/home"
import { Status } from "./pages/status"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/status" element={<Status />} />
        <Route path="/assetMap" element={<AssetMap />} />
      </Routes>
    </BrowserRouter>
  )
}
