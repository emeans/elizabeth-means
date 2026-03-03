import Tag from '@/components/primitives/Tag'
import styles from './FlowDiagram.module.css'

/** Section below the hairline: a title plus values shown as tags or plain text */
export interface FlowDiagramSection {
  /** Section label (e.g. "KEY OUTPUT(S)", "LED BY") */
  title: string
  /** Values to display */
  values: string[]
  /** Render values as pill-style tags or as plain text lines */
  displayAs: 'tags' | 'text'
}

export interface FlowDiagramItem {
  /** Short label (e.g. step number, phase name) — shown smaller above the title */
  value: React.ReactNode
  /** Main title for the step */
  title: React.ReactNode
  /** Optional longer description */
  description?: React.ReactNode
  /** Optional label on the arrow to the next step (what changes between this step and the next) */
  arrowLabel?: React.ReactNode
  /** Optional sections below a hairline: title + values as tags or text */
  sections?: FlowDiagramSection[]
}

export interface FlowDiagramProps {
  /** Optional title shown above the flow (e.g. overline style) */
  title?: React.ReactNode
  /** Optional intro/statement below the title */
  intro?: React.ReactNode
  items: FlowDiagramItem[]
  /** Vertical (stacked) or horizontal (carded row) */
  layout?: 'vertical' | 'horizontal'
  className?: string
}

/** Arrow between flow steps (vertical, points down), with optional annotation */
function FlowArrowVertical({ label }: { label?: React.ReactNode }) {
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

/** Same arrow as vertical flow, oriented for horizontal layout (points right on desktop, down when stacked) */
function FlowArrowHorizontal() {
  return (
    <div className={styles.arrowHorizontal} aria-hidden>
      <div className={styles.arrowGraphic}>
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
    </div>
  )
}

function FlowCardContent({
  item,
  showSections,
}: {
  item: FlowDiagramItem
  showSections: boolean
}) {
  const hasSections = showSections && item.sections != null && item.sections.length > 0
  return (
    <>
      <div className={styles.value}>{item.value}</div>
      <div className={`${styles.title} text-body text-bold`}>{item.title}</div>
      {item.description != null && (
        <p className={styles.description}>{item.description}</p>
      )}
      {hasSections && (
        <>
          <hr className={styles.hairline} />
          <div className={styles.sections}>
            {item.sections!.map((section, si) => (
              <div key={si} className={styles.section}>
                <div className={styles.sectionTitle}>{section.title}</div>
                {section.displayAs === 'tags' ? (
                  <div className={styles.tags}>
                    {section.values.map((v, vi) => (
                      <Tag key={vi} variant="secondary">
                        {v}
                      </Tag>
                    ))}
                  </div>
                ) : (
                  <div className={styles.sectionText}>
                    {section.values.map((v, vi) => (
                      <div key={vi}>{v}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </>
  )
}

/**
 * Flow diagram built on the same card base as Timeline. Shows a sequence of steps
 * with an arrow between each entry. Use layout="vertical" (default) for a stacked
 * flow, or layout="horizontal" for a carded row. Optional sections below a hairline
 * support title + values as tags or plain text.
 *
 * @example
 * <FlowDiagram items={[
 *   { value: 'Step 1', title: 'Discovery', description: 'Research and requirements.' },
 *   { value: 'Step 2', title: 'Design', description: 'Wireframes and prototypes.' },
 * ]} />
 *
 * @example Carded flow with sections
 * <FlowDiagram
 *   title="DESIGN PHILOSOPHY"
 *   intro="Poor information architecture can't be fixed with good visual design."
 *   layout="horizontal"
 *   items={[
 *     { value: 'PHASE 01', title: 'Discovery', description: '...',
 *       sections: [
 *         { title: 'KEY OUTPUT(S)', values: ['User Research Insights'], displayAs: 'tags' },
 *         { title: 'LED BY', values: ['Product Designer', 'UX Designer'], displayAs: 'text' },
 *       ] },
 *   ]}
 * />
 */
export default function FlowDiagram({
  title,
  intro,
  items,
  layout = 'vertical',
  className,
}: FlowDiagramProps) {
  if (items.length === 0) return null

  const isHorizontal = layout === 'horizontal'
  const showSections = isHorizontal || items.some((item) => item.sections?.length)

  return (
    <div
      className={[
        styles.flowDiagram,
        isHorizontal ? styles.flowDiagramHorizontal : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {title != null && (
        <div className={styles.flowTitleWrapper}>
          <div className={`${styles.flowTitle} text-lg`}>{title}</div>
          {intro != null && <div className={styles.flowIntro}>{intro}</div>}
        </div>
      )}
      {title == null && intro != null && (
        <div className={styles.flowIntro}>{intro}</div>
      )}
      <ul className={isHorizontal ? styles.listHorizontal : styles.list}>
        {items.map((item, i) => (
          <li key={i} className={isHorizontal ? styles.itemHorizontal : styles.item}>
            <div className={styles.content}>
              <FlowCardContent item={item} showSections={showSections} />
            </div>
            {i < items.length - 1 &&
              (isHorizontal ? (
                <FlowArrowHorizontal />
              ) : (
                <FlowArrowVertical label={item.arrowLabel} />
              ))}
          </li>
        ))}
      </ul>
    </div>
  )
}
