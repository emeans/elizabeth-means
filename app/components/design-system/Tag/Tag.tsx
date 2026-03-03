import styles from './Tag.module.css'

/**
 * Tag component for metadata and labels.
 * Renders as a pill-shaped badge. Use for categories, status, tech stack, etc.
 *
 * @example
 * <Tag variant="primary">Case study</Tag>
 * <Tag variant="secondary">2024</Tag>
 * <Tag variant="success">Published</Tag>
 */

export interface TagProps {
  /** Tag value (main content, emphasized) */
  children: React.ReactNode
  /** Optional label shown before value, de-emphasized (e.g. "Role", "Timeline") */
  label?: string
  /** Visual variant (maps to theme colors) */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'muted'
  className?: string
}

export default function Tag({
  children,
  label,
  variant = 'secondary',
  className,
}: TagProps) {
  const rootClassName = [styles.tag, styles[variant], className]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={rootClassName}>
      {label != null && <span className={styles.label}>{label}:</span>}
      <span className={label != null ? styles.value : undefined}>{children}</span>
    </span>
  )
}
