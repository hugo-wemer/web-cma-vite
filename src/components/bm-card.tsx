import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts"
import type { GetBmOnlineValuesResponse } from "@/http/types/get-bm-online-values-request"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart"
import { Separator } from "./ui/separator"

const chartConfig = {
  currentValue: {
    label: "Atual",
    color: "#1ca31a8b",
  },
  initialValue: {
    label: "Inicial",
    color: "#03095b6a",
  },
  alarmValue: {
    label: "Alarme",
    color: "#e30918",
  },
} satisfies ChartConfig

export function BmCard({
  capacitanceData,
  tangentDeltaData,
  leakageCurrentData,
}: GetBmOnlineValuesResponse) {
  return (
    <div className="rounded-lg border bg-card/30 p-4 shadow-shape">
      <div className="flex flex-wrap items-center justify-evenly">
        <div className="grid justify-center">
          <span className="text-center">Capacitância</span>
          <ChartContainer
            className="mx-auto aspect-square h-[350px]"
            config={chartConfig}
          >
            <RadarChart data={capacitanceData}>
              <ChartTooltip
                content={<ChartTooltipContent indicator="line" />}
                cursor={false}
              />
              <PolarAngleAxis className="text-lg" dataKey="phase" />
              <PolarRadiusAxis
                className="hidden"
                domain={[
                  capacitanceData[0].initialValue * 0.9,
                  capacitanceData[0].alarmValue * 1,
                ]}
              />
              <PolarGrid />
              <Radar
                dataKey="currentValue"
                fill="var(--color-currentValue)"
                fillOpacity={0.6}
              />
              <Radar dataKey="initialValue" fill="var(--color-initialValue)" />
              <Radar
                dataKey="alarmValue"
                fill="none"
                stroke="var(--color-alarmValue)"
                strokeDasharray={4}
              />
            </RadarChart>
          </ChartContainer>

          <div className="-mt-8 flex gap-4 text-xs">
            <div className="flex flex-col">
              <span className="text-lg">Fase A</span>
              <div className="flex items-baseline gap-1">
                <span className="font-semibold text-2xl">
                  {capacitanceData[0].currentValue}
                </span>
                <Separator
                  className="rotate-24 bg-muted-foreground data-[orientation=vertical]:h-2"
                  orientation="vertical"
                />
                <span className="text-lg text-muted-foreground">
                  {capacitanceData[0].alarmValue} pF
                </span>
              </div>
            </div>
            <Separator orientation="vertical" />
            <div className="flex flex-col">
              <span className="text-lg">Fase B</span>
              <div className="flex items-baseline gap-1">
                <span className="font-semibold text-2xl">
                  {capacitanceData[1].currentValue}
                </span>
                <Separator
                  className="rotate-24 bg-muted-foreground data-[orientation=vertical]:h-2"
                  orientation="vertical"
                />
                <span className="text-lg text-muted-foreground">
                  {capacitanceData[1].alarmValue} pF
                </span>
              </div>
            </div>
            <Separator orientation="vertical" />
            <div className="flex flex-col">
              <span className="text-lg">Fase C</span>
              <div className="flex items-baseline gap-1">
                <span className="font-semibold text-2xl">
                  {capacitanceData[2].currentValue}
                </span>
                <Separator
                  className="rotate-24 bg-muted-foreground data-[orientation=vertical]:h-2"
                  orientation="vertical"
                />
                <span className="text-lg text-muted-foreground">
                  {capacitanceData[2].alarmValue} pF
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid justify-center">
          <span className="text-center">Tangente Delta</span>
          <ChartContainer
            className="mx-auto aspect-square h-[350px]"
            config={chartConfig}
          >
            <RadarChart data={tangentDeltaData}>
              <ChartTooltip
                content={<ChartTooltipContent indicator="line" />}
                cursor={false}
              />
              <PolarAngleAxis className="text-lg" dataKey="phase" />
              <PolarRadiusAxis
                className="hidden"
                domain={[
                  tangentDeltaData[0].initialValue * 0.5,
                  tangentDeltaData[0].alarmValue * 1,
                ]}
              />
              <PolarGrid />
              <Radar
                dataKey="currentValue"
                fill="var(--color-currentValue)"
                fillOpacity={0.6}
              />
              <Radar dataKey="initialValue" fill="var(--color-initialValue)" />
              <Radar
                dataKey="alarmValue"
                fill="none"
                stroke="var(--color-alarmValue)"
                strokeDasharray={4}
              />
            </RadarChart>
          </ChartContainer>
          <div className="-mt-8 flex gap-4 text-xs">
            <div className="flex flex-col">
              <span className="text-lg">Fase A</span>
              <div className="flex items-baseline gap-1">
                <span className="font-semibold text-2xl">
                  {tangentDeltaData[0].currentValue}
                </span>
                <Separator
                  className="rotate-24 bg-muted-foreground data-[orientation=vertical]:h-2"
                  orientation="vertical"
                />
                <span className="text-lg text-muted-foreground">
                  {tangentDeltaData[0].alarmValue} %
                </span>
              </div>
            </div>
            <Separator orientation="vertical" />
            <div className="flex flex-col">
              <span className="text-lg">Fase B</span>
              <div className="flex items-baseline gap-1">
                <span className="font-semibold text-2xl">
                  {tangentDeltaData[1].currentValue}
                </span>
                <Separator
                  className="rotate-24 bg-muted-foreground data-[orientation=vertical]:h-2"
                  orientation="vertical"
                />
                <span className="text-lg text-muted-foreground">
                  {tangentDeltaData[1].alarmValue} %
                </span>
              </div>
            </div>
            <Separator orientation="vertical" />
            <div className="flex flex-col">
              <span className="text-lg">Fase C</span>
              <div className="flex items-baseline gap-1">
                <span className="font-semibold text-2xl">
                  {tangentDeltaData[2].currentValue}
                </span>
                <Separator
                  className="rotate-24 bg-muted-foreground data-[orientation=vertical]:h-2"
                  orientation="vertical"
                />
                <span className="text-lg text-muted-foreground">
                  {tangentDeltaData[2].alarmValue} %
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid justify-center">
          <span className="text-center">Corrente de Fuga</span>
          <ChartContainer
            className="mx-auto aspect-square h-[350px]"
            config={chartConfig}
          >
            <RadarChart data={leakageCurrentData}>
              <ChartTooltip
                content={<ChartTooltipContent indicator="line" />}
                cursor={false}
              />
              <PolarAngleAxis className="text-lg" dataKey="phase" />
              <PolarRadiusAxis
                className="hidden"
                domain={[
                  leakageCurrentData[0].currentValue * 0.6,
                  leakageCurrentData[0].alarmValue * 1,
                ]}
              />
              <PolarGrid />
              <Radar dataKey="currentValue" fill="var(--color-currentValue)" />
              <Radar
                dataKey="alarmValue"
                fill="none"
                stroke="var(--color-alarmValue)"
                strokeDasharray={4}
              />
            </RadarChart>
          </ChartContainer>
          <div className="-mt-8 flex gap-4 text-xs">
            <div className="flex flex-col">
              <span className="text-lg">Fase A</span>
              <div className="flex items-baseline gap-1">
                <span className="font-semibold text-2xl">
                  {leakageCurrentData[0].currentValue}
                </span>
                <Separator
                  className="rotate-24 bg-muted-foreground data-[orientation=vertical]:h-2"
                  orientation="vertical"
                />
                <span className="text-nowrap text-lg text-muted-foreground">
                  {leakageCurrentData[0].alarmValue} mA
                </span>
              </div>
            </div>
            <Separator orientation="vertical" />
            <div className="flex flex-col">
              <span className="text-lg">Fase B</span>
              <div className="flex items-baseline gap-1">
                <span className="font-semibold text-2xl">
                  {leakageCurrentData[0].currentValue}
                </span>
                <Separator
                  className="rotate-24 bg-muted-foreground data-[orientation=vertical]:h-2"
                  orientation="vertical"
                />
                <span className="text-nowrap text-lg text-muted-foreground">
                  {leakageCurrentData[0].alarmValue} mA
                </span>
              </div>
            </div>
            <Separator orientation="vertical" />
            <div className="flex flex-col">
              <span className="text-lg">Fase C</span>
              <div className="flex items-baseline gap-1">
                <span className="font-semibold text-2xl">
                  {leakageCurrentData[1].currentValue}
                </span>
                <Separator
                  className="rotate-24 bg-muted-foreground data-[orientation=vertical]:h-2"
                  orientation="vertical"
                />
                <span className="text-nowrap text-lg text-muted-foreground">
                  {leakageCurrentData[1].alarmValue} mA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
