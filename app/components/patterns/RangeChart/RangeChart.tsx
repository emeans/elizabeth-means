'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './RangeChart.module.css'

export type IndicatorVariant = 'start' | 'growth' | 'ownership' | 'outside'

export interface RangeChartLevel {
  label: string
  name: string
}

export interface RangeChartRole {
  title: string
  description: string
  indicators: IndicatorVariant[]
}

export interface LegendItem {
  variant: IndicatorVariant
  label: string
}

export interface RangeChartProps {
  title: string
  intro: React.ReactNode
  levels: RangeChartLevel[]
  roles: RangeChartRole[]
  legend: LegendItem[]
  className?: string
  /** Opt in to staggered row + line draw + dot pop animation on scroll entry */
  animate?: boolean
}

function LevelIndicator({ variant }: { variant: IndicatorVariant }) {
  return (
    <span
      className={`${styles.indicator} ${styles[`indicator_${variant}`]}`}
      aria-hidden
    />
  )
}

function getTrackSegment(indicators: IndicatorVariant[]) {
  const startIdx = indicators.findIndex((v) => v === 'start')
  const ownershipIdx = indicators.findIndex((v) => v === 'ownership')
  if (startIdx === -1 || ownershipIdx === -1 || startIdx >= ownershipIdx) return null
  const n = indicators.length
  return {
    left: ((startIdx + 0.5) / n) * 100,
    width: ((ownershipIdx - startIdx) / n) * 100,
  }
}

export default function RangeChart({
  title,
  intro,
  levels,
  roles,
  legend,
  className,
  animate,
}: RangeChartProps) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!animate) return
    const el = ref.current
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
      { threshold: 0, rootMargin: '0px 0px -200px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [animate])

  return (
    <section
      ref={ref}
      className={[
        styles.chart,
        animate ? styles.chartAnimate : undefined,
        animate && isVisible ? styles.chartVisible : undefined,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <header className={styles.header}>
        <div className={styles.title}>{title}</div>
        <div className={styles.intro}>{intro}</div>
      </header>

      <div className={styles.matrix} role="grid" aria-label={title}>
        <div className={styles.levelsRow} role="row">
          <div className={styles.levelsSpacer} role="columnheader">
            <span className={styles.visuallyHidden}>Role</span>
          </div>
          {levels.map((level, i) => (
            <div key={i} className={styles.levelCell} role="columnheader">
              <span className={styles.levelLabel}>{level.label}</span>
              <span className={styles.levelName}>{level.name}</span>
            </div>
          ))}
        </div>

        <div className={styles.roles}>
          {roles.map((role, ri) => (
            <div
              key={ri}
              className={styles.roleRow}
              role="row"
              aria-label={`${role.title}: ${role.description}`}
              // --i drives stagger delay for this row AND its children
              style={{ '--i': ri } as React.CSSProperties}
            >
              <div className={styles.roleInfo} role="gridcell">
                <div className={styles.roleTitle}>{role.title}</div>
                <div className={styles.roleDescription}>{role.description}</div>
              </div>
              <div className={styles.track} role="presentation">
                <div className={styles.trackLine} aria-hidden />
                {(() => {
                  const segment = getTrackSegment(role.indicators)
                  return segment != null ? (
                    <div
                      className={styles.trackLineHighlight}
                      style={{
                        left: `${segment.left}%`,
                        width: `${segment.width}%`,
                      }}
                      aria-hidden
                    />
                  ) : null
                })()}
                <div className={styles.indicators}>
                  {role.indicators.map((variant, vi) => (
                    <div key={vi} className={styles.indicatorSlot} role="gridcell">
                      <LevelIndicator variant={variant} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className={styles.legend}>
        {legend.map((item, i) => (
          <div key={i} className={styles.legendItem}>
            <LevelIndicator variant={item.variant} />
            <span className={styles.legendLabel}>{item.label}</span>
          </div>
        ))}
      </footer>
    </section>
  )
}