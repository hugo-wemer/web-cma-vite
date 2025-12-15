import { House } from "lucide-react"
import { Link } from "react-router-dom"
import { Separator } from "@/components/ui/separator"
import { WorldMap } from "@/components/ui/world-map"
import TTLogo from '/tt-logo.svg'

const monitoredPlaces = [
  {
    start: { lat: -3.5066, lng: -38.9209, label: "CE" },
    end: { lat: -23.116, lng: -46.554, label: "Atibaia" },
  },
  {
    start: { lat: -4.1226, lng: -38.1542 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3502, lng: -35.834 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.4383, lng: -38.9626 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.4383, lng: -38.9626 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3502, lng: -35.834 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.282, lng: -35.7874 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.2846, lng: -35.8076 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3263, lng: -35.9327 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3876, lng: -35.8388 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -7.3456, lng: -40.5659 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -7.3456, lng: -40.5659 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -7.3456, lng: -40.5659 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.282, lng: -35.7874 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.2846, lng: -35.8076 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3263, lng: -35.9327 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3876, lng: -35.8388 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3502, lng: -35.834 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.444, lng: -37.7596 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.2846, lng: -35.8076 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0189, lng: -39.6733 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9944, lng: -39.7479 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.5469, lng: -38.8892 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0258, lng: -39.6249 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.5516, lng: -35.4443 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -7.3456, lng: -40.5659 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.444, lng: -37.7596 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.2846, lng: -35.8076 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.444, lng: -37.7596 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0258, lng: -39.6249 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.5516, lng: -35.4443 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -7.3456, lng: -40.5659 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.444, lng: -37.7596 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.2555, lng: -35.8965 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.2555, lng: -35.8965 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.2555, lng: -35.8965 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -19.8221, lng: -44.1029 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.4637, lng: -37.7541 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.4637, lng: -37.7541 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.4637, lng: -37.7541 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.4637, lng: -37.7541 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.4637, lng: -37.7541 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.4637, lng: -37.7541 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.4637, lng: -37.7541 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.4637, lng: -37.7541 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.4637, lng: -37.7541 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.4637, lng: -37.7541 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.4637, lng: -37.7541 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.4637, lng: -37.7541 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.4637, lng: -37.7541 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.4637, lng: -37.7541 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.4637, lng: -37.7541 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.4637, lng: -37.7541 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.4637, lng: -37.7541 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.4637, lng: -37.7541 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.4637, lng: -37.7541 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.4637, lng: -37.7541 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.4637, lng: -37.7541 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.4637, lng: -37.7541 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.4637, lng: -37.7541 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.4637, lng: -37.7541 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.4637, lng: -37.7541 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.4637, lng: -37.7541 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.4637, lng: -37.7541 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.4637, lng: -37.7541 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.4637, lng: -37.7541 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.444, lng: -37.7596 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -23.1171, lng: -46.5546 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -23.1171, lng: -46.5546 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -23.1171, lng: -46.5546 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -23.1171, lng: -46.5546 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.5039, lng: -37.7624 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.5039, lng: -37.7624 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.5039, lng: -37.7624 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.5039, lng: -37.7624 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.5039, lng: -37.7624 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.5039, lng: -37.7624 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.5039, lng: -37.7624 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.5039, lng: -37.7624 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.5039, lng: -37.7624 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.5039, lng: -37.7624 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.5039, lng: -37.7624 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.5039, lng: -37.7624 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.5039, lng: -37.7624 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.5039, lng: -37.7624 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.5039, lng: -37.7624 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.5039, lng: -37.7624 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.444, lng: -37.7596 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.444, lng: -37.7596 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.444, lng: -37.7596 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.444, lng: -37.7596 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.444, lng: -37.7596 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.444, lng: -37.7596 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.444, lng: -37.7596 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.444, lng: -37.7596 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.444, lng: -37.7596 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.444, lng: -37.7596 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.444, lng: -37.7596 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.444, lng: -37.7596 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.444, lng: -37.7596 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.444, lng: -37.7596 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.444, lng: -37.7596 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.444, lng: -37.7596 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.444, lng: -37.7596 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.444, lng: -37.7596 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.444, lng: -37.7596 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.444, lng: -37.7596 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.444, lng: -37.7596 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.444, lng: -37.7596 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.444, lng: -37.7596 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.444, lng: -37.7596 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.444, lng: -37.7596 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.444, lng: -37.7596 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.444, lng: -37.7596 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.444, lng: -37.7596 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -30.3191, lng: -50.324 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -30.3191, lng: -50.324 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -30.3191, lng: -50.324 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -30.3191, lng: -50.324 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -30.3191, lng: -50.324 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -30.3191, lng: -50.324 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -30.3191, lng: -50.324 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -30.3191, lng: -50.324 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.2846, lng: -35.8076 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3263, lng: -35.9327 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3263, lng: -35.9327 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3964, lng: -35.8486 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3964, lng: -35.8486 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3964, lng: -35.8486 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3964, lng: -35.8486 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3964, lng: -35.8486 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3964, lng: -35.8486 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3964, lng: -35.8486 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3964, lng: -35.8486 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3964, lng: -35.8486 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.1226, lng: -38.1542 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.1226, lng: -38.1542 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.1226, lng: -38.1542 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.1226, lng: -38.1542 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.1226, lng: -38.1542 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.1226, lng: -38.1542 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.1226, lng: -38.1542 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.1226, lng: -38.1542 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.1226, lng: -38.1542 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.1226, lng: -38.1542 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.1226, lng: -38.1542 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.1226, lng: -38.1542 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.1226, lng: -38.1542 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.1226, lng: -38.1542 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.1226, lng: -38.1542 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.1226, lng: -38.1542 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.1226, lng: -38.1542 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3825, lng: -35.848 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3825, lng: -35.848 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3825, lng: -35.848 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3825, lng: -35.848 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3825, lng: -35.848 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3825, lng: -35.848 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3825, lng: -35.848 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.4112, lng: -35.8536 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.4112, lng: -35.8536 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.4112, lng: -35.8536 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.4112, lng: -35.8536 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.4112, lng: -35.8536 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.4112, lng: -35.8536 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.4112, lng: -35.8536 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.4112, lng: -35.8536 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.4112, lng: -35.8536 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.4112, lng: -35.8536 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.5937, lng: -37.6395 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.5937, lng: -37.6395 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.1226, lng: -38.1542 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.5937, lng: -37.6395 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.5937, lng: -37.6395 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.5937, lng: -37.6395 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.5937, lng: -37.6395 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.5937, lng: -37.6395 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.5937, lng: -37.6395 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.5937, lng: -37.6395 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.5937, lng: -37.6395 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.5937, lng: -37.6395 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.5066, lng: -38.9209 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.5066, lng: -38.9209 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.5066, lng: -38.9209 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.5066, lng: -38.9209 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.5066, lng: -38.9209 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.5066, lng: -38.9209 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.5066, lng: -38.9209 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.5066, lng: -38.9209 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.5066, lng: -38.9209 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.5066, lng: -38.9209 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.5066, lng: -38.9209 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.2846, lng: -35.8076 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0189, lng: -39.6733 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0189, lng: -39.6733 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0189, lng: -39.6733 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0189, lng: -39.6733 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0189, lng: -39.6733 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0189, lng: -39.6733 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0189, lng: -39.6733 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0189, lng: -39.6733 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0189, lng: -39.6733 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0189, lng: -39.6733 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0189, lng: -39.6733 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0189, lng: -39.6733 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0189, lng: -39.6733 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0189, lng: -39.6733 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0189, lng: -39.6733 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0189, lng: -39.6733 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0189, lng: -39.6733 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0189, lng: -39.6733 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0189, lng: -39.6733 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0189, lng: -39.6733 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0189, lng: -39.6733 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0189, lng: -39.6733 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0189, lng: -39.6733 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0189, lng: -39.6733 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0189, lng: -39.6733 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0189, lng: -39.6733 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0189, lng: -39.6733 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0189, lng: -39.6733 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0189, lng: -39.6733 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0189, lng: -39.6733 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0189, lng: -39.6733 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.0189, lng: -39.6733 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.4383, lng: -38.9626 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.4383, lng: -38.9626 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.4383, lng: -38.9626 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.4383, lng: -38.9626 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.4383, lng: -38.9626 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.4383, lng: -38.9626 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.4383, lng: -38.9626 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.4383, lng: -38.9626 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.4383, lng: -38.9626 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.4383, lng: -38.9626 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.4383, lng: -38.9626 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.4383, lng: -38.9626 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.4383, lng: -38.9626 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -3.4383, lng: -38.9626 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9944, lng: -39.7479 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3649, lng: -35.8565 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3649, lng: -35.8565 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3649, lng: -35.8565 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3649, lng: -35.8565 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3649, lng: -35.8565 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3649, lng: -35.8565 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3649, lng: -35.8565 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3649, lng: -35.8565 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3649, lng: -35.8565 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3649, lng: -35.8565 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3649, lng: -35.8565 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3649, lng: -35.8565 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3649, lng: -35.8565 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3649, lng: -35.8565 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3649, lng: -35.8565 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3649, lng: -35.8565 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3649, lng: -35.8565 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3649, lng: -35.8565 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3649, lng: -35.8565 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3649, lng: -35.8565 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3649, lng: -35.8565 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3649, lng: -35.8565 },
    end: { lat: -23.116, lng: -46.554 },
  },
  { start: { lat: -5.41, lng: -35.8843 }, end: { lat: -23.116, lng: -46.554 } },
  { start: { lat: -5.41, lng: -35.8843 }, end: { lat: -23.116, lng: -46.554 } },
  { start: { lat: -5.41, lng: -35.8843 }, end: { lat: -23.116, lng: -46.554 } },
  { start: { lat: -5.41, lng: -35.8843 }, end: { lat: -23.116, lng: -46.554 } },
  { start: { lat: -5.41, lng: -35.8843 }, end: { lat: -23.116, lng: -46.554 } },
  { start: { lat: -5.41, lng: -35.8843 }, end: { lat: -23.116, lng: -46.554 } },
  { start: { lat: -5.41, lng: -35.8843 }, end: { lat: -23.116, lng: -46.554 } },
  { start: { lat: -5.41, lng: -35.8843 }, end: { lat: -23.116, lng: -46.554 } },
  { start: { lat: -5.41, lng: -35.8843 }, end: { lat: -23.116, lng: -46.554 } },
  { start: { lat: -5.41, lng: -35.8843 }, end: { lat: -23.116, lng: -46.554 } },
  { start: { lat: -5.41, lng: -35.8843 }, end: { lat: -23.116, lng: -46.554 } },
  { start: { lat: -5.41, lng: -35.8843 }, end: { lat: -23.116, lng: -46.554 } },
  { start: { lat: -5.41, lng: -35.8843 }, end: { lat: -23.116, lng: -46.554 } },
  { start: { lat: -5.41, lng: -35.8843 }, end: { lat: -23.116, lng: -46.554 } },
  { start: { lat: -5.41, lng: -35.8843 }, end: { lat: -23.116, lng: -46.554 } },
  { start: { lat: -5.41, lng: -35.8843 }, end: { lat: -23.116, lng: -46.554 } },
  { start: { lat: -5.41, lng: -35.8843 }, end: { lat: -23.116, lng: -46.554 } },
  { start: { lat: -5.41, lng: -35.8843 }, end: { lat: -23.116, lng: -46.554 } },
  { start: { lat: -5.41, lng: -35.8843 }, end: { lat: -23.116, lng: -46.554 } },
  { start: { lat: -5.41, lng: -35.8843 }, end: { lat: -23.116, lng: -46.554 } },
  {
    start: { lat: -20.0422, lng: -44.2683 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -20.0422, lng: -44.2683 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -20.0422, lng: -44.2683 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3584, lng: -35.8253 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3584, lng: -35.8253 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3584, lng: -35.8253 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3584, lng: -35.8253 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3584, lng: -35.8253 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3584, lng: -35.8253 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3584, lng: -35.8253 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3584, lng: -35.8253 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3502, lng: -35.834 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3502, lng: -35.834 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3502, lng: -35.834 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3584, lng: -35.8253 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3584, lng: -35.8253 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3584, lng: -35.8253 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3584, lng: -35.8253 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3584, lng: -35.8253 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3584, lng: -35.8253 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3584, lng: -35.8253 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3584, lng: -35.8253 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3584, lng: -35.8253 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3584, lng: -35.8253 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3584, lng: -35.8253 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3584, lng: -35.8253 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3502, lng: -35.834 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3502, lng: -35.834 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3502, lng: -35.834 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3502, lng: -35.834 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3502, lng: -35.834 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3502, lng: -35.834 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3502, lng: -35.834 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3502, lng: -35.834 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3502, lng: -35.834 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3502, lng: -35.834 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3502, lng: -35.834 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3502, lng: -35.834 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3502, lng: -35.834 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3502, lng: -35.834 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3502, lng: -35.834 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3502, lng: -35.834 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3502, lng: -35.834 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3502, lng: -35.834 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3502, lng: -35.834 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3502, lng: -35.834 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3849, lng: -35.8706 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3849, lng: -35.8706 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3849, lng: -35.8706 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3849, lng: -35.8706 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3849, lng: -35.8706 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3849, lng: -35.8706 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3849, lng: -35.8706 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3849, lng: -35.8706 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3849, lng: -35.8706 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3849, lng: -35.8706 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3849, lng: -35.8706 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3849, lng: -35.8706 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3849, lng: -35.8706 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3849, lng: -35.8706 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3849, lng: -35.8706 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3849, lng: -35.8706 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3849, lng: -35.8706 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3849, lng: -35.8706 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3849, lng: -35.8706 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3849, lng: -35.8706 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3953, lng: -35.884 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3953, lng: -35.884 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3953, lng: -35.884 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3953, lng: -35.884 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3953, lng: -35.884 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3953, lng: -35.884 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3953, lng: -35.884 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3953, lng: -35.884 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3953, lng: -35.884 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3953, lng: -35.884 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3953, lng: -35.884 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3953, lng: -35.884 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3953, lng: -35.884 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3953, lng: -35.884 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3953, lng: -35.884 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3953, lng: -35.884 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3953, lng: -35.884 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3953, lng: -35.884 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3953, lng: -35.884 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3953, lng: -35.884 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3953, lng: -35.884 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3953, lng: -35.884 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3953, lng: -35.884 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3088, lng: -35.927 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3088, lng: -35.927 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3088, lng: -35.927 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3088, lng: -35.927 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3088, lng: -35.927 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3088, lng: -35.927 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3088, lng: -35.927 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3088, lng: -35.927 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3088, lng: -35.927 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3088, lng: -35.927 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3088, lng: -35.927 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3088, lng: -35.927 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3088, lng: -35.927 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3088, lng: -35.927 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3088, lng: -35.927 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3088, lng: -35.927 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3088, lng: -35.927 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3088, lng: -35.927 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3088, lng: -35.927 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3448, lng: -35.8846 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3448, lng: -35.8846 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3448, lng: -35.8846 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3448, lng: -35.8846 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3448, lng: -35.8846 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3448, lng: -35.8846 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3448, lng: -35.8846 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3448, lng: -35.8846 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3448, lng: -35.8846 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3448, lng: -35.8846 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3448, lng: -35.8846 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3448, lng: -35.8846 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3448, lng: -35.8846 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3448, lng: -35.8846 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3448, lng: -35.8846 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3448, lng: -35.8846 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3448, lng: -35.8846 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3448, lng: -35.8846 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -23.238, lng: -45.9233 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -30.3191, lng: -50.324 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3876, lng: -35.8388 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3876, lng: -35.8388 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3876, lng: -35.8388 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3876, lng: -35.8388 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3876, lng: -35.8388 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3876, lng: -35.8388 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3876, lng: -35.8388 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3876, lng: -35.8388 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3876, lng: -35.8388 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3876, lng: -35.8388 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.3876, lng: -35.8388 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -27.0294, lng: -52.4359 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -28.4044, lng: -53.8098 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -28.4044, lng: -53.8098 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -27.0584, lng: -52.4686 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -21.8747, lng: -47.792 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -21.8747, lng: -47.792 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -21.8747, lng: -47.792 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -21.8747, lng: -47.792 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -21.8891, lng: -48.1502 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -21.8891, lng: -48.1502 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -19.5199, lng: -42.7676 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -19.5199, lng: -42.7676 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -18.9479, lng: -42.5291 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -22.2658, lng: -46.7322 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -15.2907, lng: -58.7069 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -15.2907, lng: -58.7069 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -21.8478, lng: -48.49 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -21.8478, lng: -48.49 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -28.9089, lng: -51.9435 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -28.9089, lng: -51.9435 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -22.8192, lng: -46.8809 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -22.8192, lng: -46.8809 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -22.5136, lng: -48.6446 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -26.5805, lng: -52.4963 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -26.5805, lng: -52.4963 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -26.5805, lng: -52.4963 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -26.5805, lng: -52.4963 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -26.5805, lng: -52.4963 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -16.1928, lng: -47.1743 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -16.1928, lng: -47.1743 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -22.0227, lng: -47.9271 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -22.495, lng: -45.3295 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -18.5998, lng: -41.8479 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -22.2793, lng: -46.7599 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -28.142, lng: -55.0657 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -26.9653, lng: -52.3367 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -28.6164, lng: -51.3551 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -27.1032, lng: -51.2935 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -22.931, lng: -46.8987 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -26.6093, lng: -52.5327 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -22.0729, lng: -48.062 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -22.0729, lng: -48.062 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.282, lng: -35.7874 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.282, lng: -35.7874 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -19.8119, lng: -43.2661 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -20.5746, lng: -47.7834 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -22.6059, lng: -46.506 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -22.7768, lng: -47.0081 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -22.7768, lng: -47.0081 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -22.3759, lng: -48.1716 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -22.3759, lng: -48.1716 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -20.0478, lng: -41.7431 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -19.9859, lng: -41.7192 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -24.6911, lng: -52.4639 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9081, lng: -41.0424 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -19.8221, lng: -44.1029 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -19.8221, lng: -44.1029 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -19.8221, lng: -44.1029 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -19.8221, lng: -44.1029 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.282, lng: -35.7874 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.282, lng: -35.7874 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -20.0422, lng: -44.2683 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -20.0422, lng: -44.2683 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -20.0422, lng: -44.2683 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -20.0422, lng: -44.2683 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -23.2711, lng: -52.4868 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -23.2711, lng: -52.4868 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -25.0001, lng: -48.622 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -23.1171, lng: -46.5546 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -23.1171, lng: -46.5546 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -23.1171, lng: -46.5546 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -23.1171, lng: -46.5546 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -25.0001, lng: -48.622 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -17.3882, lng: -49.2174, label: "GO" },
    end: { lat: -23.116, lng: -46.554, label: "Atibaia" },
  },
  {
    start: { lat: -8.0416, lng: -40.6714 },
    end: { lat: -23.116, lng: -46.554 },
  },
  { start: { lat: -7.99, lng: -40.5735 }, end: { lat: -23.116, lng: -46.554 } },
  {
    start: { lat: -2.8537, lng: -40.0677 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.9176, lng: -39.9576 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -2.8013, lng: -40.2696 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.558, lng: -37.6894 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -20.0422, lng: -44.2683 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.558, lng: -37.6894 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.558, lng: -37.6894 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -26.6128, lng: -51.7121 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -26.6128, lng: -51.7121 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -26.6128, lng: -51.7121 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -21.6085, lng: -45.4622 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -26.6093, lng: -52.5327 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -23.1179, lng: -46.5549 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -22.3193, lng: -48.5469 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -26.9529, lng: -50.3945 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -17.3151, lng: -44.3342 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.0143, lng: -45.295 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.867, lng: -65.5454 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.7197, lng: -39.0129 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -12.0987, lng: -42.1909 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -8.3171, lng: -37.2391 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -8.6095, lng: -70.5711 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -24.6911, lng: -52.4639 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -22.3193, lng: -48.5469 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -26.9529, lng: -50.3945 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -17.3151, lng: -44.3342 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.0143, lng: -45.295 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.867, lng: -65.5454 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.7197, lng: -39.0129 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -12.0987, lng: -42.1909 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -8.3171, lng: -37.2391 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -8.6095, lng: -70.5711 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -24.6911, lng: -52.4639 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -22.3193, lng: -48.5469 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -26.9529, lng: -50.3945 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -17.3151, lng: -44.3342 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -5.0143, lng: -45.295 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.867, lng: -65.5454 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -4.7197, lng: -39.0129 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -12.0987, lng: -42.1909 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -8.3171, lng: -37.2391 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -8.6095, lng: -70.5711 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -30.3191, lng: -50.324 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -30.3191, lng: -50.324 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -30.3191, lng: -50.324 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -30.3191, lng: -50.324 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -23.1179, lng: -46.5549 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -20.0422, lng: -44.2683 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -20.0422, lng: -44.2683 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -20.0422, lng: -44.2683 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -7.6879, lng: -40.5581 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -7.6879, lng: -40.5581 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -20.0422, lng: -44.2683 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -7.7714, lng: -40.6766 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -7.7714, lng: -40.6766 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -15.2905, lng: -58.7086 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -17.8895, lng: -40.204 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -18.9389, lng: -42.4863 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -15.2905, lng: -58.7086 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -17.8895, lng: -40.204 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -15.2905, lng: -58.7086 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -17.8895, lng: -40.204 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -11.0867, lng: -41.3207 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -11.0867, lng: -41.3207 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -11.0867, lng: -41.3207 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -22.3232, lng: -47.4485 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -21.1745, lng: -48.1203 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -23.238, lng: -45.9233 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -23.019, lng: -45.547 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -23.019, lng: -45.547 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -23.019, lng: -45.547 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -23.019, lng: -45.547 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -20.2237, lng: -47.718 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -14.3447, lng: -56.7962 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -20.6436, lng: -47.6732 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -20.8407, lng: -47.3059 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -20.5746, lng: -47.7834 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -22.3232, lng: -47.4485 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -23.238, lng: -45.9233 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -23.019, lng: -45.547 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -23.019, lng: -45.547 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -23.019, lng: -45.547 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -23.019, lng: -45.547 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -23.5855, lng: -46.2537 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -23.019, lng: -45.547 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -23.1171, lng: -46.5546 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -23.1171, lng: -46.5546 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: 34.8479, lng: -118.3281, label: "EUA" },
    end: { lat: -23.116, lng: -46.554, label: "Atibaia" },
  },
  {
    start: { lat: 34.8027, lng: -105.0303 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: 39.8611, lng: -83.3308 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: 34.9841, lng: -103.3679 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: 40.8644, lng: -104.0632 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: 41.2712, lng: -89.588 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: 35.1015, lng: -105.0196 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: 28.9312, lng: -99.0997 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: 41.232, lng: -89.5848 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: 34.8173, lng: -105.0656 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: 28.9369, lng: -99.0821, label: 'TX' },
    end: { lat: -23.116, lng: -46.554, label: 'Atibaia' },
  },
  {
    start: { lat: 40.9587, lng: -104.0001 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: 36.4987, lng: -76.1645 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: 40.961, lng: -103.8985 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: 36.3065, lng: -89.4627 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: 32.9947, lng: -113.5092 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: 32.3469, lng: -100.355 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: 32.994, lng: -113.5092 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: -24.868, lng: 152.3456, label: "Australia" },
    end: { lat: -23.116, lng: -46.554, label: "Atibaia" },
  },
  {
    start: { lat: 24.9748, lng: 66.927, label: "India" },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: 22.3594, lng: 82.75, label: "Atibaia" },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: 14.2794, lng: 121.1143 },
    end: { lat: -23.116, lng: -46.554 },
  },
  {
    start: { lat: 29.7607, lng: 107.2463 },
    end: { lat: -23.116, lng: -46.554 },
  },
]

export function AssetMap() {
  return (
    <div className="w-full rounded bg-white dark:bg-black overflow-hidden h-screen">
      <header className="flex h-12 shrink-0 items-center justify-between border-b px-4 py-2">
        <div className="flex items-center gap-2">
          <Link to="/">
            <House className="size-5 text-muted-foreground" />
          </Link>
          <Separator
            className="data-[orientation=vertical]:h-4"
            orientation="vertical"
          />
        </div>
      </header>
      <WorldMap dots={monitoredPlaces} lineColor="#008242" />
      <div className="absolute bottom-0 opacity-70">
        <img src={TTLogo} className=""/>
      </div>
    </div>
  )
}
