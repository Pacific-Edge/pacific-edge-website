"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { EASE_OUT } from "@/lib/motion"

/* Thin midnight overlay that covers the initial paint until fonts settle.
   Scroll locking is owned entirely by the Hero component — this overlay
   is visual only and must not touch document.body/html overflow. */
export default function Preloader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const release = () => setVisible(false)

    // Hard cap — never hold longer than 1.5 s
    const cap = setTimeout(release, 1500)

    if (document.readyState === "complete") {
      // Fonts need one paint tick — tiny delay keeps the overlay from
      // blinking away before a single frame renders.
      setTimeout(release, 80)
    } else {
      window.addEventListener("load", () => setTimeout(release, 80), { once: true })
    }

    return () => clearTimeout(cap)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] pointer-events-none"
          style={{ background: "var(--color-midnight-900)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
          aria-hidden="true"
        />
      )}
    </AnimatePresence>
  )
}
