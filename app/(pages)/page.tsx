import Hero from '@features/home/Hero'
import NoiseTexture from '@components/primitives/NoiseTexture'
import Card from '@components/content-media/Card'
import { workEntries } from '@features/work/workEntries'
import { labEntries } from '@features/lab/labEntries'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Elizabeth Means',
  description: 'I bridge research, design, and engineering, in the work and in the culture.',
  openGraph: {
    title: 'Elizabeth Means — Product Manager & Design Engineer',
    description:
      'Drawn to mission-driven teams where the problem is hard, the stakes are human, and integrated product thinking shapes every decision.',
    url: 'https://elizabethmeans.com',
    images: [
      {
        url: 'https://elizabethmeans.com/images/wic-case-study/nwa-conferences.png',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <NoiseTexture opacity={0.4} />
      <section className="section">
        <div className="container">
          <ul className="cardList" aria-label="Featured work and lab">
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
    </>
  )
}

