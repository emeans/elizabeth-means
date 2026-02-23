import Card from '@components/Card'
import Link from '@components/Link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work | Elizabeth Means',
  description: 'Experience, resume, and professional background.',
}

export default function WorkPage() {
  return (
    <section className='section'>
      <div className='container'>
        <div className='section-content'>
          <h2>Work</h2>
          <p>Case studies, projects, and experiences.</p>
          <div className='cards'>
          <Card
            image={{ src: '/images/2025-09-wic-product-minneapolis-mn.png', alt: 'WIC Product Team in Minneapolis, MN' }}
            heading='WIC Product Management Case Study'
            subtitle='2025 · Product design & strategy'
            action={
              <Link href='/work/wic-product-case-study' variant='nav'>
                View case study →
              </Link>
            }
          />
          <Card
            image={{ src: '/images/2025-09-wic-product-minneapolis-mn.png', alt: 'WIC Product Team in Minneapolis, MN' }}
            heading='WIC Product Management Case Study'
            subtitle='2025 · Product design & strategy'
            action={
              <Link href='/work/wic-product-case-study' variant='nav'>
                View case study →
              </Link>
            }
          />
          <Card
            image={{ src: '/images/2025-09-wic-product-minneapolis-mn.png', alt: 'WIC Product Team in Minneapolis, MN' }}
            heading='WIC Product Management Case Study'
            subtitle='2025 · Product design & strategy'
            action={
              <Link href='/work/wic-product-case-study' variant='nav'>
                View case study →
              </Link>
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}
