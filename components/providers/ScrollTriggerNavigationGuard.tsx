"use client"

import { useEffect, useLayoutEffect } from "react"
import { usePathname } from "next/navigation"
import { ScrollTrigger } from "gsap/ScrollTrigger"

function killScrollTriggers() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill(true))
}

function isInternalNavigation(anchor: HTMLAnchorElement) {
  if (!anchor.href) return false
  if (anchor.target && anchor.target !== "_self") return false
  if (anchor.hasAttribute("download")) return false

  try {
    const url = new URL(anchor.href, window.location.href)
    return (
      url.origin === window.location.origin &&
      url.pathname !== window.location.pathname
    )
  } catch {
    return false
  }
}

/**
 * GSAP ScrollTrigger pinning reparents DOM nodes outside React's tree.
 * On client-side route changes, React unmounts before effect cleanups run,
 * which triggers removeChild errors and can surface as a failed navigation.
 * Kill all triggers in the capture phase, before Next.js handles the click.
 */
export default function ScrollTriggerNavigationGuard() {
  const pathname = usePathname()

  useLayoutEffect(() => {
    killScrollTriggers()
    ScrollTrigger.refresh()
  }, [pathname])

  useEffect(() => {
    const onClickCapture = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const anchor = (event.target as Element | null)?.closest("a")
      if (!(anchor instanceof HTMLAnchorElement)) return
      if (!isInternalNavigation(anchor)) return

      killScrollTriggers()
    }

    document.addEventListener("click", onClickCapture, true)
    return () => document.removeEventListener("click", onClickCapture, true)
  }, [])

  return null
}
