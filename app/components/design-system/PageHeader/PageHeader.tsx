import type { ReactNode } from 'react'
import Tag from '@/components/design-system/Tag'
import Overline from '@/components/design-system/Overline'
import type { OverlineVariant } from '@/components/design-system/Overline'
import styles from './PageHeader.module.css'

export type PageHeaderStandardProps = {
  variant: 'standard'
  title: string
  description: string
}

export type CaseStudyMetadataItem = {
  label: string
  value: string
}

export type PageHeaderImage = {
  src: string
  alt: string
}

export type PageHeaderCaseStudyProps = {
  variant: 'caseStudy'
  /** Optional image shown at the top of the header (e.g. hero or key visual) */
  image?: PageHeaderImage
  /** Optional label above the title (e.g. section name like "work") */
  overline?: string
  /** Overline background color: forge (work), patina (lab). Default forge. */
  overlineVariant?: OverlineVariant
  title: string
  subtitle?: string
  metadata: CaseStudyMetadataItem[]
  executiveSummary: ReactNode
}

export type PageHeaderProps = PageHeaderStandardProps | PageHeaderCaseStudyProps

export default function PageHeader(props: PageHeaderProps) {
  if (props.variant === 'standard') {
    return (
      <div className="section-content">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    )
  }

  const { image, overline, overlineVariant = 'forge', title, subtitle, metadata, executiveSummary } = props
  return (
    <>
      <header className={styles.banner}>
        <div className={styles.heading}>
          {overline != null && overline.trim() !== '' && (
            <Overline variant={overlineVariant}>{overline}</Overline>
          )}
          <h1 className='text-2xl'>{title}</h1>
          {subtitle != null && <p className="text-bold">{subtitle}</p>}
        </div>
        <div className={styles.metadataStrip}>
          <div className={`${styles.metadataStripInner} ${styles.metadataTags}`}>
            {metadata.map(({ label, value }) => (
              <Tag key={label} variant="secondary" label={label}>
                {value}
              </Tag>
            ))}
          </div>
        </div>
        {image != null && (
          <div className={styles.imageWrapper}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.src}
              alt={image.alt}
              className={styles.image}
            />
          </div>
        )}
      </header>
      <section className="section-content">
        <section>{executiveSummary}</section>
      </section>
    </>
  )
}
