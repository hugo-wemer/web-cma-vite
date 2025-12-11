/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import { Loader2 } from "lucide-react"
import { Bar, BarChart, Cell, XAxis, YAxis } from "recharts"
import { useRanking } from "@/http/use-ranking"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart"
import { Separator } from "./ui/separator"

const chartConfig = {
  first: {
    label: "winner",
  },
} satisfies ChartConfig

const COLORS = ["#E12B3E", "#CA405D", "#A8638E", "#8F7DB4", "#719ADE"]

export function RankingCard({
  component,
  companySlug,
}: {
  component: string
  companySlug?: string
}) {
  const { data: ranking, isLoading } = useRanking({ companySlug, component })

  return ranking && ranking?.length > 0 ? (
    <div className="w-fit rounded-lg bg-card p-4 shadow-shape">
      <h1 className="mb-4 text-center font-semibold text-xl">
        {ranking[0].variableName}
      </h1>
      <div className="flex">
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="space-y-1">
              {ranking.map((asset, index) => (
                <div className="flex" key={index}>
                  <div className="flex w-full rounded border p-2">
                    <div className="flex items-center gap-2">
                      <strong style={{ color: COLORS[index] }}>
                        {index + 1}°
                      </strong>
                      <Separator
                        className="data-[orientation=vertical]:h-4"
                        orientation="vertical"
                      />
                      <span className="mr-4">{`${asset.company} - ${asset.installation} - ${asset.asset}`}</span>
                    </div>
                    <strong className="ml-auto">
                      {asset.value} {asset.unit}
                    </strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ChartContainer className="-ml-15 my-px w-48" config={chartConfig}>
          <BarChart
            accessibilityLayer
            barCategoryGap={12}
            barGap={12}
            barSize={16}
            data={ranking}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              axisLine={false}
              dataKey="browser"
              tickLine={false}
              tickMargin={10}
              type="category"
            />
            <XAxis dataKey="value" hide type="number" />
            <ChartTooltip
              content={<ChartTooltipContent hideLabel />}
              cursor={false}
            />
            <Bar dataKey="value" layout="vertical" radius={[0, 5, 5, 0]}>
              {ranking.map((_, index) => (
                <Cell
                  fill={COLORS[index % COLORS.length]}
                  key={`cell-${index}`}
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  ) : (
    isLoading && <Loader2 className="animate-spin" />
  )
}
