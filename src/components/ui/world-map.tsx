/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import DottedMap from "dotted-map"
import { motion } from "motion/react"
import { useRef } from "react"

type MapProps = {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string }
    end: { lat: number; lng: number; label?: string }
  }>
  lineColor?: string
}

export function WorldMap({ dots = [], lineColor = "#0ea5e9" }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const map = new DottedMap({ height: 100, grid: "diagonal" })

  const svgMap = map.getSVG({
    radius: 0.22,
    color: "#FFFFFF40",
    shape: "circle",
    backgroundColor: "black",
  })

  const { width, height } = map.image
  const projectPoint = (lat: number, lng: number) => {
    const pin = map.getPin({ lat, lng })
    return { x: pin.x, y: pin.y }
  }

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2
    const midY = Math.min(start.y, end.y) - 50
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`
  }

  return (
    <div className="relative aspect-2/1 w-full rounded-lg bg-white font-sans dark:bg-black">
      <img
        alt="world map"
        className="mask-[linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none h-full w-full select-none"
        draggable={false}
        height="495"
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        width="1056"
      />
      {/** biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full select-none"
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`}
      >
        {dots
          .filter((dot) => dot.start.label)
          .map((dot, i) => {
            const startPoint = projectPoint(dot.start.lat, dot.start.lng)
            const endPoint = projectPoint(dot.end.lat, dot.end.lng)

            const drawDuration = 3
            const delayBetweenLines = 0.8

            return (
              <g key={`path-group-${i}`}>
                <motion.path
                  animate={{ pathLength: 1 }}
                  d={createCurvedPath(startPoint, endPoint)}
                  fill="none"
                  initial={{ pathLength: 0 }}
                  stroke="url(#path-gradient)"
                  strokeWidth="0.2"
                  transition={{
                    duration: drawDuration,
                    delay: i * delayBetweenLines,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    repeatDelay: 1.5,
                  }}
                />
              </g>
            )
          })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            <g key={`start-${i}`}>
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                fill={lineColor}
                r="0.5"
              />
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                fill={lineColor}
                opacity="0.1"
                r=".1"
              >
                <animate
                  attributeName="r"
                  begin="0s"
                  dur="1.5s"
                  from="0.5"
                  repeatCount="indefinite"
                  to="1.5"
                />
                <animate
                  attributeName="opacity"
                  begin="0s"
                  dur="1.5s"
                  from="0.5"
                  repeatCount="indefinite"
                  to="0"
                />
              </circle>
            </g>
            <g key={`end-${i}`}>
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                fill={lineColor}
                r="0.1"
              />
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                fill={lineColor}
                opacity="0.5"
                r="0.1"
              >
                <animate
                  attributeName="r"
                  begin="0s"
                  dur="1.5s"
                  from="0.5"
                  repeatCount="indefinite"
                  to="1.5"
                />
                <animate
                  attributeName="opacity"
                  begin="0s"
                  dur="1.5s"
                  from="0.5"
                  repeatCount="indefinite"
                  to="0"
                />
              </circle>
            </g>
          </g>
        ))}
      </svg>
    </div>
  )
}
