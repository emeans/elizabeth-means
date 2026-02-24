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
        
          </div>
        </div>
      </div>
    </section>
  )
}
