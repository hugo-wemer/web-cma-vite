import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "./ui/chart";
import { Separator } from "./ui/separator";
import type { GetBmOnlineValuesResponse } from "@/http/types/get-bm-online-values-request";


const chartConfig = {
  currentValue: {
    label: 'Atual',
    color: '#1ca31a8b',
  },
  initialValue: {
    label: 'Inicial',
    color: '#03095b6a',
  },
  alarmValue: {
    label: 'Alarme',
    color: '#e30918',
  },
} satisfies ChartConfig

export function BmCard({capacitanceData, tangentDeltaData, leakageCurrentData}: GetBmOnlineValuesResponse){
  return(
    <div className="border p-4 rounded-lg bg-card/30 shadow-shape">
      <div className="grid grid-cols-3">
        <div className="grid justify-center">
          <span className="text-center">Capacitância</span>
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square h-[350px]"
          >
            <RadarChart data={capacitanceData}>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <PolarAngleAxis dataKey="phase" className="text-lg" />
              <PolarRadiusAxis
                domain={[
                  capacitanceData[0].initialValue * 0.9,
                  capacitanceData[0].alarmValue * 1,
                ]}
                className="hidden"
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
                stroke="var(--color-alarmValue)"
                strokeDasharray={4}
                fill="none"
              />
            </RadarChart>
          </ChartContainer>

          <div className="text-xs flex gap-4 -mt-8">
            <div className="flex flex-col">
              <span className="text-lg">Fase A</span>
              <div className="flex gap-1 items-baseline">
                <span className="text-2xl font-semibold">
                  {capacitanceData[0].currentValue}
                </span>
                <Separator
                  orientation="vertical"
                  className="data-[orientation=vertical]:h-2 rotate-24 bg-muted-foreground"
                />
                <span className="text-muted-foreground text-lg">
                  {capacitanceData[0].alarmValue} pF
                </span>
              </div>
            </div>
            <Separator orientation="vertical" />
            <div className="flex flex-col">
              <span className="text-lg">Fase B</span>
              <div className="flex gap-1 items-baseline">
                <span className="text-2xl font-semibold">
                  {capacitanceData[1].currentValue}
                </span>
                <Separator
                  orientation="vertical"
                  className="data-[orientation=vertical]:h-2 rotate-24 bg-muted-foreground"
                />
                <span className="text-muted-foreground text-lg">
                  {capacitanceData[1].alarmValue} pF
                </span>
              </div>
            </div>
            <Separator orientation="vertical" />
            <div className="flex flex-col">
              <span className="text-lg">Fase C</span>
              <div className="flex gap-1 items-baseline">
                <span className="text-2xl font-semibold">
                  {capacitanceData[2].currentValue}
                </span>
                <Separator
                  orientation="vertical"
                  className="data-[orientation=vertical]:h-2 rotate-24 bg-muted-foreground"
                />
                <span className="text-muted-foreground text-lg">
                  {capacitanceData[2].alarmValue} pF
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid justify-center">
          <span className="text-center">Tangente Delta</span>
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square h-[350px]"
          >
            <RadarChart data={tangentDeltaData}>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <PolarAngleAxis dataKey="phase" className="text-lg" />
              <PolarRadiusAxis
                domain={[
                  tangentDeltaData[0].initialValue * 0.5,
                  tangentDeltaData[0].alarmValue * 1,
                ]}
                className="hidden"
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
                stroke="var(--color-alarmValue)"
                strokeDasharray={4}
                fill="none"
              />
            </RadarChart>
          </ChartContainer>
          <div className="text-xs flex gap-4 -mt-8">
            <div className="flex flex-col">
              <span className="text-lg">Fase A</span>
              <div className="flex gap-1 items-baseline">
                <span className="text-2xl font-semibold">
                  {tangentDeltaData[0].currentValue}
                </span>
                <Separator
                  orientation="vertical"
                  className="data-[orientation=vertical]:h-2 rotate-24 bg-muted-foreground"
                />
                <span className="text-muted-foreground text-lg">
                  {tangentDeltaData[0].alarmValue} %
                </span>
              </div>
            </div>
            <Separator orientation="vertical" />
            <div className="flex flex-col">
              <span className="text-lg">Fase B</span>
              <div className="flex gap-1 items-baseline">
                <span className="text-2xl font-semibold">
                  {tangentDeltaData[1].currentValue}
                </span>
                <Separator
                  orientation="vertical"
                  className="data-[orientation=vertical]:h-2 rotate-24 bg-muted-foreground"
                />
                <span className="text-muted-foreground text-lg">
                  {tangentDeltaData[1].alarmValue} %
                </span>
              </div>
            </div>
            <Separator orientation="vertical" />
            <div className="flex flex-col">
              <span className="text-lg">Fase C</span>
              <div className="flex gap-1 items-baseline">
                <span className="text-2xl font-semibold">
                  {tangentDeltaData[2].currentValue}
                </span>
                <Separator
                  orientation="vertical"
                  className="data-[orientation=vertical]:h-2 rotate-24 bg-muted-foreground"
                />
                <span className="text-muted-foreground text-lg">
                  {tangentDeltaData[2].alarmValue} %
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid justify-center">
          <span className="text-center">Corrente de Fuga</span>
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square h-[350px]"
          >
            <RadarChart data={leakageCurrentData}>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <PolarAngleAxis dataKey="phase" className="text-lg" />
              <PolarRadiusAxis
                domain={[
                  leakageCurrentData[0].currentValue * 0.6,
                  leakageCurrentData[0].alarmValue * 1,
                ]}
                className="hidden"
              />
              <PolarGrid />
              <Radar dataKey="currentValue" fill="var(--color-currentValue)" />
              <Radar
                dataKey="alarmValue"
                stroke="var(--color-alarmValue)"
                strokeDasharray={4}
                fill="none"
              />
            </RadarChart>
          </ChartContainer>
          <div className="text-xs flex gap-4 -mt-8">
            <div className="flex flex-col">
              <span className="text-lg">Fase A</span>
              <div className="flex gap-1 items-baseline">
                <span className="text-2xl font-semibold">
                  {leakageCurrentData[0].currentValue}
                </span>
                <Separator
                  orientation="vertical"
                  className="data-[orientation=vertical]:h-2 rotate-24 bg-muted-foreground"
                />
                <span className="text-muted-foreground text-lg text-nowrap">
                  {leakageCurrentData[0].alarmValue} mA
                </span>
              </div>
            </div>
            <Separator orientation="vertical" />
            <div className="flex flex-col">
              <span className="text-lg">Fase B</span>
              <div className="flex gap-1 items-baseline">
                <span className="text-2xl font-semibold">
                  {leakageCurrentData[0].currentValue}
                </span>
                <Separator
                  orientation="vertical"
                  className="data-[orientation=vertical]:h-2 rotate-24 bg-muted-foreground"
                />
                <span className="text-muted-foreground text-lg text-nowrap">
                  {leakageCurrentData[0].alarmValue} mA
                </span>
              </div>
            </div>
            <Separator orientation="vertical" />
            <div className="flex flex-col">
              <span className="text-lg">Fase C</span>
              <div className="flex gap-1 items-baseline">
                <span className="text-2xl font-semibold">
                  {leakageCurrentData[1].currentValue}
                </span>
                <Separator
                  orientation="vertical"
                  className="data-[orientation=vertical]:h-2 rotate-24 bg-muted-foreground"
                />
                <span className="text-muted-foreground text-lg text-nowrap">
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