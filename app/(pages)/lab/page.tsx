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
  { href: '/lab/design-system', title: 'Design System' },
  { href: '/lab/design-operations-framework', title: 'Design Operations Framework' },
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
          {labItems.map(({ href, title }) => (
            <li key={href}>
              <Card heading={title} href={href} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
