import Image from 'next/image'
import Link from '@components/Link'
import styles from './Card.module.css'

/**
 * Card Component
 *
 * Displays an optional image (full bleed to edges), optional subtitle, and optional heading and action.
 * Use for case studies, project previews, and content cards. When image is omitted, renders a text-only card.
 *
 * @example
 * // Minimal: image + subtitle
 * <Card image={{ src: '/work.jpg', alt: 'Project' }} subtitle="2024 · Product" />
 *
 * // Text-only (e.g. lab index)
 * <Card heading="Design System" href="/lab/design-system" />
 *
 * // With heading and button
 * <Card
 *   image={{ src: '/work.jpg', alt: 'WIC' }}
 *   heading="WIC Product Case Study"
 *   subtitle="2024 · Product design"
 *   action={<Link href="/work/wic-product-case-study" variant="cta">View case study</Link>}
 * />
 */

export interface CardImageProps {
  src: string
  alt: string
  /** Optional: use when you need a specific aspect ratio (default 16/10) */
  priority?: boolean
}

export interface CardProps {
  /** Image shown full bleed at the top of the card (optional; omit for text-only cards) */
  image?: CardImageProps
  /** Text shown under the image or as secondary text */
  subtitle?: React.ReactNode
  /** Optional heading */
  heading?: React.ReactNode
  /** Optional button or link in the bottom right (e.g. <Button> or <Link variant="cta">) */
  action?: React.ReactNode
  className?: string
  /** Optional: wrap card in a link (entire card becomes clickable) */
  href?: string
}

export default function Card({
  image,
  subtitle,
  heading,
  action,
  className,
  href,
}: CardProps) {
  const content = (
    <>
      {image != null && (
        <div className={styles.imageWrapper}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            className={styles.image}
            priority={image.priority}
          />
        </div>
      )}
      <div className={styles.content}>
        {heading != null && <h3 className={styles.heading}>{heading}</h3>}
        {subtitle != null && <p className={styles.subtitle}>{subtitle}</p>}
        {action != null && <div className={styles.action}>{action}</div>}
      </div>
    </>
  )

  const cardClassName = [styles.card, className].filter(Boolean).join(' ')

  if (href) {
    const isExternal =
      href.startsWith('http://') || href.startsWith('https://')
    return (
      <Link href={href} className={cardClassName} external={isExternal}>
        {content}
      </Link>
    )
  }

  return <article className={cardClassName}>{content}</article>
}
