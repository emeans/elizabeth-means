import styles from './Overline.module.css'

/**
 * Small non-interactive label displayed above a headline (e.g. section name).
 * Left-aligned, primary text. Background color depends on variant (e.g. forge for work, patina for lab).
 *
 * @example
 * <Overline variant="forge">work</Overline>
 * <Overline variant="patina">lab</Overline>
 */

export type OverlineVariant = 'forge' | 'patina'

export interface OverlineProps {
  children: React.ReactNode
  /** Background color: forge (work), patina (lab) */
  variant?: OverlineVariant
  className?: string
}

export default function Overline({
  children,
  variant = 'forge',
  className,
}: OverlineProps) {
  const rootClassName = [
    styles.overline,
    styles[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ')
  return <span className={rootClassName}>{children}</span>
}
