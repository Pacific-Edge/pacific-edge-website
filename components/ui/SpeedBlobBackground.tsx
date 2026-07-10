"use client"

import { motion, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"

/** Soft white blobs that drift across a blue bento card — shared by Why Us + pricing. */
export default function SpeedBlobBackground({ className }: { className?: string }) {
  const reduce = useReducedMotion()

  const blobs = [
    {
      className: "left-[-18%] top-[-22%] h-[70%] w-[58%]",
      animate: { x: [0, 28, -12, 0], y: [0, 18, -10, 0], scale: [1, 1.12, 0.94, 1] },
      duration: 14,
      delay: 0,
      opacity: 0.42,
    },
    {
      className: "right-[-20%] top-[8%] h-[62%] w-[52%]",
      animate: { x: [0, -22, 16, 0], y: [0, -14, 22, 0], scale: [1, 0.9, 1.14, 1] },
      duration: 17,
      delay: 1.2,
      opacity: 0.34,
    },
    {
      className: "bottom-[-28%] left-[12%] h-[58%] w-[64%]",
      animate: { x: [0, 18, -20, 0], y: [0, -22, 12, 0], scale: [1, 1.08, 0.92, 1] },
      duration: 16,
      delay: 0.6,
      opacity: 0.28,
    },
    {
      className: "right-[8%] bottom-[12%] h-[36%] w-[32%]",
      animate: { x: [0, -14, 10, 0], y: [0, 16, -8, 0], scale: [1, 1.18, 0.88, 1] },
      duration: 12,
      delay: 2,
      opacity: 0.22,
    },
  ]

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 z-0 overflow-hidden", className)}
    >
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={cn("absolute rounded-[45%_55%_50%_50%/55%_45%_55%_45%] blur-3xl", blob.className)}
          style={{
            background:
              "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.45) 42%, transparent 72%)",
            opacity: blob.opacity,
          }}
          animate={reduce ? undefined : blob.animate}
          transition={
            reduce
              ? undefined
              : {
                  duration: blob.duration,
                  delay: blob.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />
      ))}
    </div>
  )
}
