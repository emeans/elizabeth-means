import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lab | Elizabeth Means',
  description: 'Experiments and side projects.',
}

export default function LabPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="sectionContent">
          <h2>Lab</h2>
          <p>
            Experiments, side projects, and explorations. More coming soon.
          </p>
        </div>
      </div>
    </section>
  )
}
