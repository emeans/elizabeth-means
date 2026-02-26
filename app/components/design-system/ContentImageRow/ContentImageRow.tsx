'use client'

import ContentImage from '@/components/design-system/ContentImage'
import type { ContentImageProps } from '@/components/design-system/ContentImage'
import styles from './ContentImageRow.module.css'

export type ContentImageRowItem = ContentImageProps

export interface ContentImageRowProps {
  /** Images to display in a row. On narrow viewports they stack. */
  items: ContentImageRowItem[]
  /** When true, row spans full container width (breaks out of prose). */
  fullWidth?: boolean
  /** Number of columns when viewport is wide enough (2 or 3). Default 2. */
  columns?: 2 | 3
  className?: string
}

/**
 * Renders multiple ContentImages in a row (grid). Use for galleries or side-by-side visuals.
 * Each item supports the same props as ContentImage (caption, expandable, aspectRatio, etc.).
 */
export default function ContentImageRow({
  items,
  fullWidth = false,
  columns = 2,
  className,
}: ContentImageRowProps) {
  const rootClassName = [
    styles.root,
    fullWidth && styles.rootFullWidth,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const gridClassName =
    columns === 3 ? `${styles.grid} ${styles.gridThree}` : `${styles.grid} ${styles.gridTwo}`

  const content = (
    <div className={gridClassName}>
      {items.map((item, index) => (
        <ContentImage key={index} {...item} compact />
      ))}
    </div>
  )

  return (
    <div className={rootClassName}>
      {fullWidth ? <div className={styles.inner}>{content}</div> : content}
    </div>
  )
}
