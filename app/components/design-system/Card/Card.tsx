import Image from 'next/image'
import styles from './Card.module.css'

/**
 * Card Component
 *
 * Displays an image (full bleed to edges), subtitle, and optional heading and action.
 * Use for case studies, project previews, and content cards.
 *
 * @example
 * // Minimal: image + subtitle
 * <Card image={{ src: '/work.jpg', alt: 'Project' }} subtitle="2024 · Product" />
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
  /** Image shown full bleed at the top of the card */
  image: CardImageProps
  /** Text shown under the image (required) */
  subtitle: React.ReactNode
  /** Optional heading above or with the subtitle */
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
      <div className={styles.content}>
        {heading != null && <h3 className={styles.heading}>{heading}</h3>}
        <p className={styles.subtitle}>{subtitle}</p>
        {action != null && <div className={styles.action}>{action}</div>}
      </div>
    </>
  )

  const cardClassName = [styles.card, className].filter(Boolean).join(' ')

  if (href) {
    return (
      <a href={href} className={cardClassName}>
        {content}
      </a>
    )
  }

  return <article className={cardClassName}>{content}</article>
}
