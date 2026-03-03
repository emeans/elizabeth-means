import type { Metadata } from 'next'
import PageHeader from '@components/layout-structure/PageHeader'
import Card from '@components/content-media/Card'
import NoiseTexture from '@components/primitives/NoiseTexture'
import { labEntries } from '@features/lab/labEntries'

export const metadata: Metadata = {
  title: 'Lab | Elizabeth Means',
  description: 'Experiments and side projects.',
}

export default function LabPage() {
  return (
    <section className="section">
      <NoiseTexture opacity={0.4} />
      <div className="container">
        <PageHeader
          variant="standard"
          title="Lab"
          description="The lab is living work — my workshop, not my gallery. Some things here are formed, some half-formed, all of it built in public and actively growing."
        />
        <ul className="cardList" aria-label="Lab projects">
          {labEntries.map((entry) => (
            <li key={entry.href}>
              <Card
                image={
                  entry.image != null && entry.image !== ''
                    ? { src: entry.image, alt: entry.alt ?? entry.title }
                    : undefined
                }
                heading={entry.title}
                subtitle={entry.subtitle}
                metaItems={[
                  { label: 'Type', value: entry.type },
                  { label: 'Last Updated', value: entry.lastUpdated },
                ]}
                href={entry.href}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
