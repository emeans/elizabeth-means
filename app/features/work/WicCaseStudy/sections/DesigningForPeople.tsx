import ContentImage from '@components/content-media/ContentImage'
import Link from '@components/navigation/Link'
export default function DesigningForPeople() {
  return (
    <section>
      <h2>Designing for People, Not Just Compliance</h2>
      <p>
        WIC software had long been built around administrative compliance. We set out to build
        around people instead, and that distinction shaped every design decision we made. The most
        visible expression of this was our health journey, a compassionate timeline surfacing health
        insights, education, and support for participants. But the philosophy permeated the entire
        system, representing a shift from administrative case management to genuine supportive
        engagement.
      </p>
      <ContentImage
        src='/images/wic-case-study/wic-admin-participant-summary.png'
        alt='WIC Admin Participant Summary'
        caption='WIC Admin Participant Summary'
        expandable
      />
      <p>
        I applied Jakob's usability heuristics{' '}
        <Link href='#ref-4' className='citation-ref'>
          [4]
        </Link>{' '}
        throughout. Information architecture was a particular focus: I wanted the system to follow
        users' mental models rather than the underlying data structure, exposing functionality in a
        logical hierarchy with the most frequently used features within easy reach. I leaned into
        recognition over recall to reduce cognitive overload, maintained consistency across the
        design language, and built in both personalization at the user level and customization at
        the state level. Validation, error recovery, and microcopy were treated as core design work,
        not afterthoughts, written in plain language and aligned with a consistent brand voice.
      </p>
      <p>
        As the team grew, I recognized that the PM role wasn't only about making good product
        decisions. It was about building the infrastructure that would enable the team to make good
        decisions without me in the room. I developed a comprehensive{' '}
        <Link href='/lab/design-operations-framework'>design operations framework</Link>: process
        templates for research, design briefs, handoffs, and review checklists, a Figma organization
        and versioning system, UX writing guidelines covering voice, tone, and accessibility
        standards, a design delegation playbook defining roles and autonomy levels, and a design
        system with a component library and WCAG documentation. It was built to enable consistent
        delivery, faster onboarding, and higher velocity as the team scaled. Building it was also
        where the tension between doing and enabling was sharpest. I was doing significant design
        work while simultaneously building the systems that would eventually let me stop doing it
        myself.
      </p>
      <ContentImage
        src='/images/wic-case-study/wic-design-system-usage-guidlines.png'
        alt='WIC Product Design System Usage Guidelines'
        caption='WIC Product Design System Usage Guidelines'
        expandable
      />
      <ContentImage
        src='/images/wic-case-study/wic-design-system.png'
        alt='WIC Product Design System Color Tokens and Buttons'
        caption='WIC Product Design System Color Tokens and Buttons'
        expandable
      />
      <p>
        That tension showed up at the feature level, too. Risk management began as simple forms in
        early mockups. As we kept validating with our subject matter expert and understood the true
        regulatory complexity, we evolved the design into a step-based wizard that progressively
        guided users through each component. The final design looked nothing like the first. That
        only happened because we kept validating rather than assuming we understood the requirements
        upfront, and it ensured we met complex regulations while maintaining usability.
      </p>
      <ContentImage
        src='/images/wic-case-study/wic-admin-risk-management.png'
        alt='WIC Admin Risk Management Wizard'
        caption='WIC Admin Risk Management Wizard'
        expandable
      />
    </section>
  )
}
