"use client"
import {
  Bar,
  ComposedChart,
  LabelList,
  Line,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import type { GetGmpOnlineValuesResponse } from "@/http/types/get-gmp-online-values-request"

export function GmpCard({ h2Data, moistureData }: GetGmpOnlineValuesResponse) {
  const chartConfig = {
    current: {
      label: "Atual",
      color: "#1ca31a80",
    },
    max: {
      label: "Máxima",
      color: "#1ca31a",
    },
    alarm: {
      label: "Alarme",
      color: "#e30918",
    },
    average: {
      label: "Média",
      color: "#0000FF",
    },
  } satisfies ChartConfig

  return (
    <div className="flex justify-evenly gap-8 rounded-lg border bg-card/30 p-4 shadow-shape">
      <div className="flex flex-col items-center">
        <ChartContainer className="h-64 w-32" config={chartConfig}>
          <ComposedChart data={h2Data} margin={{ right: 34, left: 0 }}>
            <XAxis
              axisLine={false}
              dataKey="variable"
              hide
              tickFormatter={(value) => value.slice(0, 3)}
              tickLine={false}
              tickMargin={10}
            />
            <YAxis domain={[0, 50]} hide type="number" />
            <ChartTooltip
              content={<ChartTooltipContent indicator="dashed" />}
              cursor={false}
            />
            <Bar dataKey="current" fill="var(--color-current)" radius={4}>
              <LabelList
                className="fill-[#FFFFFF]"
                dataKey="current"
                fontSize={12}
                offset={8}
                position="inside"
              />
            </Bar>
            <Bar dataKey="max" fill="var(--color-max)" radius={4}>
              <LabelList
                className="fill-[#FFFFFF]"
                dataKey="max"
                fontSize={12}
                offset={8}
                position="inside"
              />
            </Bar>
            <Line dataKey="alarm" stroke="var(--color-alarm)" type="monotone">
              <LabelList
                className="fill-[#ef4444]"
                dataKey="alarm"
                fontSize={12}
                offset={8}
                position="right"
              />
            </Line>
            <Line
              dataKey="average"
              stroke="var(--color-average)"
              type="monotone"
            >
              <LabelList
                className="fill-[#0d90d6]"
                dataKey="average"
                fontSize={12}
                fontWeight={800}
                offset={8}
                position="left"
              />
            </Line>
            <ReferenceLine
              label={{
                value: "Alarme",
                position: "top",
                className: "text-md font-bold",
                offset: 8,
              }}
              stroke="var(--destructive)"
              strokeDasharray="6 6"
              y={h2Data[0]?.alarm?.toString()}
            />
          </ComposedChart>
        </ChartContainer>
        <span className="text-center">Concentração de H2 (ppm)</span>
      </div>
      <div className="flex flex-col items-center">
        <ChartContainer className="h-64 w-32" config={chartConfig}>
          <ComposedChart data={moistureData} margin={{ right: 34, left: 0 }}>
            <XAxis
              axisLine={false}
              dataKey="variable"
              hide
              tickFormatter={(value) => value.slice(0, 3)}
              tickLine={false}
              tickMargin={10}
            />
            <YAxis domain={[0, 50]} hide type="number" />
            <ChartTooltip
              content={<ChartTooltipContent indicator="dashed" />}
              cursor={false}
            />
            <Bar dataKey="current" fill="var(--color-current)" radius={4}>
              <LabelList
                className="fill-[#FFFFFF]"
                dataKey="current"
                fontSize={12}
                offset={8}
                position="inside"
              />
            </Bar>
            <Bar dataKey="max" fill="var(--color-max)" radius={4}>
              <LabelList
                className="fill-[#FFFFFF]"
                dataKey="max"
                fontSize={12}
                offset={8}
                position="inside"
              />
            </Bar>
            <Line dataKey="alarm" stroke="var(--color-alarm)" type="monotone">
              <LabelList
                className="fill-[#ef4444]"
                dataKey="alarm"
                fontSize={12}
                offset={52}
                position="right"
              />
            </Line>
            <Line
              dataKey="average"
              stroke="var(--color-average)"
              type="monotone"
            >
              <LabelList
                className="fill-[#0d90d6]"
                dataKey="average"
                fontSize={12}
                fontWeight={800}
                offset={8}
                position="left"
              />
            </Line>
            <ReferenceLine
              label={{
                value: "Alarme",
                position: "top",
                className: "text-md font-bold",
                offset: 8,
              }}
              stroke="var(--destructive)"
              strokeDasharray="6 6"
              y={moistureData[0]?.alarm?.toString()}
            />
          </ComposedChart>
        </ChartContainer>
        <span className="text-center">Saturação relativa (%)</span>
      </div>
    </div>
  )
}
