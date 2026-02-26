import type { ReactNode } from 'react'
import styles from './PullQuote.module.css'

export interface PullQuoteProps {
  /** The quoted text. Can be a string or ReactNode for inline links/citations. */
  quote: ReactNode
  /** Optional attribution (e.g. speaker name, role, or source). */
  attribution?: string
  className?: string
}

/**
 * Block component for pull quotes in long-form content (case studies, Lab, articles).
 * Renders a blockquote with optional attribution.
 */
export default function PullQuote({ quote, attribution, className }: PullQuoteProps) {
  const rootClassName = [styles.root, className].filter(Boolean).join(' ')
  return (
    <figure className={rootClassName}>
      <blockquote className={styles.quote}>{quote}</blockquote>
      {attribution != null && <figcaption className={styles.attribution}>{attribution}</figcaption>}
    </figure>
  )
}
