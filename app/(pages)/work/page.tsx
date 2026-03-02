import type { Metadata } from 'next'
import PageHeader from '@/components/design-system/PageHeader'
import Card from '@/components/design-system/Card'
import NoiseTexture from '@/components/design-system/NoiseTexture/NoiseTexture'
import { workEntries } from '@/features/work/workEntries'

export const metadata: Metadata = {
  title: 'Work | Elizabeth Means',
  description: 'Experience, resume, and professional background.',
}

export default function WorkPage() {
  return (
    <section className="section">
      <NoiseTexture opacity={0.4} />
      <div className="container">
        <PageHeader
          variant="standard"
          title="Work"
          description="Case studies, projects, and experiences."
        />
        <ul className="cardList" aria-label="Work projects">
          {workEntries.map((entry) => (
            <li key={entry.href}>
              <Card
                image={
                  entry.image != null && entry.image !== ''
                    ? { src: entry.image, alt: entry.alt ?? entry.title }
                    : undefined
                }
                heading={entry.title}
                subtitle={entry.subtitle}
                metaItems={entry.metaItems}
                href={entry.href}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
