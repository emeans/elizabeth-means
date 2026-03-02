import styles from './Overline.module.css'


export interface OverlineProps {
  children: React.ReactNode
  className?: string
}

export default function Overline({
  children,
  className,
}: OverlineProps) {
  const rootClassName = [
    styles.overline,
    className,
  ]
    .filter(Boolean)
    .join(' ')
  return <span className={rootClassName}>{children}</span>
}
