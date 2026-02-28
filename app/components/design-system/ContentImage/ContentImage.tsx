'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import Button from '../Button'
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
  /** When true, image spans full container width (breaks out of prose). */
  fullWidth?: boolean
  /** When true, clicking the image opens a full-size modal. */
  expandable?: boolean
  /** When true, omits block margin (e.g. when used inside ContentImageRow). */
  compact?: boolean
  className?: string
}

/**
 * Block component for images in long-form content (case studies, Lab, articles).
 * Supports prose width or full-width breakout, optional caption, and click-to-expand modal.
 */
export default function ContentImage({
  src,
  alt,
  caption,
  priority = false,
  aspectRatio = '16 / 10',
  fullWidth = false,
  expandable = false,
  compact = false,
  className,
}: ContentImageProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const [naturalSize, setNaturalSize] = useState<{ width: number; height: number } | null>(null)

  const handleImageLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget
    setNaturalSize({ width: img.naturalWidth, height: img.naturalHeight })
  }, [])

  useEffect(() => {
    setNaturalSize(null)
  }, [src])

  const openModal = useCallback(() => {
    if (expandable) setModalOpen(true)
  }, [expandable])

  const closeModal = useCallback(() => setModalOpen(false), [])

  useEffect(() => {
    if (!modalOpen) return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [modalOpen, closeModal])

  const rootClassName = [
    styles.root,
    fullWidth && styles.rootFullWidth,
    expandable && styles.expandable,
    compact && styles.compact,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      <div
        className={styles.imageWrapper}
        style={{
          aspectRatio: naturalSize
            ? `${naturalSize.width} / ${naturalSize.height}`
            : aspectRatio,
          ...(naturalSize && {
            maxWidth: naturalSize.width,
            maxHeight: naturalSize.height,
          }),
        } as React.CSSProperties}
        {...(expandable && {
          role: 'button',
          tabIndex: 0,
          onClick: openModal,
          onKeyDown: (e: React.KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              openModal()
            }
          },
          'aria-label': `View full size: ${alt}`,
        })}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={
            fullWidth
              ? '(max-width: 768px) 100vw, var(--max-width-container)'
              : '(max-width: 768px) 100vw, var(--max-width-prose)'
          }
          className={styles.image}
          priority={priority}
          onLoad={handleImageLoad}
        />
      </div>
      {caption != null && <figcaption className={styles.caption}>{caption}</figcaption>}
    </>
  )

  return (
    <>
      <figure className={rootClassName}>
        {fullWidth ? <div className={styles.inner}>{content}</div> : content}
      </figure>

      {expandable && modalOpen && (
        <div
          className={styles.backdrop}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="View image full size"
        >
          <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
            <Button
              type="button"
              variant="secondary"
              size="small"
              label={
                <span className="material-symbols-outlined" aria-hidden>
                  close
                </span>
              }
              aria-label="Close"
              className={styles.closeButton}
              onClick={(e) => {
                e.stopPropagation()
                closeModal()
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className={styles.modalImage}
              style={
                naturalSize
                  ? {
                      maxWidth: `min(95vw, ${naturalSize.width}px)`,
                      maxHeight: `min(85vh, ${naturalSize.height}px)`,
                    }
                  : undefined
              }
              onLoad={!naturalSize ? handleImageLoad : undefined}
            />
            <div className={styles.modalFooter}>
              {caption != null && caption.trim() !== '' && (
                <p className={styles.modalCaption}>{caption}</p>
              )}
              <p className={styles.closeHint}>Click outside or press Escape to close</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
