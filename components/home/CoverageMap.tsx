"use client"

import { useEffect, useRef } from "react"

/* eslint-disable @typescript-eslint/no-explicit-any */

type Biz = { i: string; n: string; c: string }
type Area = {
  n: string
  lat: number
  lng: number
  s: number
  main?: boolean
  type: string
  biz: Biz[]
}

// Lucide-style inline SVG icons. Popups/markers are raw Leaflet HTML strings,
// so these must be plain SVG markup (not React components).
const svgIcon = (paths: string) =>
  `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`

const ICONS: Record<string, string> = {
  utensils: svgIcon('<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>'),
  coffee: svgIcon('<path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/>'),
  scissors: svgIcon('<circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/>'),
  gem: svgIcon('<path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/>'),
  building: svgIcon('<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>'),
  briefcase: svgIcon('<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>'),
  wrench: svgIcon('<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>'),
  activity: svgIcon('<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>'),
  cart: svgIcon('<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>'),
  film: svgIcon('<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M17 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/>'),
  beer: svgIcon('<path d="M17 11h1a3 3 0 0 1 0 6h-1"/><path d="M9 12v6"/><path d="M13 12v6"/><path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"/><path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"/>'),
  dollar: svgIcon('<line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>'),
  mountain: svgIcon('<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>'),
  pin: svgIcon('<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/>'),
}

// Ported from the old index.html map init (emoji icons replaced with SVG icon keys).
const AREAS: Area[] = [
  { n: "Vancouver", lat: 49.2827, lng: -123.1207, s: 34, main: true, type: "HEADQUARTERS", biz: [{ i: "utensils", n: "Downtown Fine Dining", c: "FINE DINING" }, { i: "scissors", n: "City Salon & Spa", c: "BEAUTY" }, { i: "building", n: "Downtown Law Group", c: "PROFESSIONAL SERVICES" }, { i: "coffee", n: "Corner Cafe", c: "CAFE" }] },
  { n: "North Vancouver", lat: 49.32, lng: -123.0724, s: 22, type: "NORTH SHORE", biz: [{ i: "mountain", n: "Mountain View Lodge", c: "HOSPITALITY" }, { i: "wrench", n: "North Shore Plumbing Co.", c: "TRADES" }, { i: "activity", n: "North Shore Yoga", c: "WELLNESS" }] },
  { n: "West Vancouver", lat: 49.328, lng: -123.16, s: 16, type: "NORTH SHORE", biz: [{ i: "utensils", n: "Waterfront Bistro", c: "RESTAURANT" }, { i: "gem", n: "West Side Beauty Bar", c: "SPA" }] },
  { n: "Burnaby", lat: 49.2488, lng: -122.9805, s: 22, type: "BURNABY & NEW WEST", biz: [{ i: "utensils", n: "East Side Noodle House", c: "RESTAURANT" }, { i: "briefcase", n: "Burnaby Accounting Co.", c: "ACCOUNTING" }, { i: "scissors", n: "Studio Salon", c: "BEAUTY" }] },
  { n: "New Westminster", lat: 49.2057, lng: -122.911, s: 16, type: "BURNABY & NEW WEST", biz: [{ i: "film", n: "River City Studios", c: "FILM PRODUCTION" }, { i: "utensils", n: "Heritage Bakery", c: "FOOD SERVICE" }] },
  { n: "Coquitlam", lat: 49.2838, lng: -122.7932, s: 18, type: "TRI-CITIES", biz: [{ i: "activity", n: "Valley Physiotherapy", c: "HEALTH & WELLNESS" }, { i: "wrench", n: "Tri-City Heating & Cooling", c: "TRADES" }, { i: "cart", n: "Eastgate Shopping", c: "RETAIL" }] },
  { n: "Port Moody", lat: 49.2783, lng: -122.8608, s: 14, type: "TRI-CITIES", biz: [{ i: "beer", n: "Inlet Brewing Co.", c: "BREWERY" }, { i: "activity", n: "Shoreline Fitness", c: "WELLNESS" }] },
  { n: "Richmond", lat: 49.1666, lng: -123.1336, s: 22, type: "RICHMOND & DELTA", biz: [{ i: "utensils", n: "Garden City Dim Sum", c: "RESTAURANT" }, { i: "cart", n: "South Arm Mall", c: "RETAIL" }, { i: "dollar", n: "Pacific Wealth Group", c: "FINANCE" }] },
  { n: "Delta", lat: 49.0847, lng: -123.0587, s: 14, type: "RICHMOND & DELTA", biz: [{ i: "cart", n: "Fraser Valley Market", c: "RETAIL" }, { i: "wrench", n: "Delta Electrical Services", c: "TRADES" }] },
  { n: "Surrey", lat: 49.1913, lng: -122.849, s: 22, type: "SURREY & LANGLEY", biz: [{ i: "activity", n: "Surrey Spine & Sport", c: "HEALTH" }, { i: "utensils", n: "Newton Eats", c: "FOOD SERVICE" }, { i: "briefcase", n: "Fraser Accounting", c: "ACCOUNTING" }] },
  { n: "Langley", lat: 49.1044, lng: -122.6615, s: 16, type: "LANGLEY", biz: [{ i: "pin", n: "Valley Riding Club", c: "RECREATION" }, { i: "beer", n: "Langley Craft Brewery", c: "HOSPITALITY" }, { i: "wrench", n: "Fraser Roofing Co.", c: "TRADES" }] },
  { n: "White Rock", lat: 49.0253, lng: -122.8026, s: 14, type: "SOUTH SURREY", biz: [{ i: "coffee", n: "Pier Street Cafe", c: "HOSPITALITY" }, { i: "scissors", n: "Beachside Wellness Spa", c: "WELLNESS" }] },
]

const REGIONS = [
  { lat: 49.2827, lng: -123.1207, zoom: 14, name: "Vancouver & Downtown", desc: "Restaurants, retail, professional services" },
  { lat: 49.2488, lng: -122.9805, zoom: 13, name: "Burnaby & New Westminster", desc: "Trades, wellness clinics, food service" },
  { lat: 49.1913, lng: -122.849, zoom: 12, name: "Surrey & Langley", desc: "Growing businesses ready to scale" },
  { lat: 49.32, lng: -123.0724, zoom: 13, name: "North Shore & Tri-Cities", desc: "Local operators, service-based businesses" },
  { lat: 49.1666, lng: -123.1336, zoom: 13, name: "Richmond & Delta", desc: "Retail, hospitality, e-commerce" },
]

function markerHtml(a: Area): string {
  const s = a.s
  let h = `<div style="width:${s}px;height:${s}px;position:relative;cursor:pointer">`
  h += `<div style="position:absolute;inset:${a.main ? -22 : -14}px;border-radius:50%;border:${a.main ? 2 : 1}px solid rgba(74,240,192,.3);animation:_mp 2.5s infinite"></div>`
  if (a.main) h += `<div style="position:absolute;inset:-38px;border-radius:50%;border:1px solid rgba(74,240,192,.12);animation:_mp 3.5s infinite .7s"></div>`
  h += `<div style="position:absolute;inset:-${Math.round(s * 0.8)}px;border-radius:50%;background:radial-gradient(circle,rgba(74,240,192,${a.main ? 0.25 : 0.12}),transparent 65%);pointer-events:none"></div>`
  h += `<div style="width:100%;height:100%;border-radius:50%;background:radial-gradient(circle at 35% 35%,#7fffd4,#4af0c0 50%,#20a080);box-shadow:0 0 ${a.main ? 25 : 12}px rgba(74,240,192,.7);position:relative;z-index:2;animation:_mg 2.5s infinite"></div>`
  if (a.main) h += `<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:10px;height:10px;border-radius:50%;background:white;box-shadow:0 0 10px white;z-index:3"></div>`
  h += `<div style="position:absolute;left:50%;transform:translateX(-50%);top:${s + 8}px;white-space:nowrap;font-family:monospace;font-size:${a.main ? 11 : 9}px;color:rgba(74,240,192,${a.main ? 1 : 0.8});letter-spacing:${a.main ? 2 : 1.5}px;text-shadow:0 0 10px #000,0 0 20px #000;font-weight:${a.main ? "bold" : "normal"};pointer-events:none;z-index:4">${a.n.toUpperCase()}</div>`
  h += `</div>`
  return h
}

function popupHtml(a: Area): string {
  let p = `<div style="background:rgba(7,7,15,.95);border:1px solid rgba(74,240,192,.25);border-radius:14px;padding:18px 20px;min-width:220px;max-width:280px;backdrop-filter:blur(8px)">`
  p += `<div style="font-size:15px;font-weight:700;color:#eeeef2;margin:0 0 4px">${a.n}</div>`
  p += `<div style="font-size:10px;color:#4af0c0;font-family:monospace;letter-spacing:2px;margin-bottom:12px">${a.type}</div>`
  a.biz.forEach((b) => {
    p += `<div style="display:flex;align-items:center;gap:8px;padding:7px 0;border-top:1px solid rgba(74,240,192,.08)"><span style="flex:none;display:flex;align-items:center;justify-content:center;width:16px;color:#4af0c0">${ICONS[b.i] ?? ""}</span><div><div style="font-size:12px;color:#ccc;font-weight:500">${b.n}</div><div style="font-size:9px;color:rgba(74,240,192,.6);font-family:monospace;letter-spacing:1px">${b.c}</div></div></div>`
  })
  p += `</div>`
  return p
}

function loadLeaflet(): Promise<void> {
  return new Promise((resolve, reject) => {
    if ((window as any).L) return resolve()
    if (!document.querySelector("link[data-leaflet]")) {
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      link.setAttribute("data-leaflet", "")
      document.head.appendChild(link)
    }
    const existing = document.querySelector("script[data-leaflet]") as HTMLScriptElement | null
    if (existing) {
      existing.addEventListener("load", () => resolve())
      existing.addEventListener("error", () => reject(new Error("leaflet failed")))
      return
    }
    const s = document.createElement("script")
    s.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
    s.setAttribute("data-leaflet", "")
    s.onload = () => resolve()
    s.onerror = () => reject(new Error("leaflet failed"))
    document.head.appendChild(s)
  })
}

function injectMapStyles() {
  if (document.getElementById("pe-map-style")) return
  const st = document.createElement("style")
  st.id = "pe-map-style"
  st.textContent =
    "@keyframes _mp{0%,100%{transform:scale(1);opacity:.8}50%{transform:scale(1.6);opacity:.1}}@keyframes _mg{0%,100%{box-shadow:0 0 12px rgba(74,240,192,.5)}50%{box-shadow:0 0 28px rgba(74,240,192,.9)}}.leaflet-popup-content-wrapper{background:transparent!important;box-shadow:none!important;border:none!important}.leaflet-popup-content{margin:0!important;padding:0!important}.leaflet-popup-tip-container{display:none!important}.leaflet-container .leaflet-control-attribution{background:rgba(7,7,15,.7)!important;color:rgba(255,255,255,.3)!important;font-size:9px!important}"
  document.head.appendChild(st)
}

export default function CoverageMap() {
  const mapElRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<any>(null)

  useEffect(() => {
    const el = mapElRef.current
    if (!el) return
    let cancelled = false

    const init = () => {
      const L = (window as any).L
      if (!L || !mapElRef.current || mapRef.current || cancelled) return
      const map = L.map(mapElRef.current, {
        center: [49.25, -123.05],
        zoom: 10,
        zoomControl: false,
        attributionControl: true,
      })
      mapRef.current = map
      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        attribution: '&copy; <a href="https://carto.com">CartoDB</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }).addTo(map)
      L.control.zoom({ position: "bottomright" }).addTo(map)
      injectMapStyles()
      AREAS.forEach((a) => {
        const icon = L.divIcon({ html: markerHtml(a), className: "", iconSize: [a.s, a.s], iconAnchor: [Math.round(a.s / 2), Math.round(a.s / 2)] })
        const marker = L.marker([a.lat, a.lng], { icon })
        marker.bindPopup(L.popup({ offset: [0, -Math.round(a.s / 2)], closeButton: false, maxWidth: 280 }).setContent(popupHtml(a)))
        marker.on("mouseover", function (this: any) { this.openPopup() })
        marker.on("mouseout", function (this: any) { this.closePopup() })
        marker.addTo(map)
      })
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect()
          loadLeaflet().then(init).catch(() => {})
        }
      },
      { rootMargin: "200px" },
    )
    io.observe(el)

    return () => {
      cancelled = true
      io.disconnect()
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [])

  const flyTo = (lat: number, lng: number, zoom: number) => {
    mapRef.current?.flyTo([lat, lng], zoom, { duration: 2 })
  }

  return (
    <section className="map-section" id="coverage">
      <span className="sn">03</span>
      <div className="r">
        <div className="sl">Coverage</div>
        <h2 className="st">
          Proudly Serving
          <br />
          <span className="a">Greater Vancouver</span>
        </h2>
      </div>
      <div className="map-grid">
        <div className="map-container r rd1" style={{ position: "relative", background: "#060612" }}>
          <div ref={mapElRef} id="map3d" style={{ width: "100%", height: "100%", borderRadius: 20 }} />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 3,
              background: "linear-gradient(90deg,#4af0c0,#c75d3c)",
              zIndex: 10,
              borderRadius: "20px 20px 0 0",
              pointerEvents: "none",
            }}
          />
        </div>
        <div className="map-info r rd2">
          <h3>
            Your Neighborhood.
            <br />
            <span className="a">Our Priority.</span>
          </h3>
          <p>
            We work with businesses across the Lower Mainland. Whether you&apos;re in downtown
            Vancouver or out in the Fraser Valley, we&apos;re close enough to meet face-to-face and
            understand the local market your business operates in.
          </p>
          <div className="map-areas">
            {REGIONS.map((r) => (
              <div
                key={r.name}
                className="map-area"
                style={{ cursor: "pointer" }}
                onClick={() => flyTo(r.lat, r.lng, r.zoom)}
              >
                <div className="map-area-dot" />
                <div>
                  <div className="map-area-name">{r.name}</div>
                  <div className="map-area-desc">{r.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="map-badge">
            <span className="map-badge-pulse" />
            Accepting new clients across BC
          </div>
        </div>
      </div>
    </section>
  )
}
