'use client'

import { useId } from 'react'
import styles from './NoiseTexture.module.css'

type NoiseTextureProps = {
  className?: string
  /** Opacity of the noise layer (0–1). Default 1. */
  opacity?: number
  /** Use as an overlay that doesn't affect layout (absolute, pointer-events: none). Default true. */
  overlay?: boolean
  /** Show a pale dot grid (dot paper style). Default true. */
  dots?: boolean
  /** Dot grid spacing in pixels. Default 20. */
  dotSpacing?: number
  /** Dot radius in pixels. Default 0.75. */
  dotRadius?: number
}

/**
 * SVG-based noise texture with optional dot grid (dot paper).
 * Uses React useId() so filter/pattern IDs are unique and safe for SSR/multiple instances.
 */
export default function NoiseTexture({
  className,
  opacity = 1,
  overlay = true,
  dots = true,
  dotSpacing = 20,
  dotRadius = 0.75,
}: NoiseTextureProps) {
  const filterId = useId().replace(/:/g, '-')
  const patternId = useId().replace(/:/g, '-')

  const svgClass = `${styles.root} ${overlay ? styles.overlay : ''} ${className ?? ''}`.trim()

  return (
    <>
      {/* Noise layer: inverted in dark mode so noise is dark on dark backgrounds */}
      <svg
        className={`${svgClass} ${styles.noiseLayer}`}
        width="100%"
        height="100%"
        aria-hidden
      >
        <defs>
          <filter id={filterId} x="0" y="0" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.025"
              numOctaves={5}
              result="noise"
            />
            <feDiffuseLighting
              in="noise"
              lightingColor="white"
              surfaceScale={2}
            >
              <feDistantLight azimuth={45} elevation={70} />
            </feDiffuseLighting>
          </filter>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          filter={`url(#${filterId})`}
          fill="none"
          style={{ opacity }}
        />
      </svg>
      {/* Dot layer: theme-aware via --text-muted, not inverted */}
      {dots && (
        <svg
          className={svgClass}
          width="100%"
          height="100%"
          aria-hidden
        >
          <defs>
            <pattern
              id={patternId}
              width={dotSpacing}
              height={dotSpacing}
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx={dotSpacing / 2}
                cy={dotSpacing / 2}
                r={dotRadius}
                className={styles.dot}
              />
            </pattern>
          </defs>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill={`url(#${patternId})`}
          />
        </svg>
      )}
    </>
  )
}
