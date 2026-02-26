import type { Metadata } from 'next'
import PageHeader from '@/components/design-system/PageHeader'

export const metadata: Metadata = {
  title: 'Lab | Elizabeth Means',
  description: 'Experiments and side projects.',
}

export default function LabPage() {
  return (
    <section className="section">
      <div className="container">
        <PageHeader
          variant="standard"
          title="Lab"
          description="The lab is living work — my workshop, not my gallery. Some things here are formed, some half-formed, all of it built in public and actively growing."
        />
      </div>
    </section>
  )
}
