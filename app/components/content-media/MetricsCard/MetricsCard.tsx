import styles from './MetricsCard.module.css'

export interface MetricItem {
  value: React.ReactNode
  description: React.ReactNode
}

export type MetricsCardProps =
  | ({ metrics: MetricItem[] } & { value?: never; description?: never })
  | ({ value: React.ReactNode; description: React.ReactNode } & { metrics?: never })

export interface MetricsCardBaseProps {
  className?: string
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
export default function MetricsCard(
  props: MetricsCardProps & MetricsCardBaseProps
) {
  const { className } = props

  const metrics = 'metrics' in props ? props.metrics : undefined
  if (metrics && metrics.length > 0) {
    return (
      <div className={[styles.card, styles.cardMulti, className].filter(Boolean).join(' ')}>
        <ul className={styles.metricsList}>
          {metrics.map((item, i) => (
            <li key={i} className={styles.metricItem}>
              <div className={styles.value}>{item.value}</div>
              <p className={styles.description}>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  const { value, description } = props
  return (
    <div className={[styles.card, className].filter(Boolean).join(' ')}>
      <div className={styles.value}>{value}</div>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
