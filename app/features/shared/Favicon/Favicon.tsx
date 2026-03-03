'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Sets the document favicon to match the current app theme.
 * Uses SVG favicons (favicon-light.svg = --action-primary-default in light mode,
 * favicon-dark.svg = --action-primary-default in dark mode).
 * We own the single icon link (no default in layout metadata) so nothing overwrites it.
 */
export default function Favicon({ theme }: { theme: 'light' | 'dark' }) {
  const pathname = usePathname()
  const linkRef = useRef<HTMLLinkElement | null>(null)

  useEffect(() => {
    const href = theme === 'dark' ? '/favicon-dark.svg' : '/favicon-light.svg'
    const url = `${href}?t=${Date.now()}`

    let link = linkRef.current ?? document.querySelector<HTMLLinkElement>('link[rel="icon"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'icon'
      link.type = 'image/svg+xml'
      document.head.appendChild(link)
    }
    linkRef.current = link
    link.setAttribute('href', url)
  }, [theme, pathname])

  return null
}
