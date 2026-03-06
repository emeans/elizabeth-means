import Flow from '@components/patterns/Flow'
import RangeChart from '@components/patterns/RangeChart'
import PageHeader from '@components/layout-structure/PageHeader'
import Link from '@components/navigation/Link'
import { designOperationsFrameworkEntry, getEntryMetadata } from '@features/lab/labEntries'

export default function DesignOperationsFramework() {
  return (
    <>
      <PageHeader
        variant='entry'
        overline='lab'
        title={designOperationsFrameworkEntry.title}
        subtitle='A set of defaults for design teams moving from solo to collaborative delivery'
        metadata={getEntryMetadata(designOperationsFrameworkEntry)}
        executiveSummary={
          <>
            <p>
              When I was the only designer on a product, the process lived entirely in my head. That
              was fine — until I started preparing to bring another designer onto the team. I
              realized I was about to hand someone work I couldn't fully explain. Not because it was
              complicated, but because I'd never had to externalize it.
            </p>
            <p>
              The decisions, the handoff expectations, the file conventions, the reason we wrote
              microcopy the way we did: all of it existed as instinct. When the person holding that
              instinct is unavailable, or leaves, or is just slammed, the team loses access to it.
              That's what this is about.
            </p>
            <p>
              What I built is less a process and more a shared reference. Strong defaults the team
              can reach for when they need them, not steps they're required to follow. The goal was
              consistency without ceremony.
            </p>
          </>
        }
      />
      <section className='section-content content-entry'>
        <Flow
          title='How the Templates Connect'
          items={[
            {
              value: 'Template 1',
              title: 'User Research Insights',
              description:
                'Documents pain points, user needs, and design implications from discovery sessions. Translated into actionable opportunities, not just raw observations.',
              arrowLabel: 'needs inform scope',
            },
            {
              value: 'Template 2',
              title: 'Design Brief',
              description:
                'Scopes the design problem: what to solve, what success looks like, what is fixed versus flexible, and every reference a designer needs before opening Figma.',
              arrowLabel: 'scope shapes the design',
            },
            {
              value: 'Template 3',
              title: 'Design Review Checklist',
              description:
                'Evaluates completed design work across six areas: brief alignment, information architecture, visual quality, Figma hygiene, accessibility, and edge cases.',
              arrowLabel: 'design is ready to build',
            },
            {
              value: 'Template 4',
              title: 'Design to Developer Handoff',
              description:
                'Captures everything engineering needs to build accurately, from user flows and conditional logic to validation rules, edge cases, accessibility requirements.',
            },
          ]}
        />
      </section>
      <section className='section-content content-entry'>
        <h2 className='text-lg'>The Framework</h2>
        <section>
          <Link
            variant='inline'
            external
            href='https://www.notion.so/What-Is-Discovery-31738d07693480c09e7df7aed0265f6a'>
            What Is Discovery?
          </Link>
          <p>
            Before I could bring anyone else in, I needed to document not just what we did, but why.
            This piece covers the differences between requirements-driven development and
            human-centered design, why information architecture must come before visual design, and
            what goes wrong when the data model drives the UI. It's an onboarding document. It's
            also something I'd pull out when there was pressure to skip discovery and jump straight
            to wireframes. A shared frame of reference instead of a recurring debate.
          </p>
          <aside className='aside inline'>
            <div className='asideInner'>
              <Flow
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
                        values: ['Design Review Checklist', 'Design to Developer Handoff'],
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
          <Link
            variant='inline'
            external
            href='https://www.notion.so/Design-Process-Template-User-Research-Insights-Template-31738d076934806186c4d3801583e080'>
            User Research Insights Template
          </Link>
          <p>
            Discovery sessions are only as useful as what you do with them afterward. This template
            captures research in a format that's actually usable downstream: the topic area, the
            core problems observed, what users need and why, and the design implications translated
            into specific opportunities. Short enough to get filled out. Specific enough that it
            means something six months later. It links directly to the source notes, so the
            connection between what was heard and what was built is traceable rather than assumed.
          </p>
        </section>

        <section>
          <Link
            variant='inline'
            external
            href='https://www.notion.so/Research-Repository-31b38d0769348059922df280df4a7f5b'>
            Research Repository
          </Link>
          <p>
            A template only solves half the problem. The other half is knowing where your research
            lives and being able to find it. The repository uses a simple two-folder structure: raw
            session notes in one place, synthesized insights in another. Each insight links back to
            its source. It's not a system that requires maintenance to stay useful. It just needs to
            be used consistently enough that research accumulates over time instead of evaporating
            between projects.
          </p>
        </section>

        <section>
          <Link
            variant='inline'
            external
            href='https://www.notion.so/Design-Process-Template-Design-Brief-Template-31738d07693480038cdacd3d7828454a'>
            Design Brief Template
          </Link>
          <p>
            This exists so a designer never has to reverse-engineer a decision or spend a week going
            in the wrong direction. It gives them everything upfront: the problem, what success
            looks like, what's fixed versus open for exploration, and all the references they need
            before opening Figma. The Boundaries section is the most important part. Constraints
            that exist for non-obvious reasons, whether technical, organizational, or
            domain-specific, have to be written down or they get designed around by accident.
          </p>
        </section>

        <section>
          <Link
            variant='inline'
            external
            href='https://www.notion.so/Design-Process-Template-Design-Review-Checklist-31738d07693480948ceef3900cfdb66c?source=copy_link'>
            Design Review Checklist Template
          </Link>
          <p>
            Before this existed, reviews were inconsistent. Things surfaced in QA or after a
            developer had already built them because the review was more of a quick check than a
            real evaluation. This checklist makes reviews predictable without making them heavy. Six
            areas: brief alignment, information architecture and logic, visual and UI quality, Figma
            file hygiene, accessibility, and edge cases. The intent isn't that every item gets
            checked on every ticket, but rather that anyone on the team can run a review against the
            same standard.
          </p>
        </section>

        <section>
          <Link
            variant='inline'
            external
            href='https://www.notion.so/Design-Process-Template-Design-Handoff-Summary-31738d0769348062a098dbb02c2676bb'>
            Design to Developer Handoff Template
          </Link>
          <p>
            Before this existed, engineers got a Figma link, a Jira ticket, and usually a
            conversation. This template replaced the entire story-writing process. It captures
            everything needed to build accurately: the user flow, conditional logic, validation
            rules, edge cases, and accessibility requirements. It also includes a lightweight
            section for logging questions that come up during build, so the answers live in the
            ticket rather than a Slack thread. The goal isn't a perfectly filled-out template every
            time. The goal is that the information exists somewhere that is findable.
          </p>
        </section>

        <section>
          <p>
            The templates don't work alone. Six additional systems support how the team operates,
            communicates, and scales.
          </p>
        </section>

        <section>
          <Link
            variant='inline'
            external
            href='https://www.notion.so/Design-Delegation-Playbook-31738d076934802888d7c9636ab9b18e?source'>
            Design Delegation Playbook
          </Link>
          <p>
            When you're building a team, you don't always get to choose who arrives or at what
            level. This playbook gave me a way to calibrate my involvement regardless. Five autonomy
            levels are mapped across four roles, from directed execution to full strategic
            ownership. When someone joined the team, I could look at where they were and know
            immediately what I needed to provide: how much direction, how much review, how much I
            could hand off and trust. It made my involvement intentional instead of reactive. And it
            gave new team members a clear picture of where they were starting and where they could
            go.
          </p>
          <aside className='aside inline'>
            <div className='asideInner'>
              <RangeChart
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
          <Link
            variant='inline'
            external
            href='https://www.notion.so/Design-File-Standards-31738d0769348099a95ed079e0212a5a'>
            Design File Standards
          </Link>
          <p>
            Figma files are a form of communication. A well-organized file tells the next person
            where things are, what's approved, what's in progress, and how everything connects to
            the rest of the team. These standards cover naming, structure, and versioning across
            three file types: the design system library, exploration files, and final designs. The
            frame naming convention had the biggest downstream impact. When every frame follows a
            consistent pattern, a developer or QA engineer can find exactly what they need without
            asking. Across dozens of flows and hundreds of screens, that adds up.
          </p>
        </section>

        <section>
          <Link
            variant='inline'
            external
            href='https://www.notion.so/UX-Writing-Microcopy-Guidelines-31738d076934804880a9f3b31811929c'>
            UX Writing & Microcopy Guidelines
          </Link>
          <p>
            How a product talks to its users is a design decision, not an afterthought. These
            guidelines cover voice, tone, and writing standards for all component types: form
            labels, error messages, success states, button labels, and empty states. With examples
            of what to do and what to avoid. Writing at a 7th-grade reading level and using
            judgment-free language isn't about simplifying things. It's about removing friction that
            never needed to be there. The principles are the same regardless of what your product
            does or who your users are.
          </p>
        </section>

        <section>
          <Link
            variant='inline'
            external
            href='https://www.notion.so/Design-Debt-Process-31b38d07693480b9809dc5a5acf535e5'>
            Design Debt Process
          </Link>
          <p>
            Every team accumulates it. A state that never got designed. A pattern that made sense at
            the time and doesn't anymore. A component that works but contradicts itself across three
            screens. Design debt isn't a failure; it's evidence that the product is moving. The
            problem isn't accumulation. It's when nobody has a way to see it, name it, or decide
            what to do about it.
          </p>
          <p>
            This process is deliberately light. It's a shared place to log inconsistencies when
            they're spotted, a rough method to categorize them by impact, and a periodic check-in to
            decide what's worth fixing now versus what can wait. No audit cycles, no mandatory
            reviews. Just a running list that makes invisible debt visible so the team can make
            intentional choices about it rather than stumbling across it during QA.
          </p>
        </section>

        <section>
          <Link
            variant='inline'
            external
            href='https://www.notion.so/How-We-Communicate-About-Design-Work-31b38d07693480bb91fce31d40803f10'>
            How We Communicate About Design Work
          </Link>
          <p>
            Most communication overhead comes not from having too much to say, but from not having a
            clear habit for when and how to say it. A decision gets made and is never written down. A
            scope change happens, and two people find out late.
          </p>
          <p>
            This guide covers four situations where design work consistently needs communication:
            status updates, decision logs, scope changes, and meeting summaries. Each has a format
            and a home. Short, async where possible, posted where the work lives. The goal is to
            make communication a lightweight habit rather than a production.
          </p>
        </section>

        <section>
          <Link
            variant='inline'
            external
            href='https://www.notion.so/Process-Success-Metrics-31b38d07693480578b63eff1862427d7'>
            Process Success Metrics
          </Link>
          <p>
            This is the piece that closes the loop. Every other document in this system is about how
            the team works. This one asks whether it's working.
          </p>
          <p>
            The metrics are intentionally simple. How often does work make it to handoff without a
            major revision? How long does onboarding take before someone is contributing
            independently? How many questions come back from development after a handoff? These
            aren't numbers to report upward. They're signals for the team, a way to notice when
            something in the process is creating friction and decide whether to adjust.
          </p>
          <p>
            This is also what makes the framework legible as a product. Taken together, the
            templates and reference documents form a living PRD for the design practice itself: a
            defined problem, a scoped solution, success criteria, and a feedback loop for iteration.
            The framework isn't finished when the documents are written. It's finished when the team
            is using it and improving it. That's the same bar we hold for anything else we ship.
          </p>
        </section>

        <section>
          <p>
            None of this is meant to be followed to the letter. The value is in having defaults the
            team shares, so when someone new joins, or takes over a feature, or needs to review
            someone else's work, there's a common language to reach for. The framework grows as the
            team does. That's the point.
          </p>
        </section>
      </section>
    </>
  )
}
