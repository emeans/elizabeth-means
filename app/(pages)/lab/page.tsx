import type { Metadata } from 'next'
import PageHeader from '@/components/design-system/PageHeader'
import Card from '@/components/design-system/Card'
import NoiseTexture from '@/components/design-system/NoiseTexture/NoiseTexture'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Lab | Elizabeth Means',
  description: 'Experiments and side projects.',
}

const labItems = [
  { href: '/lab/design-system', title: 'Design System', subtitle: 'Built to practice what I preach. Figma tokens, CSS pipelines, and component architecture, actively evolving as I try new tools and techniques.' },
  { href: '/lab/design-operations-framework', title: 'Design Operations Framework', subtitle: 'The process infrastructure I built to take a design practice from solo to collaborative: templates, standards, and a delegation framework.' },
]

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
        <ul className={styles.cardList} aria-label="Lab projects">
          {labItems.map(({ href, title, subtitle }) => (
            <li key={href}>
              <Card heading={title} subtitle={subtitle} href={href} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
