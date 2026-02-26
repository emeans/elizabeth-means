import Image from 'next/image'
import styles from './ContentImage.module.css'

export interface ContentImageProps {
  src: string
  alt: string
  /** Optional caption displayed below the image. */
  caption?: string
  /** Optional: use when the image is above the fold or critical. */
  priority?: boolean
  /** Optional: aspect ratio (default 16/10). Use e.g. "4/3" or "1" for square. */
  aspectRatio?: string
  className?: string
}

/**
 * Block component for images in long-form content (case studies, Lab, articles).
 * Constrained to prose width with optional caption.
 */
export default function ContentImage({
  src,
  alt,
  caption,
  priority = false,
  aspectRatio = '16 / 10',
  className,
}: ContentImageProps) {
  const rootClassName = [styles.root, className].filter(Boolean).join(' ')
  return (
    <figure className={rootClassName}>
      <div className={styles.imageWrapper} style={{ aspectRatio } as React.CSSProperties}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, var(--max-width-prose)"
          className={styles.image}
          priority={priority}
        />
      </div>
      {caption != null && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  )
}
