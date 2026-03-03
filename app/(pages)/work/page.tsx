import type { Metadata } from 'next'
import PageHeader from '@components/layout-structure/PageHeader'
import Card from '@components/content-media/Card'
import NoiseTexture from '@components/primitives/NoiseTexture'
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
          description="The work is real: government software, regulated industries, and teams that needed to ship. Some projects are fully documented, some still being written up, all of it built in the field."
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
