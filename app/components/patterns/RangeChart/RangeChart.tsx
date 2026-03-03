import styles from './RangeChart.module.css'

/** Meaning of each circle on the progression track */
export type IndicatorVariant = 'start' | 'growth' | 'ownership' | 'outside'

export interface RangeChartLevel {
  /** e.g. "LEVEL 1" */
  label: string
  /** e.g. "Directed Execution" */
  name: string
}

export interface RangeChartRole {
  /** Role title, e.g. "Product Designer" */
  title: string
  /** Short description under the title */
  description: string
  /** One indicator per level (same length as levels) */
  indicators: IndicatorVariant[]
}

export interface LegendItem {
  variant: IndicatorVariant
  label: string
}

export interface RangeChartProps {
  /** Overline/title, e.g. "Autonomy by Role" */
  title: string
  /** Intro paragraph below the title */
  intro: React.ReactNode
  /** Level column headers (e.g. LEVEL 1–5 and names) */
  levels: RangeChartLevel[]
  /** Role rows (title, description, track indicators) */
  roles: RangeChartRole[]
  /** Legend items explaining circle variants */
  legend: LegendItem[]
  className?: string
}

function LevelIndicator({ variant }: { variant: IndicatorVariant }) {
  return (
    <span
      className={`${styles.indicator} ${styles[`indicator_${variant}`]}`}
      aria-hidden
    />
  )
}

/** Segment of track between the two circles only (center of start → center of ownership) */
function getTrackSegment(indicators: IndicatorVariant[]) {
  const startIdx = indicators.findIndex((v) => v === 'start')
  const ownershipIdx = indicators.findIndex((v) => v === 'ownership')
  if (startIdx === -1 || ownershipIdx === -1 || startIdx >= ownershipIdx) return null
  const n = indicators.length
  return {
    left: ((startIdx + 0.5) / n) * 100,
    width: ((ownershipIdx - startIdx) / n) * 100,
  }
}

/**
 * Range chart matrix: title + intro on an anchored band, level headers,
 * role rows with progression tracks (circle indicators), and a legend.
 */
export default function RangeChart({
  title,
  intro,
  levels,
  roles,
  legend,
  className,
}: RangeChartProps) {
  return (
    <section
      className={[styles.chart, className].filter(Boolean).join(' ')}
    >
      <header className={styles.header}>
        <div className={styles.title}>{title}</div>
        <div className={styles.intro}>{intro}</div>
      </header>

      <div
        className={styles.matrix}
        role="grid"
        aria-label={title}
      >
        <div className={styles.levelsRow} role="row">
          <div className={styles.levelsSpacer} role="columnheader">
            <span className={styles.visuallyHidden}>Role</span>
          </div>
          {levels.map((level, i) => (
            <div key={i} className={styles.levelCell} role="columnheader">
              <span className={styles.levelLabel}>{level.label}</span>
              <span className={styles.levelName}>{level.name}</span>
            </div>
          ))}
        </div>

        <div className={styles.roles}>
          {roles.map((role, ri) => (
            <div
              key={ri}
              className={styles.roleRow}
              role="row"
              aria-label={`${role.title}: ${role.description}`}
            >
              <div className={styles.roleInfo} role="gridcell">
                <div className={styles.roleTitle}>{role.title}</div>
                <div className={styles.roleDescription}>{role.description}</div>
              </div>
              <div className={styles.track} role="presentation">
                <div className={styles.trackLine} aria-hidden />
                {(() => {
                  const segment = getTrackSegment(role.indicators)
                  return segment != null ? (
                    <div
                      className={styles.trackLineHighlight}
                      style={{ left: `${segment.left}%`, width: `${segment.width}%` }}
                      aria-hidden
                    />
                  ) : null
                })()}
                <div className={styles.indicators}>
                  {role.indicators.map((variant, vi) => (
                    <div key={vi} className={styles.indicatorSlot} role="gridcell">
                      <LevelIndicator variant={variant} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className={styles.legend}>
        {legend.map((item, i) => (
          <div key={i} className={styles.legendItem}>
            <LevelIndicator variant={item.variant} />
            <span className={styles.legendLabel}>{item.label}</span>
          </div>
        ))}
      </footer>
    </section>
  )
}
