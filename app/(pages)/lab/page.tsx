import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lab | Elizabeth Means',
  description: 'Experiments and side projects.',
}

export default function LabPage() {
  return (
    <section className='section'>
      <div className='container'>
        <div className='section-content'>
          <h2>Lab</h2>
          <p>
            The lab is living work — my workshop, not my gallery. Some things here are formed, some
            half-formed, all of it built in public and actively growing.
          </p>
        </div>
      </div>
    </section>
  )
}
