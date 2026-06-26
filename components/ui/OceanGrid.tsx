"use client"

import { useEffect, useRef } from "react"

/* ─────────────────────────────────────────────────────────────────────────
   OCEAN GRID — fluid surface simulation.
   The wave expresses itself purely through:
     • smooth tanh "pull toward / push past" along the propagation axis
     • node radius swelling near the crest, shrinking as it leaves
   Ambient life on top of that:
     • idle micro-drift so the surface is never static
     • a long-period swell so the bulk surface breathes
     • a curved, asymmetric wavelet front along a diagonal axis
     • per-crest band intensity so the wave hits unevenly along its length
   No vertical bobbing, no post-wave ringing.
   Every knob lives in OCEAN_CONFIG below.
   ──────────────────────────────────────────────────────────────────────── */
export const OCEAN_CONFIG = {
  // Palette
  bgColor:   "#0A1628",                       // navy-900 / midnight
  gridColor: "rgba(122, 143, 168, 0.22)",     // slate-400
  nodeColor: "rgba(201, 169, 98, 0.45)",      // gold-400

  // Geometry
  density:   34,    // px between grid points
  nodeSize:  1.0,   // base node radius (px)
  lineWidth: 0.55,

  // ─── Idle micro-drift ──────────────────────────────────────────────
  // Every node wanders inside this radius even with no wave nearby.
  idleDriftRadius: 3.2,   // px
  idleDriftSpeed:  0.38,

  // ─── Long-period background swell ──────────────────────────────────
  swellAmplitude: 1.8,    // px
  swellSpeed:     0.07,
  swellScaleX:    0.0018,
  swellScaleY:    0.0014,

  // ─── Wave front ────────────────────────────────────────────────────
  // Propagation angle, degrees. 0 = pure L→R. Positive = tilts down-right
  // (crest line runs top-left → bottom-right; wave travels perpendicular to it).
  waveAngleDeg:    34,
  waveSpeed:       230,   // px/sec drift along propagation axis
  waveWidthLead:   180,   // px — sigma of leading edge (steep)
  waveWidthTrail:  340,   // px — sigma of trailing edge (long wake)
  waveAmplitudeX:  18,    // px — along-axis pull/push amplitude
  nodeScaleAmp:    2.3,   // node radius multiplier at crest peak
  edgeBuffer:      1.15,

  // ─── Wave front curvature (front is not a straight line) ───────────
  curvatureAmp:    70,    // px — along-axis offset along the crest line
  curvatureScale:  0.0035,// 1/px — bigger lobes when smaller
  curvatureSpeed:  0.14,

  // ─── Band intensity along the crest line ───────────────────────────
  bandStrength: 0.45,     // 0..1 — how much sections of the crest can vary
  bandScale:    0.003,
  bandSpeed:    0.04,
} as const

export type OceanConfig = typeof OCEAN_CONFIG

interface Props {
  className?: string
  config?: Partial<OceanConfig>
}

export default function OceanGrid({ className = "", config }: Props) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const c: OceanConfig = { ...OCEAN_CONFIG, ...config }

    let raf = 0
    let w = 0
    let h = 0
    let dpr = window.devicePixelRatio || 1

    const resize = () => {
      dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const start = performance.now()
    const TAU = Math.PI * 2

    // Cheap 1D pseudo-noise — three offset sines summed.
    // Output roughly in [-1, 1], deterministic, no allocations.
    const n1 = (x: number, t: number) =>
      0.55 * Math.sin(x * 1.0 + t * 0.9) +
      0.30 * Math.sin(x * 2.3 + t * 0.6 + 1.7) +
      0.15 * Math.sin(x * 4.7 + t * 0.4 + 3.1)

    const sigLead2  = 2 * c.waveWidthLead  * c.waveWidthLead
    const sigTrail2 = 2 * c.waveWidthTrail * c.waveWidthTrail

    // Wave propagation direction (unit vector) and crest-line direction.
    const angRad = (c.waveAngleDeg * Math.PI) / 180
    const dirX  =  Math.cos(angRad)
    const dirY  =  Math.sin(angRad)
    const perpX = -Math.sin(angRad)
    const perpY =  Math.cos(angRad)

    const draw = (now: number) => {
      const t = (now - start) / 1000

      ctx.fillStyle = c.bgColor
      ctx.fillRect(0, 0, w, h)

      const cols = Math.ceil(w / c.density) + 2
      const rows = Math.ceil(h / c.density) + 2

      // Compute projection bounds across the visible canvas so the wave
      // sweeps cleanly from one diagonal corner to the other.
      const corners = [0, w * dirX, h * dirY, w * dirX + h * dirY]
      let projMin = corners[0]
      let projMax = corners[0]
      for (let i = 1; i < corners.length; i++) {
        if (corners[i] < projMin) projMin = corners[i]
        if (corners[i] > projMax) projMax = corners[i]
      }
      const projRange = projMax - projMin
      const buffer = c.waveWidthTrail * c.edgeBuffer
      const span = projRange + 2 * buffer
      const waveBaseProj = reduce
        ? projMin + projRange * 0.5
        : projMin + ((t * c.waveSpeed) % span) - buffer

      const xs = new Float32Array(cols * rows)
      const ys = new Float32Array(cols * rows)
      const ss = new Float32Array(cols * rows)

      const driftT = t * c.idleDriftSpeed * TAU
      const swellT = t * c.swellSpeed * TAU
      const curveT = t * c.curvatureSpeed * TAU
      const bandT  = t * c.bandSpeed * TAU

      for (let j = 0; j < rows; j++) {
        const y0base = j * c.density - c.density

        for (let i = 0; i < cols; i++) {
          const x0 = i * c.density - c.density

          // Project node onto propagation + crest-line coordinates.
          const proj = x0 * dirX  + y0base * dirY
          const perp = x0 * perpX + y0base * perpY

          // Curvature: shifts the wave front along propagation axis by an
          // amount that varies along the crest line and slowly over time.
          const curve = n1(perp * c.curvatureScale, curveT) * c.curvatureAmp
          const dx = proj - waveBaseProj - curve

          // Band intensity along the crest line.
          const band01 = 0.5 + 0.5 * n1(perp * c.bandScale, bandT)
          const band = 1 - c.bandStrength + band01 * c.bandStrength * 1.8

          // Asymmetric envelope: steep lead, long trail.
          const sig2 = dx < 0 ? sigTrail2 : sigLead2
          const envelope = Math.exp(-(dx * dx) / sig2) * band

          // ── Idle drift: per-node wander within idleDriftRadius. ──
          const seed = i * 12.9898 + j * 78.233
          const dxIdle = c.idleDriftRadius *
            n1(seed * 0.013, driftT + i * 0.31)
          const dyIdle = c.idleDriftRadius *
            n1(seed * 0.017 + 4.2, driftT + j * 0.27 + 1.1)

          // ── Bulk swell. ──
          const swellX = c.swellAmplitude *
            n1(x0 * c.swellScaleX, swellT + 2.0)
          const swellY = c.swellAmplitude *
            n1(y0base * c.swellScaleY, swellT)

          // ── Wave motion: smooth along-axis pull only. ──
          // No vertical lift, no ringing. The crest reads through node scale.
          //   • ahead of wave (dx>0):  pulled toward wave along -d direction
          //   • at crest (dx=0):       neutral position, max scale
          //   • behind (dx<0):         pushed past wave along +d direction
          const pull = -Math.tanh(dx / c.waveWidthLead) * envelope * c.waveAmplitudeX
          const orbitDx = pull * dirX
          const orbitDy = pull * dirY

          const scale = 1 + envelope * (c.nodeScaleAmp - 1)

          const idx = j * cols + i
          xs[idx] = x0 + dxIdle + orbitDx + swellX
          ys[idx] = y0base + dyIdle + orbitDy + swellY
          ss[idx] = scale
        }
      }

      // ── Grid lines: right + down neighbour. ──
      ctx.strokeStyle = c.gridColor
      ctx.lineWidth = c.lineWidth
      ctx.beginPath()
      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const idx = j * cols + i
          if (i < cols - 1) {
            const r = idx + 1
            ctx.moveTo(xs[idx], ys[idx])
            ctx.lineTo(xs[r], ys[r])
          }
          if (j < rows - 1) {
            const b = idx + cols
            ctx.moveTo(xs[idx], ys[idx])
            ctx.lineTo(xs[b], ys[b])
          }
        }
      }
      ctx.stroke()

      // ── Nodes. ──
      ctx.fillStyle = c.nodeColor
      for (let k2 = 0; k2 < xs.length; k2++) {
        const r = c.nodeSize * ss[k2]
        ctx.beginPath()
        ctx.arc(xs[k2], ys[k2], r, 0, TAU)
        ctx.fill()
      }

      if (!reduce) raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [config])

  return <canvas ref={ref} className={className} aria-hidden="true" />
}
