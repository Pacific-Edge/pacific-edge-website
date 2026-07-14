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

// Ported verbatim from the old index.html map init.
const AREAS: Area[] = [
  { n: "Vancouver", lat: 49.2827, lng: -123.1207, s: 34, main: true, type: "HEADQUARTERS", biz: [{ i: "🍣", n: "Downtown Fine Dining", c: "FINE DINING" }, { i: "💇", n: "City Salon & Spa", c: "BEAUTY" }, { i: "🏢", n: "Downtown Law Group", c: "PROFESSIONAL SERVICES" }, { i: "☕", n: "Corner Cafe", c: "CAFE" }] },
  { n: "North Vancouver", lat: 49.32, lng: -123.0724, s: 22, type: "NORTH SHORE", biz: [{ i: "🎿", n: "Mountain View Lodge", c: "HOSPITALITY" }, { i: "🔧", n: "North Shore Plumbing Co.", c: "TRADES" }, { i: "🧘", n: "North Shore Yoga", c: "WELLNESS" }] },
  { n: "West Vancouver", lat: 49.328, lng: -123.16, s: 16, type: "NORTH SHORE", biz: [{ i: "🍽", n: "Waterfront Bistro", c: "RESTAURANT" }, { i: "💎", n: "West Side Beauty Bar", c: "SPA" }] },
  { n: "Burnaby", lat: 49.2488, lng: -122.9805, s: 22, type: "BURNABY & NEW WEST", biz: [{ i: "🍜", n: "East Side Noodle House", c: "RESTAURANT" }, { i: "💼", n: "Burnaby Accounting Co.", c: "ACCOUNTING" }, { i: "💆", n: "Studio Salon", c: "BEAUTY" }] },
  { n: "New Westminster", lat: 49.2057, lng: -122.911, s: 16, type: "BURNABY & NEW WEST", biz: [{ i: "🎬", n: "River City Studios", c: "FILM PRODUCTION" }, { i: "🍰", n: "Heritage Bakery", c: "FOOD SERVICE" }] },
  { n: "Coquitlam", lat: 49.2838, lng: -122.7932, s: 18, type: "TRI-CITIES", biz: [{ i: "🏥", n: "Valley Physiotherapy", c: "HEALTH & WELLNESS" }, { i: "⚙️", n: "Tri-City Heating & Cooling", c: "TRADES" }, { i: "🛒", n: "Eastgate Shopping", c: "RETAIL" }] },
  { n: "Port Moody", lat: 49.2783, lng: -122.8608, s: 14, type: "TRI-CITIES", biz: [{ i: "🍺", n: "Inlet Brewing Co.", c: "BREWERY" }, { i: "🏋️", n: "Shoreline Fitness", c: "WELLNESS" }] },
  { n: "Richmond", lat: 49.1666, lng: -123.1336, s: 22, type: "RICHMOND & DELTA", biz: [{ i: "🍣", n: "Garden City Dim Sum", c: "RESTAURANT" }, { i: "🛒", n: "South Arm Mall", c: "RETAIL" }, { i: "💰", n: "Pacific Wealth Group", c: "FINANCE" }] },
  { n: "Delta", lat: 49.0847, lng: -123.0587, s: 14, type: "RICHMOND & DELTA", biz: [{ i: "🌾", n: "Fraser Valley Market", c: "RETAIL" }, { i: "🔧", n: "Delta Electrical Services", c: "TRADES" }] },
  { n: "Surrey", lat: 49.1913, lng: -122.849, s: 22, type: "SURREY & LANGLEY", biz: [{ i: "🏥", n: "Surrey Spine & Sport", c: "HEALTH" }, { i: "🍔", n: "Newton Eats", c: "FOOD SERVICE" }, { i: "💼", n: "Fraser Accounting", c: "ACCOUNTING" }] },
  { n: "Langley", lat: 49.1044, lng: -122.6615, s: 16, type: "LANGLEY", biz: [{ i: "🐎", n: "Valley Riding Club", c: "RECREATION" }, { i: "🍽️", n: "Langley Craft Brewery", c: "HOSPITALITY" }, { i: "⚙️", n: "Fraser Roofing Co.", c: "TRADES" }] },
  { n: "White Rock", lat: 49.0253, lng: -122.8026, s: 14, type: "SOUTH SURREY", biz: [{ i: "🌊", n: "Pier Street Cafe", c: "HOSPITALITY" }, { i: "💇", n: "Beachside Wellness Spa", c: "WELLNESS" }] },
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
    p += `<div style="display:flex;align-items:center;gap:8px;padding:7px 0;border-top:1px solid rgba(74,240,192,.08)"><span style="font-size:16px">${b.i}</span><div><div style="font-size:12px;color:#ccc;font-weight:500">${b.n}</div><div style="font-size:9px;color:rgba(74,240,192,.6);font-family:monospace;letter-spacing:1px">${b.c}</div></div></div>`
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
