import DelegationFramework from '@/components/patterns/DelegationFramework'
import FlowDiagram from '@/components/patterns/FlowDiagram'
import PageHeader from '@/components/layout-structure/PageHeader'
import Link from '@/components/navigation/Link'
import { designOperationsFrameworkEntry, getEntryMetadata } from '@/features/lab/labEntries'

export default function DesignOperationsFramework() {
  return (
    <>
      <PageHeader
        variant='entry'
        overline='lab'
        title={designOperationsFrameworkEntry.title}
        subtitle='Building the infrastructure for a scalable, handoff-ready design practice'
        metadata={getEntryMetadata(designOperationsFrameworkEntry)}
        executiveSummary={
          <>
            <p>
              When I was building the WIC product, I was the only designer. I was also the product
              manager, lead researcher, and de facto UX writer. The process lived entirely in my
              head, and that was fine, until I started preparing to bring another designer onto the
              team.
            </p>
            <p>
              I realized I was about to hand someone work that I couldn't fully explain. Not because
              it was complicated, but because I'd never had to externalize it. The decisions, the
              handoff expectations, the file conventions, the reason we wrote microcopy at a
              7th-grade reading level: all of it existed as instinct, not documentation. In a
              regulated product serving vulnerable families, that's a real risk.
            </p>
            <p>
              So I built the infrastructure I wished I'd had from the start: a system that chains
              together from the first research session through developer handoff, where the output
              of each stage becomes the input of the next. Together the templates form a living PRD,
              designed to replace our story-writing process entirely and give the engineering team a
              single source of truth to build from.
            </p>
          </>
        }
      />
      <section className='section-content content-entry'>
        <FlowDiagram
          title='How the Templates Connect'
          items={[
            {
              value: 'Template 1',
              title: 'User Research Insights',
              description:
                'Documents pain points, user needs, and design implications from discovery sessions. Translated into actionable opportunities, not just raw observations.',
              arrowLabel: 'needs become requirements',
            },
            {
              value: 'Template 2',
              title: 'Design Brief',
              description:
                'Scopes the design problem: what to solve, what success looks like, what is fixed versus flexible, and every reference a designer needs before opening Figma.',
              arrowLabel: 'requirements shape the design',
            },
            {
              value: 'Template 3',
              title: 'Design Review Checklist',
              description:
                'Evaluates completed design work across six areas before anything moves to handoff: brief alignment, information architecture, visual quality, Figma hygiene, accessibility, and edge cases.',
              arrowLabel: 'approval unlocks handoff',
            },
            {
              value: 'Template 4',
              title: 'Design Handoff Summary',
              description:
                'Captures everything engineering needs to build accurately, from user flows and conditional logic to validation rules, edge cases, accessibility requirements, and QA sign-offs.',
            },
          ]}
        />
      </section>
      <section className='section-content content-entry'>
        <h2 className='text-lg'>The Framework</h2>
        <section>
          <Link variant='inline' external href='https://www.notion.so/What-Is-Discovery-31738d07693480c09e7df7aed0265f6a'>What Is Discovery?</Link>
          <p>
            Before I could bring anyone else into the process, I needed to document not just the
            steps, but the reasoning behind them. This document defines why we design the way we do:
            the difference between requirements-driven development and human-centered design, why
            information architecture has to come before visual design, and what goes wrong when you
            let your data model drive your UI. I used it two ways: as an onboarding reference for
            new team members, and as a tool for pushback when stakeholders wanted to skip discovery
            and jump straight to wireframes.
          </p>
          <aside className='aside inline'>
            <div className='asideInner'>
              <FlowDiagram
                title='Design Philosophy'
                intro={
                  <>
                    Poor information architecture can&apos;t be fixed with good visual design. The
                    phases are sequential for a reason.
                  </>
                }
                layout='horizontal'
                items={[
                  {
                    value: 'Phase 01',
                    title: 'Discovery',
                    description:
                      'Research and requirements gathering. Understand user needs, pain points, and design implications before defining scope or opening Figma.',
                    sections: [
                      {
                        title: 'Key output(s)',
                        values: ['User Research Insights'],
                        displayAs: 'tags',
                      },
                      {
                        title: 'Led by',
                        values: ['Product Designer', 'UX Designer'],
                        displayAs: 'text',
                      },
                    ],
                  },
                  {
                    value: 'Phase 02',
                    title: 'Information Architecture',
                    description:
                      'Transform discovery insights into structure. Determine how information is grouped, what the navigation model is, and how the system maps to how users actually think rather than how the database is organized.',
                    sections: [
                      {
                        title: 'Key output(s)',
                        values: ['Design Brief'],
                        displayAs: 'tags',
                      },
                      {
                        title: 'Led by',
                        values: ['UX Designer', 'Product Designer'],
                        displayAs: 'text',
                      },
                    ],
                  },
                  {
                    value: 'Phase 03',
                    title: 'Design Development',
                    description:
                      'Create the concrete interfaces users interact with: flows, screens, interactions, and visual design. Validate against requirements and accessibility standards, then prepare for handoff.',
                    sections: [
                      {
                        title: 'Key output(s)',
                        values: ['Design Review Checklist', 'Design Handoff Summary'],
                        displayAs: 'tags',
                      },
                      {
                        title: 'Led by',
                        values: ['UI Production Designer', 'Product Designer'],
                        displayAs: 'text',
                      },
                    ],
                  },
                ]}
              />
            </div>
          </aside>
        </section>

        <section>
          <Link variant='inline' external href='https://www.notion.so/Design-Process-Template-User-Research-Insights-Template-31738d076934806186c4d3801583e080'>User Research Insights Template</Link>
          <p>
            Discovery sessions are only as useful as what you do with them afterward. This template
            captures research in a format that's actually usable downstream. Each entry documents
            the topic area, core problems observed, what users need and why, and the design
            implications translated into specific actionable opportunities. It links directly to the
            design brief so the connection between what we heard and what we decided to build is
            traceable, not assumed.
          </p>
        </section>

        <section>
          <Link variant='inline' external href='https://www.notion.so/Design-Process-Template-Design-Brief-Template-31738d07693480038cdacd3d7828454a'>Design Brief Template</Link>
          <p>
            This exists so a designer never has to reverse-engineer a decision or spend a week going
            in the wrong direction. It gives them everything upfront: the problem they're solving,
            what success looks like, what's fixed versus open for exploration, all reference
            materials, and a clear timeline with review checkpoints. The "Boundaries" section
            matters most on a regulated product. There are things that genuinely can't change
            without compliance review, and a new designer has no way of knowing that unless it's
            written down.
          </p>
        </section>

        <section>
          <Link variant='inline' external href='https://www.notion.so/Design-Process-Template-Design-Review-Checklist-31738d07693480948ceef3900cfdb66c?source=copy_link'>Design Review Checklist Template</Link>
          <p>
            Before this existed, design reviews were inconsistent. Things got caught in QA or after
            a developer had already built something, because reviews had been more of a vibe check
            than a structured evaluation. This checklist makes reviews predictable. It covers six
            areas: brief alignment, information architecture and logic, visual and UI quality, Figma
            file hygiene, accessibility, and edge cases. Accessibility gets its own section because
            WCAG compliance on a Section 508-regulated product can't be treated as a separate audit.
            It has to be part of every review.
          </p>
        </section>

        <section>
          <Link variant='inline' external href='https://www.notion.so/Design-Process-Template-Design-Handoff-Summary-31738d0769348062a098dbb02c2676bb'>Design Handoff Summary Template</Link>
          <p>
            This is the artifact that replaced our story-writing process. Before it existed,
            engineers got a Figma link, a Jira ticket, and usually a conversation. The details that
            got lost in translation surfaced during QA as rework. The handoff summary captures
            everything needed to build accurately: the user flow and conditional logic, data and
            validation rules, interaction details, edge cases, accessibility requirements, and a QA
            checklist with sign-offs. The goal was that an engineer could read it without asking a
            clarifying question and still build the right thing.
          </p>
        </section>

        <section>
          <p>
            The templates don't work alone. Three additional systems support how the team operates,
            communicates, and scales
          </p>
        </section>

        <section>
          <Link variant='inline' external href='https://www.notion.so/Design-Delegation-Playbook-31738d076934802888d7c9636ab9b18e?source'>Design Delegation Playbook</Link>
          <p>
            When you're building a team from scratch, you don't always get to choose the experience
            level you hire. This playbook gave me a way to show up correctly regardless. By mapping
            five autonomy levels across four roles, from directed execution to full strategic
            ownership, I could look at where someone was when they arrived and immediately
            understand what I needed to provide: how much direction, how much review, how much I
            could hand off and trust. It made my involvement predictable and intentional rather than
            reactive.
          </p>
          <aside className='aside inline'>
            <div className='asideInner'>
              <DelegationFramework
                title='Autonomy by Role'
                intro='Built so I could calibrate my involvement to whoever joined the team, at whatever level they arrived.'
                levels={[
                  { label: 'Level 1', name: 'Directed Execution' },
                  { label: 'Level 2', name: 'Guided Execution' },
                  { label: 'Level 3', name: 'Patterned Independence' },
                  { label: 'Level 4', name: 'Strategic Collaboration' },
                  { label: 'Level 5', name: 'Strategic Ownership' },
                ]}
                roles={[
                  {
                    title: 'Product Designer',
                    description: 'Owns design vision and strategy',
                    indicators: ['outside', 'outside', 'start', 'growth', 'ownership'],
                  },
                  {
                    title: 'UX Designer',
                    description: 'Owns research, IA, and design development',
                    indicators: ['outside', 'start', 'growth', 'growth', 'ownership'],
                  },
                  {
                    title: 'UI Designer',
                    description: 'Owns visual execution and handoff',
                    indicators: ['start', 'growth', 'growth', 'ownership', 'outside'],
                  },
                  {
                    title: 'Business Analyst',
                    description: 'Owns requirements and acceptance criteria',
                    indicators: ['start', 'growth', 'growth', 'growth', 'ownership'],
                  },
                ]}
                legend={[
                  { variant: 'start', label: 'Typical starting point' },
                  { variant: 'growth', label: 'Growth range' },
                  { variant: 'ownership', label: 'Full ownership potential' },
                  { variant: 'outside', label: 'Outside typical scope' },
                ]}
              />
            </div>
          </aside>
        </section>

        <section>
          <Link variant='inline' external href='https://www.notion.so/Design-File-Standards-31738d0769348099a95ed079e0212a5a'>Design File Standards</Link>
          <p>
            Figma files are a form of communication. A well-organized file tells the next person
            where things are, what's been approved, what's in progress, and how everything connects
            to Jira and the development team. These standards define how files are named,
            structured, and versioned across three file types: the design system library,
            exploration files, and final designs. The frame naming convention had the biggest
            downstream impact: when every frame follows [Feature]_[Screen#]_[ScreenName]_[State], a
            developer or QA engineer can find exactly what they need without asking. Across a
            product with dozens of flows and hundreds of screens, that adds up.
          </p>
        </section>

        <section>
          <Link variant='inline' external href='https://www.notion.so/UX-Writing-Microcopy-Guidelines-31738d076934804880a9f3b31811929c'>UX Writing & Microcopy Guidelines</Link>
          <p>
            WIC serves families at some of the most vulnerable points in their lives, and how the
            software talks to them is a design requirement, not a nice-to-have. These guidelines
            define voice, tone, and writing standards for every component type in the product: form
            labels, error messages, success states, button labels, and empty states, with specific
            examples of what to do and what to avoid. Writing at a 7th-grade reading level and using
            judgment-free language isn't dumbing things down. Approximately 54% of American adults
            read below a 6th-grade level, and plain language removes friction and cognitive overload
            that never needed to be there in the first place.
          </p>
        </section>
        <section>
          <p>
            This framework was built for one product, but the thinking behind it applies to any team
            moving from solo design to collaborative delivery.
          </p>
        </section>
      </section>
    </>
  )
}
