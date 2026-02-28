import styles from './FlowDiagram.module.css'

export interface FlowDiagramItem {
  /** Short label (e.g. step number, phase name) — shown smaller above the title */
  value: React.ReactNode
  /** Main title for the step */
  title: React.ReactNode
  /** Optional longer description */
  description?: React.ReactNode
  /** Optional label on the arrow to the next step (what changes between this step and the next) */
  arrowLabel?: React.ReactNode
}

export interface FlowDiagramProps {
  /** Optional title shown above the flow */
  title?: React.ReactNode
  items: FlowDiagramItem[]
  className?: string
}

/** Arrow between flow steps (vertical, points down), with optional annotation */
function FlowArrow({ label }: { label?: React.ReactNode }) {
  return (
    <div className={styles.arrow}>
      <div className={styles.arrowGraphic} aria-hidden>
        <svg
          width="24"
          height="28"
          viewBox="0 0 24 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="presentation"
        >
          <path
            d="M12 2v20M6 18l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {label != null && <div className={styles.arrowLabel}>{label}</div>}
    </div>
  )
}

/**
 * Flow diagram built on the same card base as Timeline. Shows a vertical sequence
 * of steps with an arrow from each entry pointing to the next (no time ticks).
 *
 * @example
 * <FlowDiagram items={[
 *   { value: 'Step 1', title: 'Discovery', description: 'Research and requirements.' },
 *   { value: 'Step 2', title: 'Design', description: 'Wireframes and prototypes.' },
 * ]} />
 */
export default function FlowDiagram({ title, items, className }: FlowDiagramProps) {
  if (items.length === 0) return null

  return (
    <div className={[styles.flowDiagram, className].filter(Boolean).join(' ')}>
      {title != null && <div className={`${styles.flowTitle} text-lg`}>{title}</div>}
      <ul className={styles.list}>
        {items.map((item, i) => (
          <li key={i} className={styles.item}>
            <div className={styles.content}>
              <div className={styles.value}>{item.value}</div>
              <div className={`${styles.title} text-body text-bold`}>{item.title}</div>
              {item.description != null && (
                <p className={styles.description}>{item.description}</p>
              )}
            </div>
            {i < items.length - 1 && <FlowArrow label={item.arrowLabel} />}
          </li>
        ))}
      </ul>
    </div>
  )
}
