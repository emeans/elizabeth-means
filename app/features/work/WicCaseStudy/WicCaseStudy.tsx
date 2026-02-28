import PageHeader from '@/components/design-system/PageHeader'
import type { MetadataItem } from '@/components/design-system/PageHeader/PageHeader'
import WhyThisMoment from './sections/WhyThisMoment'
import DefiningTheRole from './sections/DefiningTheRole'
import LearningToListen from './sections/LearningToListen'
import DesigningForPeople from './sections/DesigningForPeople'
import WhereWeChoseToBet from './sections/WhereWeChoseToBet'
import ValidationAndOutcomes from './sections/ValidationAndOutcomes'
import References from './sections/References'

const metadata: MetadataItem[] = [
  { label: 'Role', value: 'WIC Product Manager' },
  { label: 'Timeline', value: '2023–2025' },
  { label: 'Team', value: '4–10 engineers' },
  { label: 'Tools', value: 'Figma, Angular, .NET' },
]

export default function WicCaseStudy() {
  return (
    <>
      <PageHeader
        variant='entry'
        overline='work'
        title='Building the Playbook While Running the Play'
        subtitle='0-to-1 Product Management at KL&A'
        metadata={metadata}
        image={{
          src: '/images/wic-case-study/nwa-conferences.png',
          alt: 'Attended 5 National WIC Association Conferences',
        }}
        executiveSummary={
          <>
            <p>
              KL&A had spent 30 years delivering custom government software, building exactly what
              each client specified. When they decided to build their first commercial product, a
              modern WIC Management Information System, they created something else they'd never had
              before: a Product Manager role.
            </p>
            <p>
              I stepped into that undefined position in late 2023 and spent two years navigating a
              tension I didn't fully anticipate. To build a great product, I needed to be close to
              the work: conducting discovery, designing solutions, and validating with users. But to
              build a product organization, I needed to step back from the work: creating
              infrastructure, enabling my team, and shifting a 30-year-old custom development
              culture toward product thinking. Doing both simultaneously, with limited resources and
              no blueprint, was the real challenge this case study is about.
            </p>
            <p>
              The result: a federal research-validated product architecture, working demonstrations
              at five national conferences, zero team attrition over two years, and a clearer
              picture of what product management can look like inside a custom development company.
            </p>
          </>
        }
      />
      <section className='section-content content-entry'>
        <WhyThisMoment />
        <DefiningTheRole />
        <LearningToListen />
        <DesigningForPeople />        
        <WhereWeChoseToBet />
        <ValidationAndOutcomes />
        <References />
      </section>
    </>
  )
}
