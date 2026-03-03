import Hero from '@features/home/Hero'
import NoiseTexture from '@components/primitives/NoiseTexture'
import Card from '@components/content-media/Card'
import { workEntries } from '@features/work/workEntries'
import { labEntries } from '@features/lab/labEntries'

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
