import NoiseTexture from '@components/primitives/NoiseTexture'
import WicCaseStudy from '@features/work/WicCaseStudy'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Building the Playbook While Running the Play — Elizabeth Means',
  description: 'A 0-to-1 WIC management information system: two years of discovery, design, and delivery in a regulated, multi-state government program.',
  openGraph: {
    title: 'Building the Playbook While Running the Play',
    description: 'A 0-to-1 WIC management information system: two years of discovery, design, and delivery in a regulated, multi-state government program.',
    url: 'https://elizabethmeans.com/work/wic-product-case-study/',
    images: [
      {
        url: 'https://elizabethmeans.com/images/wic-case-study/nwa-conferences.png',
        width: 1200,
        height: 630,
      }
    ],
  }
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
