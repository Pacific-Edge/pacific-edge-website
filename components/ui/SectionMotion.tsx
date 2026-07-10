"use client"

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion"
import { revealItem, viewportOnce } from "@/lib/motion"

type SectionMotionProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: React.ReactNode
  delay?: number
}

export default function SectionMotion({
  delay = 0,
  children,
  ...props
}: SectionMotionProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={props.className}>{children}</div>
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{
        hidden: revealItem.hidden,
        visible: {
          ...revealItem.visible,
          transition: { ...revealItem.visible.transition, delay },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
