import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import type { GetTmOnlineValuesResponse } from "@/http/types/get-tm-online-values-request"
import { Bar, ComposedChart, LabelList, Line, XAxis } from "recharts"


export function TmCard({loadData}: GetTmOnlineValuesResponse){
  const chartConfig = {
    current: {
      label: "Atual",
      color: "#1ca31a80"
    },
    max: {
      label: "Máxima",
      color: "#1ca31a"
    },
    alarm: {
      label: "Alarme",
      color: "#e30918"
    },
    average: {
      label: "Média",
      color: "#075985"
    }
  } satisfies ChartConfig

  return(
    <div className="flex justify-evenly border p-4 rounded-lg bg-card/30 shadow-shape">
      <div className="flex flex-col items-center">
        <ChartContainer config={chartConfig} className="w-32 h-64" >
        <ComposedChart
          data={[loadData[0]]}
        >
          <XAxis
            dataKey="variable"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
            hide
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dashed" />}
          />
          <Bar dataKey="current" fill="var(--color-current)" radius={4}>
            <LabelList
                dataKey="current"
                position="inside"
                offset={8}
                className="fill-[#FFFFFF]"
                fontSize={12}
              />
          </Bar>
          <Bar dataKey="max" fill="var(--color-max)" radius={4}>
            <LabelList
              dataKey="max"
              position="inside"
              offset={8}
              className="fill-[#FFFFFF]"
              fontSize={12}
            />
          </Bar>
          <Line 
          type="monotone" dataKey="alarm" stroke="var(--color-alarm)">
            <LabelList
              dataKey="alarm"
              position="right"
              offset={8}
              fontSize={12}
              className="fill-[#ef4444]"
            />
          </Line>
          <Line 
          type="monotone" dataKey="average" stroke="var(--color-average)">
            <LabelList
              dataKey="average"
              position="right"
              offset={8}
              fontSize={12}
              className="fill-[#075985]"
            />
          </Line>
        </ComposedChart>      
        </ChartContainer>
        <span className="text-center">Carregamento térmico (%)</span>
      </div>
      <div className="flex flex-col items-center">
        <ChartContainer config={chartConfig} className="w-32 h-64">
        <ComposedChart
          data={[loadData[1]]}
        >
          <XAxis
            dataKey="variable"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            hide
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dashed" />}
          />
          <Bar dataKey="current" fill="var(--color-current)" radius={4}>
            <LabelList
                dataKey="current"
                position="inside"
                offset={8}
                className="fill-[#FFFFFF]"
                fontSize={12}
              />
          </Bar>
          <Bar dataKey="max" fill="var(--color-max)" radius={4}>
            <LabelList
              dataKey="max"
              position="inside"
              offset={8}
              className="fill-[#FFFFFF]"
              fontSize={12}
            />
          </Bar>
          <Line 
          type="monotone" dataKey="alarm" stroke="var(--color-alarm)">
            <LabelList
              dataKey="alarm"
              position="right"
              offset={8}
              fontSize={12}
              className="fill-[#ef4444]"
            />
          </Line>
          <Line 
          type="monotone" dataKey="average" stroke="var(--color-average)">
            <LabelList
              dataKey="average"
              position="right"
              offset={8}
              fontSize={12}
              className="fill-[#075985]"
            />
          </Line>
        </ComposedChart>      
        </ChartContainer>
        <span className="text-center">Temperatura do óleo (°C)</span>
      </div>
      <div className="flex flex-col items-center">
        <ChartContainer config={chartConfig} className="w-32 h-64">
        <ComposedChart
          data={[loadData[2]]}
        >
          <XAxis
            dataKey="variable"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            hide
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dashed" />}
          />
          <Bar dataKey="current" fill="var(--color-current)" radius={4}>
            <LabelList
                dataKey="current"
                position="inside"
                offset={8}
                className="fill-[#FFFFFF]"
                fontSize={12}
              />
          </Bar>
          <Bar dataKey="max" fill="var(--color-max)" radius={4}>
            <LabelList
              dataKey="max"
              position="inside"
              offset={8}
              className="fill-[#FFFFFF]"
              fontSize={12}
            />
          </Bar>
          <Line 
          type="monotone" dataKey="alarm" stroke="var(--color-muted-foreground)">
            <LabelList
              dataKey="alarm"
              position="right"
              offset={8}
              fontSize={12}
              className="fill-[#ef4444]"
            />
          </Line>
          <Line 
          type="monotone" dataKey="average" stroke="var(--color-average)">
            <LabelList
              dataKey="average"
              position="right"
              offset={8}
              fontSize={12}
              className="fill-[#075985]"
            />
          </Line>
        </ComposedChart>      
        </ChartContainer>
        <span className="text-center">Temperatura do enrolamento 1 (°C)</span>
      </div>

    </div>
    
  )
}