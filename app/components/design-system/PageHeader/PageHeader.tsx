import type { ReactNode } from 'react'

export type PageHeaderStandardProps = {
  variant: 'standard'
  title: string
  description: string
}

export type CaseStudyMetadataItem = {
  label: string
  value: string
}

export type PageHeaderCaseStudyProps = {
  variant: 'caseStudy'
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

  const { title, subtitle, metadata, executiveSummary } = props
  return (
    <div className="section-content">
      <h3>{title}</h3>
      {subtitle != null && <p className="text-bold">{subtitle}</p>}
      <hr className="section-divider" />
      {metadata.map(({ label, value }) => (
        <div key={label} className="metadata-row">
          <div className="metadata-column">
            <p className="metadata-label">{label}</p>
          </div>
          <div className="metadata-column">
            <p className="metadata-value">{value}</p>
          </div>
        </div>
      ))}
      <hr className="section-divider" />
      <section className="section-content">
        <section>{executiveSummary}</section>
      </section>
    </div>
  )
}
