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
export default function Timeline({ items, className }: TimelineProps) {
  if (items.length === 0) return null

  return (
    <div className={[styles.timeline, className].filter(Boolean).join(' ')}>
      <div className={styles.track} aria-hidden />
      <ul className={styles.list}>
        {items.map((item, i) => (
          <li key={i} className={styles.item}>
            <span className={styles.tick} aria-hidden />
            <div className={styles.content}>
              <div className={styles.value}>{item.value}</div>
              <h3 className={styles.title}>{item.title}</h3>
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
