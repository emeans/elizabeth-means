'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Timeline.module.css'

export interface TimelineItem {
  /** Short label or date (e.g. "Apr 2024", "Q1") — shown smaller above the title */
  value: React.ReactNode
  /** Main title for the milestone */
  title: React.ReactNode
  /** Optional longer description */
  description?: React.ReactNode
}

export interface TimelineProps {
  items: TimelineItem[]
  className?: string
  /** Opt in to count-up animation. Value must be a string like "40+", "100%", or "14.9" */
  animate?: boolean
}

/**
 * Timeline built on the same card base as MetricsCard. Shows a vertical track with
 * tick marks; each item has a small value (date/label), a title, and optional description.
 *
 * @example
 * <Timeline items={[
 *   { value: 'Apr 2024', title: 'USDA announced WIC Final Food Rule', description: 'Chicago conference.' },
 *   { value: 'Q2 2024', title: 'Pilot with first state' },
 * ]} />
 */
export default function Timeline({ items, className, animate }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const firstItemRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    if (!animate) return
    const el = firstItemRef.current
    if (!el) return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
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
      { threshold: 0.15, rootMargin: '0px 0px -150px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [animate])

  if (items.length === 0) return null

  return (
    <div ref={containerRef} className={[styles.timeline, className].filter(Boolean).join(' ')}>
      <div className={styles.track} aria-hidden />
      <ul className={styles.list}>
        {items.map((item, i) => (
          <li
          key={i}
          ref={i === 0 ? firstItemRef : undefined}
          className={[
            styles.item,
            animate ? styles.itemAnimate : undefined,
            animate && isVisible ? styles.itemVisible : undefined,
          ]
            .filter(Boolean)
            .join(' ')}
          style={animate ? ({ '--i': i } as React.CSSProperties) : undefined}
        >
            <span className={styles.tick} aria-hidden />
            <div className={styles.content}>
              <div className={styles.value}>{item.value}</div>
              <div className={`${styles.title} text-body text-bold`}>{item.title}</div>
              {item.description != null && (
                <p className={styles.description}>{item.description}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
