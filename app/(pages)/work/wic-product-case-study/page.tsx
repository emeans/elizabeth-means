import Link from '@components/Link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WIC Product Case Study | Work | Elizabeth Means',
  description: 'Case study: WIC product work by Elizabeth Means.',
}

export default function WicProductCaseStudyPage() {
  return (
    <section className='section'>
      <div className='container'>
        <div className='section-content'>
          <Link href='/work' variant='standalone'>
            ← Back to Work
          </Link>
          <h2>WIC Product Management Case Study</h2>
          <p>Building a Human-Centered WIC Management Information System</p>
          <div className='metadata-row'>
            <div className='metadata-column'>
              <p className='metadata-label'>Role</p>
              <p className='metadata-label'>Timeline</p>
              <p className='metadata-label'>Team</p>
              <p className='metadata-label'>Tools</p>
            </div>
            <div className='metadata-column'>
              <p className='metadata-value'>WIC Product Manager</p>
              <p className='metadata-value'>2023–2025</p>
              <p className='metadata-value'>3–10 engineers</p>
              <p className='metadata-value'>Figma, Angular, .NET</p>
            </div>
          </div>

          <section className='section'>
            <h3>The Product Opportunity & Context</h3>
            <p>
              Many State WIC (Women, Infants, & Children) agencies rely on legacy systems that are
              over 20 years old. These inflexible platforms force staff to resort to manual
              workarounds, splitting workflows across multiple disconnected tools.{' '}
            </p>
            <p>
              This created an opportunity. Federal grants for modernization were set to end within
              the next couple of years, and states would be looking to spend that money on
              modernization and new products. KL&A decided to build a modern, COTS (commercial-off-
              the-shelf) WIC MIS (Management Information System), the company’s first product built
              from the ground up without a secured client.
            </p>
            <p>
              After showcasing early vendor management work at the National WIC Association
              conference in Portland, we found several states were very interested in our
              participant-first, human-centered design approach and loved the simplicity that we
              brought to complex regulatory workflows.{' '}
            </p>
            <p>
              The timing proved right. Within a year, a $14 million federal grant was awarded to
              research modernization pathways for WIC systems. The research findings aligned with
              the application we had already begun building, such as participant-first, human-
              centered, modular, and licensable. We had validated product-market fit before most
              competitors had working demos.
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}
