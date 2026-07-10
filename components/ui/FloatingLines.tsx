"use client"

/* ─────────────────────────────────────────────────────────────────────────
   FLOATING LINES — WebGL animated gradient-flow lines (React Bits, adapted
   to TS + this repo's perf/a11y conventions — see LightPillar.tsx).
   Drop-in background: fill the background of a section, or box it inside
   a container. Renders three layered wave bands ("top" / "middle" /
   "bottom") of glowing lines that drift and optionally bend toward the
   pointer.
   ──────────────────────────────────────────────────────────────────────── */

import { useEffect, useRef, useState } from "react"
import {
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  Vector2,
  Vector3,
  WebGLRenderer,
} from "three"

export type FloatingLinesWave = "top" | "middle" | "bottom"
export type FloatingLinesQuality = "low" | "medium" | "high"

export interface WavePosition {
  x: number
  y: number
  rotate: number
}

export interface FloatingLinesProps {
  /** Hex colours (max 8) for the line gradient. Defaults to the brand electric-blue ramp. */
  linesGradient?: string[]
  enabledWaves?: FloatingLinesWave[]
  /** Number of lines per wave — single number for all waves, or one per enabled wave. */
  lineCount?: number | number[]
  /** Spacing between lines — single number for all waves, or one per enabled wave. */
  lineDistance?: number | number[]
  topWavePosition?: WavePosition
  middleWavePosition?: WavePosition
  bottomWavePosition?: WavePosition
  animationSpeed?: number
  interactive?: boolean
  bendRadius?: number
  bendStrength?: number
  mouseDamping?: number
  parallax?: boolean
  parallaxStrength?: number
  mixBlendMode?: React.CSSProperties["mixBlendMode"]
  className?: string
  /** Rendering quality tier — mainly controls device pixel ratio cap. */
  quality?: FloatingLinesQuality
  /** Pause the render loop while the container is scrolled off-screen. */
  pauseWhenOffscreen?: boolean
}

interface QualitySettings {
  pixelRatio: number
  precision: "lowp" | "mediump" | "highp"
}

const QUALITY_SETTINGS: Record<FloatingLinesQuality, QualitySettings> = {
  low: { pixelRatio: 0.75, precision: "mediump" },
  medium: { pixelRatio: 1, precision: "mediump" },
  high: { pixelRatio: 2, precision: "highp" },
}

/** Default line gradient — brand electric-blue ramp, dark → sky. */
export const FLOATING_LINES_GRADIENT = ["#0B3260", "#1054A8", "#1A6DCE", "#2D86D9", "#52A5EF"]

const vertexShader = `
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const fragmentShader = `
precision highp float;

uniform float iTime;
uniform vec3  iResolution;
uniform float animationSpeed;

uniform bool enableTop;
uniform bool enableMiddle;
uniform bool enableBottom;

uniform int topLineCount;
uniform int middleLineCount;
uniform int bottomLineCount;

uniform float topLineDistance;
uniform float middleLineDistance;
uniform float bottomLineDistance;

uniform vec3 topWavePosition;
uniform vec3 middleWavePosition;
uniform vec3 bottomWavePosition;

uniform vec2 iMouse;
uniform bool interactive;
uniform float bendRadius;
uniform float bendStrength;
uniform float bendInfluence;

uniform bool parallax;
uniform float parallaxStrength;
uniform vec2 parallaxOffset;

uniform vec3 lineGradient[8];
uniform int lineGradientCount;

const vec3 BLACK = vec3(0.0);
const vec3 PINK  = vec3(233.0, 71.0, 245.0) / 255.0;
const vec3 BLUE  = vec3(47.0,  75.0, 162.0) / 255.0;

mat2 rotate(float r) {
  return mat2(cos(r), sin(r), -sin(r), cos(r));
}

vec3 background_color(vec2 uv) {
  vec3 col = vec3(0.0);

  float y = sin(uv.x - 0.2) * 0.3 - 0.1;
  float m = uv.y - y;

  col += mix(BLUE, BLACK, smoothstep(0.0, 1.0, abs(m)));
  col += mix(PINK, BLACK, smoothstep(0.0, 1.0, abs(m - 0.8)));
  return col * 0.5;
}

vec3 getLineColor(float t, vec3 baseColor) {
  if (lineGradientCount <= 0) {
    return baseColor;
  }

  vec3 gradientColor;

  if (lineGradientCount == 1) {
    gradientColor = lineGradient[0];
  } else {
    float clampedT = clamp(t, 0.0, 0.9999);
    float scaled = clampedT * float(lineGradientCount - 1);
    int idx = int(floor(scaled));
    float f = fract(scaled);
    int idx2 = min(idx + 1, lineGradientCount - 1);

    vec3 c1 = lineGradient[idx];
    vec3 c2 = lineGradient[idx2];

    gradientColor = mix(c1, c2, f);
  }

  return gradientColor * 0.5;
}

float wave(vec2 uv, float offset, vec2 screenUv, vec2 mouseUv, bool shouldBend) {
  float time = iTime * animationSpeed;

  float x_offset   = offset;
  float x_movement = time * 0.1;
  float amp        = sin(offset + time * 0.2) * 0.3;
  float y          = sin(uv.x + x_offset + x_movement) * amp;

  if (shouldBend) {
    vec2 d = screenUv - mouseUv;
    float influence = exp(-dot(d, d) * bendRadius);
    float bendOffset = (mouseUv.y - screenUv.y) * influence * bendStrength * bendInfluence;
    y += bendOffset;
  }

  float m = uv.y - y;
  return 0.0175 / max(abs(m) + 0.01, 1e-3) + 0.01;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 baseUv = (2.0 * fragCoord - iResolution.xy) / iResolution.y;
  baseUv.y *= -1.0;

  if (parallax) {
    baseUv += parallaxOffset;
  }

  vec3 col = vec3(0.0);

  vec3 b = lineGradientCount > 0 ? vec3(0.0) : background_color(baseUv);

  vec2 mouseUv = vec2(0.0);
  if (interactive) {
    mouseUv = (2.0 * iMouse - iResolution.xy) / iResolution.y;
    mouseUv.y *= -1.0;
  }

  if (enableBottom) {
    for (int i = 0; i < bottomLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(bottomLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);

      float angle = bottomWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(
        ruv + vec2(bottomLineDistance * fi + bottomWavePosition.x, bottomWavePosition.y),
        1.5 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.2;
    }
  }

  if (enableMiddle) {
    for (int i = 0; i < middleLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(middleLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);

      float angle = middleWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(
        ruv + vec2(middleLineDistance * fi + middleWavePosition.x, middleWavePosition.y),
        2.0 + 0.15 * fi,
        baseUv,
        mouseUv,
        interactive
      );
    }
  }

  if (enableTop) {
    for (int i = 0; i < topLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(topLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);

      float angle = topWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      ruv.x *= -1.0;
      col += lineCol * wave(
        ruv + vec2(topLineDistance * fi + topWavePosition.x, topWavePosition.y),
        1.0 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.1;
    }
  }

  fragColor = vec4(col, 1.0);
}

void main() {
  vec4 color = vec4(0.0);
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor = color;
}
`

const MAX_GRADIENT_STOPS = 8

function hexToVec3(hex: string): Vector3 {
  let value = hex.trim()
  if (value.startsWith("#")) value = value.slice(1)

  let r = 255
  let g = 255
  let b = 255

  if (value.length === 3) {
    r = parseInt(value[0] + value[0], 16)
    g = parseInt(value[1] + value[1], 16)
    b = parseInt(value[2] + value[2], 16)
  } else if (value.length === 6) {
    r = parseInt(value.slice(0, 2), 16)
    g = parseInt(value.slice(2, 4), 16)
    b = parseInt(value.slice(4, 6), 16)
  }

  return new Vector3(r / 255, g / 255, b / 255)
}

function getPerWave(value: number | number[], waveType: FloatingLinesWave, enabledWaves: FloatingLinesWave[], fallback: number): number {
  if (typeof value === "number") return value
  if (!enabledWaves.includes(waveType)) return fallback
  const index = enabledWaves.indexOf(waveType)
  return value[index] ?? fallback
}

export default function FloatingLines({
  linesGradient = FLOATING_LINES_GRADIENT,
  enabledWaves = ["top", "middle", "bottom"],
  lineCount = [6],
  lineDistance = [5],
  topWavePosition,
  middleWavePosition,
  bottomWavePosition = { x: 2.0, y: -0.7, rotate: -1 },
  animationSpeed = 1,
  interactive = true,
  bendRadius = 5.0,
  bendStrength = -0.5,
  mouseDamping = 0.05,
  parallax = true,
  parallaxStrength = 0.2,
  mixBlendMode = "screen",
  className = "",
  quality = "medium",
  pauseWhenOffscreen = true,
}: FloatingLinesProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const runningRef = useRef(false)
  const rendererRef = useRef<WebGLRenderer | null>(null)
  const materialRef = useRef<ShaderMaterial | null>(null)
  const sceneRef = useRef<Scene | null>(null)
  const cameraRef = useRef<OrthographicCamera | null>(null)

  const targetMouseRef = useRef(new Vector2(-1000, -1000))
  const currentMouseRef = useRef(new Vector2(-1000, -1000))
  const targetInfluenceRef = useRef(0)
  const currentInfluenceRef = useRef(0)
  const targetParallaxRef = useRef(new Vector2(0, 0))
  const currentParallaxRef = useRef(new Vector2(0, 0))

  const [webGLSupported, setWebGLSupported] = useState(() => {
    if (typeof window === "undefined") return true
    const canvas = document.createElement("canvas")
    return Boolean(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
  })
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReducedMotion(mq.matches)
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container || !webGLSupported || reducedMotion) return

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    const isLowEndDevice = isMobile || (navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency <= 4)

    let effectiveQuality: FloatingLinesQuality = quality
    if (isLowEndDevice && quality === "high") effectiveQuality = "medium"
    if (isMobile && quality !== "low") effectiveQuality = "low"

    const effectiveInteractive = interactive && !isMobile
    const effectiveParallax = parallax && !isMobile
    const settings = QUALITY_SETTINGS[effectiveQuality]

    const topLineCount = enabledWaves.includes("top") ? getPerWave(lineCount, "top", enabledWaves, 6) : 0
    const middleLineCount = enabledWaves.includes("middle") ? getPerWave(lineCount, "middle", enabledWaves, 6) : 0
    const bottomLineCount = enabledWaves.includes("bottom") ? getPerWave(lineCount, "bottom", enabledWaves, 6) : 0

    const topLineDistance = enabledWaves.includes("top") ? getPerWave(lineDistance, "top", enabledWaves, 5) * 0.01 : 0.01
    const middleLineDistance = enabledWaves.includes("middle") ? getPerWave(lineDistance, "middle", enabledWaves, 5) * 0.01 : 0.01
    const bottomLineDistance = enabledWaves.includes("bottom") ? getPerWave(lineDistance, "bottom", enabledWaves, 5) * 0.01 : 0.01

    const width = container.clientWidth || 1
    const height = container.clientHeight || 1

    const scene = new Scene()
    sceneRef.current = scene
    const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1)
    cameraRef.current = camera

    let renderer: WebGLRenderer
    try {
      renderer = new WebGLRenderer({
        antialias: true,
        alpha: false,
        powerPreference: effectiveQuality === "high" ? "high-performance" : "low-power",
        precision: settings.precision,
      })
    } catch {
      queueMicrotask(() => setWebGLSupported(false))
      return
    }

    renderer.setPixelRatio(Math.min(settings.pixelRatio, window.devicePixelRatio || 1))
    renderer.domElement.style.width = "100%"
    renderer.domElement.style.height = "100%"
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new Vector3(1, 1, 1) },
      animationSpeed: { value: animationSpeed },

      enableTop: { value: enabledWaves.includes("top") },
      enableMiddle: { value: enabledWaves.includes("middle") },
      enableBottom: { value: enabledWaves.includes("bottom") },

      topLineCount: { value: topLineCount },
      middleLineCount: { value: middleLineCount },
      bottomLineCount: { value: bottomLineCount },

      topLineDistance: { value: topLineDistance },
      middleLineDistance: { value: middleLineDistance },
      bottomLineDistance: { value: bottomLineDistance },

      topWavePosition: {
        value: new Vector3(topWavePosition?.x ?? 10.0, topWavePosition?.y ?? 0.5, topWavePosition?.rotate ?? -0.4),
      },
      middleWavePosition: {
        value: new Vector3(
          middleWavePosition?.x ?? 5.0,
          middleWavePosition?.y ?? 0.0,
          middleWavePosition?.rotate ?? 0.2
        ),
      },
      bottomWavePosition: {
        value: new Vector3(
          bottomWavePosition?.x ?? 2.0,
          bottomWavePosition?.y ?? -0.7,
          bottomWavePosition?.rotate ?? 0.4
        ),
      },

      iMouse: { value: new Vector2(-1000, -1000) },
      interactive: { value: effectiveInteractive },
      bendRadius: { value: bendRadius },
      bendStrength: { value: bendStrength },
      bendInfluence: { value: 0 },

      parallax: { value: effectiveParallax },
      parallaxStrength: { value: parallaxStrength },
      parallaxOffset: { value: new Vector2(0, 0) },

      lineGradient: {
        value: Array.from({ length: MAX_GRADIENT_STOPS }, () => new Vector3(1, 1, 1)),
      },
      lineGradientCount: { value: 0 },
    }

    if (linesGradient.length > 0) {
      const stops = linesGradient.slice(0, MAX_GRADIENT_STOPS)
      uniforms.lineGradientCount.value = stops.length
      stops.forEach((hex, i) => {
        const color = hexToVec3(hex)
        uniforms.lineGradient.value[i].set(color.x, color.y, color.z)
      })
    }

    const material = new ShaderMaterial({ uniforms, vertexShader, fragmentShader })
    materialRef.current = material

    const geometry = new PlaneGeometry(2, 2)
    const mesh = new Mesh(geometry, material)
    scene.add(mesh)

    renderer.setSize(width, height, false)
    uniforms.iResolution.value.set(renderer.domElement.width, renderer.domElement.height, 1)

    let mouseMoveTimeout: number | null = null
    const handlePointerMove = (event: PointerEvent) => {
      if (!effectiveInteractive) return
      if (mouseMoveTimeout) return

      mouseMoveTimeout = window.setTimeout(() => {
        mouseMoveTimeout = null
      }, 16)

      const rect = renderer.domElement.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      const dpr = renderer.getPixelRatio()

      targetMouseRef.current.set(x * dpr, (rect.height - y) * dpr)
      targetInfluenceRef.current = 1.0

      if (effectiveParallax) {
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const offsetX = (x - centerX) / rect.width
        const offsetY = -(y - centerY) / rect.height
        targetParallaxRef.current.set(offsetX * parallaxStrength, offsetY * parallaxStrength)
      }
    }

    const handlePointerLeave = () => {
      targetInfluenceRef.current = 0.0
    }

    if (effectiveInteractive) {
      renderer.domElement.addEventListener("pointermove", handlePointerMove)
      renderer.domElement.addEventListener("pointerleave", handlePointerLeave)
    }

    const startTime = performance.now()
    const targetFPS = effectiveQuality === "low" ? 30 : 60
    const frameTime = 1000 / targetFPS
    let lastTime = performance.now()

    const stopLoop = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = null
      runningRef.current = false
    }

    const animate = (currentTime: number) => {
      if (!materialRef.current || !rendererRef.current || !sceneRef.current || !cameraRef.current) return

      const deltaTime = currentTime - lastTime
      if (deltaTime >= frameTime) {
        uniforms.iTime.value = (currentTime - startTime) / 1000

        if (effectiveInteractive) {
          currentMouseRef.current.lerp(targetMouseRef.current, mouseDamping)
          uniforms.iMouse.value.copy(currentMouseRef.current)
          currentInfluenceRef.current += (targetInfluenceRef.current - currentInfluenceRef.current) * mouseDamping
          uniforms.bendInfluence.value = currentInfluenceRef.current
        }

        if (effectiveParallax) {
          currentParallaxRef.current.lerp(targetParallaxRef.current, mouseDamping)
          uniforms.parallaxOffset.value.copy(currentParallaxRef.current)
        }

        rendererRef.current.render(sceneRef.current, cameraRef.current)
        lastTime = currentTime - (deltaTime % frameTime)
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    const startLoop = () => {
      if (runningRef.current) return
      runningRef.current = true
      lastTime = performance.now()
      rafRef.current = requestAnimationFrame(animate)
    }

    startLoop()

    let observer: IntersectionObserver | null = null
    if (pauseWhenOffscreen) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) startLoop()
          else stopLoop()
        },
        { threshold: 0.01 }
      )
      observer.observe(container)
    }

    let resizeTimeout: number | null = null
    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout)
      resizeTimeout = window.setTimeout(() => {
        if (!rendererRef.current || !containerRef.current) return
        const newWidth = containerRef.current.clientWidth
        const newHeight = containerRef.current.clientHeight
        rendererRef.current.setSize(newWidth, newHeight, false)
        uniforms.iResolution.value.set(rendererRef.current.domElement.width, rendererRef.current.domElement.height, 1)
      }, 150)
    }

    window.addEventListener("resize", handleResize, { passive: true })

    return () => {
      observer?.disconnect()
      window.removeEventListener("resize", handleResize)
      if (effectiveInteractive) {
        renderer.domElement.removeEventListener("pointermove", handlePointerMove)
        renderer.domElement.removeEventListener("pointerleave", handlePointerLeave)
      }

      stopLoop()

      geometry.dispose()
      material.dispose()
      renderer.dispose()
      renderer.forceContextLoss()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }

      rendererRef.current = null
      materialRef.current = null
      sceneRef.current = null
      cameraRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [webGLSupported, reducedMotion, quality, pauseWhenOffscreen])

  if (!webGLSupported || reducedMotion) {
    const [first, last] = [linesGradient[0], linesGradient[linesGradient.length - 1]]
    return (
      <div
        className={`w-full h-full absolute inset-0 ${className}`}
        style={{
          mixBlendMode,
          background: `radial-gradient(ellipse at 50% 45%, ${last ?? "#52A5EF"}33 0%, ${first ?? "#0B3260"}22 35%, transparent 70%)`,
        }}
        aria-hidden="true"
      />
    )
  }

  return (
    <div ref={containerRef} className={`w-full h-full absolute inset-0 overflow-hidden ${className}`} style={{ mixBlendMode }} />
  )
}
