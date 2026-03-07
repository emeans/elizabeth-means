'use client'

import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import styles from './PullQuote.module.css'

export interface PullQuoteProps {
  /** The quoted text. Can be a string or ReactNode for inline links/citations. */
  quote: ReactNode
  /** Optional attribution (e.g. speaker name, role, or source). */
  attribution?: string
  className?: string
  /** Opt in to fade-in animation. */
  animate?: boolean
}

/**
 * Block component for pull quotes in long-form content (case studies, Lab, articles).
 * Renders a blockquote with optional attribution.
 */
export default function PullQuote({ quote, attribution, className, animate }: PullQuoteProps) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!animate) return
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        setIsVisible(true)
        observer.disconnect()
      },
      { threshold: 0, rootMargin: '0px 0px -100px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [animate])

  const rootClassName = [
    styles.root,
    animate ? styles.rootAnimate : undefined,
    animate && isVisible ? styles.rootVisible : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')
  return (
    <figure ref={ref} className={rootClassName}>
      <blockquote className={styles.quote}>{quote}</blockquote>
      {attribution != null && <figcaption className={styles.attribution}>{attribution}</figcaption>}
    </figure>
  )
}
