'use client'

import { useRef } from 'react'
import { useCountUp } from './useCountUp'
import styles from './MetricsCard.module.css'

export interface MetricItem {
  value: React.ReactNode
  description: React.ReactNode
  /** Opt in to count-up animation. Value must be a string like "40+", "100%", or "14.9" */
  animate?: boolean
}

export type MetricsCardProps =
  | ({ metrics: MetricItem[] } & { value?: never; description?: never; animate?: never })
  | ({ value: React.ReactNode; description: React.ReactNode; animate?: boolean } & {
      metrics?: never
    })

export interface MetricsCardBaseProps {
  className?: string
}

function parseAnimatableValue(value: React.ReactNode): {
  numeric: number
  suffix: string
  decimals: number
  prefix: string
} | null {
  if (typeof value !== 'string' && typeof value !== 'number') return null
  const str = String(value).trim()
  // Capture optional leading non-numeric prefix (e.g. "$"), then number, then suffix
  const match = str.match(/^([^\d]*)([\d.]+)(.*)$/)
  if (!match) return null
  const numeric = parseFloat(match[2])
  if (isNaN(numeric)) return null
  const decimals = (match[2].split('.')[1] ?? '').length
  return { prefix: match[1] ?? '', numeric, suffix: match[3] ?? '', decimals }
}

/** Renders a single metric value, animating if requested */
function MetricValue({
  value,
  animate,
  className,
}: {
  value: React.ReactNode
  animate?: boolean
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const parsed = animate ? parseAnimatableValue(value) : null
  const count = useCountUp(
    {
      target: parsed?.numeric ?? 0,
      decimals: parsed?.decimals ?? 0,
    },
    ref,
  )

  return (
    <div className={className} ref={ref}>
      {parsed ? `${parsed.prefix}${count}${parsed.suffix}` : value}
    </div>
  )
}

/**
 * Card for displaying one or more metrics (large number + description).
 * Single metric: pass value and description. Multiple: pass metrics array;
 * they are shown in a row on desktop and a column on small screens, with dividers between.
 *
 * @example
 * <MetricsCard value="5" description="national conferences" />
 * <MetricsCard metrics={[
 *   { value: '$14.9', description: 'million federal grant…' },
 *   { value: '0', description: 'team attrition over two years' },
 * ]} />
 */
export default function MetricsCard(props: MetricsCardProps & MetricsCardBaseProps) {
  const { className } = props

  const metrics = 'metrics' in props ? props.metrics : undefined
  if (metrics && metrics.length > 0) {
    return (
      <div className={[styles.card, styles.cardMulti, className].filter(Boolean).join(' ')}>
        <ul className={styles.metricsList}>
          {metrics.map((item, i) => (
            <li key={i} className={styles.metricItem}>
              <MetricValue value={item.value} animate={item.animate} className={styles.value} />
              <p className={styles.description}>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  const { value, description, animate } = props
  return (
    <div className={[styles.card, className].filter(Boolean).join(' ')}>
      <MetricValue value={value} animate={animate} className={styles.value} />
      <p className={styles.description}>{description}</p>
    </div>
  )
}
