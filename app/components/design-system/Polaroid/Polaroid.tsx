'use client'

import Image from 'next/image'
import styles from './Polaroid.module.css'

export interface PolaroidImageProps {
  src: string
  alt: string
  /** Optional: priority for above-the-fold images */
  priority?: boolean
}

export interface PolaroidProps {
  /** Image to show in the frame */
  image: PolaroidImageProps
  /** Rotation in degrees (e.g. -5 for slight left tilt). Default 0. */
  angle?: number
  /** When true, positions the polaroid so it can overlay other content (position: absolute, z-index). Use with a positioned parent or pass style for top/left. */
  overlay?: boolean
  /** Optional caption text in the white area below the photo. */
  caption?: React.ReactNode
  /** Optional z-index when overlay is true. Default 10. */
  zIndex?: number
  /** Width of the photo window in pixels (frame is slightly larger). Default 280. */
  width?: number
  className?: string
  style?: React.CSSProperties
}

/**
 * Polaroid-style photo frame. Use as a drop-in for images with optional tilt and overlay.
 *
 * @example
 * <Polaroid image={{ src: '/photo.jpg', alt: 'Me' }} angle={-4} overlay />
 * <Polaroid image={{ src: '/photo.jpg', alt: 'Me' }} angle={3} caption="Summer 2024" style={{ top: 20, right: 40 }} />
 */
export default function Polaroid({
  image,
  angle = 0,
  overlay = false,
  caption,
  zIndex = 10,
  width = 280,
  className,
  style,
}: PolaroidProps) {
  const combinedStyle: React.CSSProperties = {
    ...style,
    transform: `rotate(${angle}deg)`,
    ...(overlay ? { position: 'absolute' as const, zIndex } : {}),
  }

  return (
    <figure
      className={`${styles.polaroid} ${overlay ? styles.overlay : ''} ${className ?? ''}`.trim()}
      style={combinedStyle}
    >
      <div className={styles.frame}>
        <div className={styles.imageWrapper} style={{ width, height: width }}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 400px) 280px, 320px"
            className={styles.image}
            priority={image.priority}
          />
        </div>
        {caption != null && <figcaption className={styles.caption}>{caption}</figcaption>}
      </div>
    </figure>
  )
}
