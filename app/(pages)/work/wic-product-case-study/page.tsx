import NoiseTexture from '@components/primitives/NoiseTexture'
import WicCaseStudy from '@features/work/WicCaseStudy'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WIC Product Case Study | Work | Elizabeth Means',
  description: 'Case study: WIC product work by Elizabeth Means.',
}

export default function WicProductCaseStudyPage() {
  return (
    <section className="section">
      <NoiseTexture opacity={0.4} />
      <div className="container">
        <WicCaseStudy />
      </div>
    </section>
  )
}
