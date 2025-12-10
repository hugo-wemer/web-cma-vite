import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AssetMap } from "./pages/asset-map"
import { Cronology } from "./pages/cronology"
import { Home } from "./pages/home"
import { OnlineValues } from "./pages/online-values"
import { Status } from "./pages/status"

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} index />
          <Route element={<Status />} path="/status/:companySlug" />
          <Route element={<AssetMap />} path="/assetMap" />
          <Route
            element={<Cronology />}
            path="/cronology/:companySlug/:installationSlug/:assetSlug"
          />
          <Route
            element={<OnlineValues />}
            path="/onlineValues/:companySlug/:installationSlug/:assetSlug"
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
