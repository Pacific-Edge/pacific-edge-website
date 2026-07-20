'use client'

import { useMemo, useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { geoMercator } from 'd3-geo'
import type { FeatureCollection, Polygon } from 'geojson'

/** SVG viewBox dimensions — matches ComposableMap width/height */
const VW = 800
const VH = 500

/** geoMercator config: centred on the Lower Mainland */
const PROJECTION_CENTER: [number, number] = [-122.85, 49.22]
const PROJECTION_SCALE = 75000

type CityId =
  | 'vancouver'
  | 'north-van-district'
  | 'north-van-city'
  | 'west-vancouver'
  | 'burnaby'
  | 'new-westminster'
  | 'coquitlam'
  | 'port-moody'
  | 'richmond'
  | 'delta'
  | 'surrey'
  | 'langley-city'
  | 'langley-township'
  | 'white-rock'

interface CityProps {
  name: string
}

interface City {
  id: CityId
  name: string
  /** [lon, lat] — WGS84 */
  center: [number, number]
}

/** Marker centroids for each municipality (WGS84 lon/lat). */
const CITIES: City[] = [
  { id: 'vancouver', name: 'Vancouver', center: [-123.115, 49.245] },
  { id: 'north-van-district', name: 'North Vancouver District', center: [-123.02, 49.37] },
  { id: 'north-van-city', name: 'City of North Vancouver', center: [-123.065, 49.318] },
  { id: 'west-vancouver', name: 'West Vancouver', center: [-123.2, 49.345] },
  { id: 'burnaby', name: 'Burnaby', center: [-122.955, 49.245] },
  { id: 'port-moody', name: 'Port Moody', center: [-122.88, 49.283] },
  { id: 'coquitlam', name: 'Coquitlam', center: [-122.8, 49.29] },
  { id: 'new-westminster', name: 'New Westminster', center: [-122.94, 49.205] },
  { id: 'richmond', name: 'Richmond', center: [-123.13, 49.167] },
  { id: 'delta', name: 'Delta', center: [-123.02, 49.06] },
  { id: 'surrey', name: 'Surrey', center: [-122.83, 49.13] },
  { id: 'white-rock', name: 'White Rock', center: [-122.8, 49.025] },
  { id: 'langley-township', name: 'Township of Langley', center: [-122.65, 49.13] },
  { id: 'langley-city', name: 'City of Langley', center: [-122.595, 49.098] },
]

/**
 * Simplified but geographically representative polygons (WGS84 lon/lat) for
 * each Lower Mainland municipality. Coordinates are hand-simplified from the
 * real coastlines/borders — accurate enough to be recognisable, not
 * survey-grade.
 */
const COVERAGE_GEOJSON: FeatureCollection<Polygon, CityProps> = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { name: 'Vancouver' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-123.202, 49.263],
            [-123.185, 49.278],
            [-123.161, 49.288],
            [-123.145, 49.302],
            [-123.117, 49.309],
            [-123.1, 49.291],
            [-123.07, 49.288],
            [-123.023, 49.286],
            [-123.023, 49.245],
            [-123.023, 49.201],
            [-123.07, 49.206],
            [-123.12, 49.208],
            [-123.17, 49.211],
            [-123.203, 49.216],
            [-123.211, 49.231],
            [-123.209, 49.25],
            [-123.202, 49.263],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'North Vancouver District' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-123.15, 49.312],
            [-123.15, 49.36],
            [-123.13, 49.42],
            [-123.02, 49.43],
            [-122.95, 49.41],
            [-122.93, 49.36],
            [-122.94, 49.33],
            [-122.955, 49.312],
            [-123.02, 49.31],
            [-123.02, 49.325],
            [-123.075, 49.325],
            [-123.075, 49.31],
            [-123.1, 49.31],
            [-123.15, 49.312],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'City of North Vancouver' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-123.1, 49.31],
            [-123.1, 49.325],
            [-123.085, 49.332],
            [-123.06, 49.333],
            [-123.03, 49.328],
            [-123.02, 49.312],
            [-123.045, 49.305],
            [-123.075, 49.305],
            [-123.1, 49.31],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'West Vancouver' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-123.15, 49.312],
            [-123.15, 49.345],
            [-123.17, 49.37],
            [-123.2, 49.385],
            [-123.23, 49.38],
            [-123.26, 49.365],
            [-123.28, 49.375],
            [-123.27, 49.355],
            [-123.24, 49.34],
            [-123.21, 49.325],
            [-123.18, 49.315],
            [-123.15, 49.312],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Burnaby' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-123.023, 49.286],
            [-122.98, 49.295],
            [-122.937, 49.293],
            [-122.91, 49.278],
            [-122.9, 49.26],
            [-122.9, 49.22],
            [-122.94, 49.205],
            [-122.97, 49.202],
            [-123.0, 49.208],
            [-123.023, 49.212],
            [-123.023, 49.245],
            [-123.023, 49.286],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Port Moody' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-122.937, 49.293],
            [-122.91, 49.3],
            [-122.87, 49.295],
            [-122.84, 49.283],
            [-122.845, 49.27],
            [-122.87, 49.265],
            [-122.9, 49.27],
            [-122.92, 49.278],
            [-122.937, 49.293],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Coquitlam' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-122.9, 49.278],
            [-122.87, 49.265],
            [-122.85, 49.28],
            [-122.82, 49.3],
            [-122.78, 49.34],
            [-122.75, 49.38],
            [-122.7, 49.36],
            [-122.69, 49.32],
            [-122.71, 49.28],
            [-122.74, 49.25],
            [-122.78, 49.238],
            [-122.82, 49.235],
            [-122.86, 49.24],
            [-122.89, 49.25],
            [-122.9, 49.26],
            [-122.9, 49.278],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'New Westminster' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-122.97, 49.222],
            [-122.94, 49.22],
            [-122.913, 49.213],
            [-122.905, 49.2],
            [-122.92, 49.19],
            [-122.945, 49.188],
            [-122.968, 49.195],
            [-122.975, 49.208],
            [-122.97, 49.222],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Richmond' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-123.185, 49.208],
            [-123.15, 49.212],
            [-123.1, 49.213],
            [-123.05, 49.211],
            [-123.02, 49.205],
            [-123.03, 49.185],
            [-123.055, 49.165],
            [-123.07, 49.14],
            [-123.1, 49.128],
            [-123.14, 49.12],
            [-123.18, 49.125],
            [-123.205, 49.15],
            [-123.215, 49.18],
            [-123.205, 49.2],
            [-123.185, 49.208],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Delta' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-123.1, 49.128],
            [-123.07, 49.14],
            [-123.03, 49.13],
            [-122.99, 49.12],
            [-122.95, 49.1],
            [-122.92, 49.07],
            [-122.91, 49.02],
            [-122.95, 49.0],
            [-123.02, 49.005],
            [-123.08, 49.01],
            [-123.13, 49.02],
            [-123.16, 49.045],
            [-123.15, 49.08],
            [-123.12, 49.105],
            [-123.1, 49.128],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Surrey' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-122.95, 49.22],
            [-122.9, 49.222],
            [-122.85, 49.218],
            [-122.8, 49.21],
            [-122.75, 49.19],
            [-122.72, 49.15],
            [-122.7, 49.1],
            [-122.72, 49.06],
            [-122.78, 49.03],
            [-122.83, 49.02],
            [-122.88, 49.015],
            [-122.92, 49.03],
            [-122.94, 49.06],
            [-122.945, 49.1],
            [-122.95, 49.15],
            [-122.95, 49.19],
            [-122.95, 49.22],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'White Rock' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-122.82, 49.02],
            [-122.805, 49.018],
            [-122.79, 49.02],
            [-122.782, 49.028],
            [-122.79, 49.032],
            [-122.805, 49.03],
            [-122.818, 49.028],
            [-122.82, 49.02],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Township of Langley' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-122.8, 49.21],
            [-122.75, 49.215],
            [-122.7, 49.21],
            [-122.65, 49.205],
            [-122.6, 49.195],
            [-122.56, 49.18],
            [-122.55, 49.14],
            [-122.56, 49.1],
            [-122.58, 49.06],
            [-122.62, 49.03],
            [-122.68, 49.02],
            [-122.72, 49.03],
            [-122.75, 49.06],
            [-122.76, 49.1],
            [-122.78, 49.15],
            [-122.79, 49.19],
            [-122.8, 49.21],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'City of Langley' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-122.605, 49.11],
            [-122.585, 49.108],
            [-122.575, 49.098],
            [-122.585, 49.088],
            [-122.605, 49.087],
            [-122.615, 49.098],
            [-122.605, 49.11],
          ],
        ],
      },
    },
  ],
}

/* ─── Popup alignment helpers (percentages of the SVG viewBox) ──────── */

type Align = 'left' | 'center' | 'right'
type VPos = 'above' | 'below'

/** Popup extends right from node when node is near the left edge, vice-versa. */
function xAlign(xPct: number): Align {
  if (xPct < 22) return 'right'
  if (xPct > 80) return 'left'
  return 'center'
}

/** Show popup below when node is in the top quarter (prevents cropping). */
function yPos(yPct: number): VPos {
  return yPct < 25 ? 'below' : 'above'
}

function popupTransform(align: Align, vpos: VPos): string {
  const y = vpos === 'above' ? 'calc(-100% - 14px)' : '14px'
  const x = align === 'right' ? '-10px' : align === 'left' ? 'calc(-100% + 10px)' : '-50%'
  return `translate(${x}, ${y})`
}

/* ─── Component ───────────────────────────────────────────────────── */

export default function CoverageMap() {
  const [active, setActive] = useState<CityId | null>(null)

  /** Same projection math as the map, used to place the popup in the DOM. */
  const projection = useMemo(
    () => geoMercator().center(PROJECTION_CENTER).scale(PROJECTION_SCALE).translate([VW / 2, VH / 2]),
    []
  )

  const selected = active ? (CITIES.find(c => c.id === active) ?? null) : null

  const toggle = (id: CityId) => setActive(prev => (prev === id ? null : id))

  const selectedPoint = selected ? projection(selected.center) : null

  const popupPct = selectedPoint ? { x: (selectedPoint[0] / VW) * 100, y: (selectedPoint[1] / VH) * 100 } : null

  const popupStyle = popupPct
    ? {
        left: `${popupPct.x}%`,
        top: `${popupPct.y}%`,
        transform: popupTransform(xAlign(popupPct.x), yPos(popupPct.y)),
      }
    : undefined

  const popupCls = popupPct ? `cm-popup ${yPos(popupPct.y)} cm-align-${xAlign(popupPct.x)}` : 'cm-popup'

  return (
    <section className="cm-section" id="coverage">
      <div className="cm-header">
        <h2 className="cm-title">Proudly serving the greater Vancouver area.</h2>
      </div>

      <div className="cm-container">
        <ComposableMap
          width={VW}
          height={VH}
          projection="geoMercator"
          projectionConfig={{ center: PROJECTION_CENTER, scale: PROJECTION_SCALE }}
          className="cm-svg"
          aria-label="Service coverage map of Greater Vancouver"
        >
          <Geographies geography={COVERAGE_GEOJSON}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  aria-hidden="true"
                  style={{
                    default: { fill: '#f0f1f3', stroke: '#b8bcc6', strokeWidth: 0.5, outline: 'none' },
                    hover: { fill: '#f0f1f3', outline: 'none' },
                    pressed: { fill: '#f0f1f3', outline: 'none' },
                  }}
                />
              ))
            }
          </Geographies>

          {CITIES.map(city => (
            <Marker
              key={city.id}
              coordinates={city.center}
              className="cm-node-g"
              onClick={() => toggle(city.id)}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  toggle(city.id)
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={city.name}
              aria-pressed={active === city.id}
            >
              <circle r={4} fill="#0a0a0a" className="cm-dot" />
            </Marker>
          ))}
        </ComposableMap>

        {selected && (
          <div className={popupCls} style={popupStyle} role="tooltip" aria-live="polite">
            <button className="cm-popup-x" onClick={() => setActive(null)} aria-label="Close">
              ×
            </button>
            <span className="cm-popup-name">{selected.name}</span>
          </div>
        )}
      </div>
    </section>
  )
}
