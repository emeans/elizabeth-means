import MetricsCard from '@/components/design-system/MetricsCard'
import Link from '@components/Link'
import PullQuote from '@/components/design-system/PullQuote'

export default function ValidationAndOutcomes() {
  return (
    <section>
      <h2>Validation & Outcomes</h2>
      <p>
        Over two years, we validated our product direction through five national conference
        demonstrations, direct stakeholder engagement, and alignment with external research. Several
        states expressed strong commercial interest, though translating that interest into contracts
        required navigating the realities of government procurement cycles. The $14.9 million
        federal grant research findings{' '}
        <Link href='#ref-2' className='citation-ref'>
          [2]
        </Link>{' '}
        directly validated our product approach: participant-first, human-centered, modular, and
        licensable architecture aligned precisely with their recommendations for the modern WIC
        program.
      </p>
      <p>
        We delivered working demonstrations of vendor management, food management, and participant
        portal modules, showcasing critical workflows including vendor authorization, food package
        creation, and participant intake. The system supported state agencies with multiple local
        clinics. The comprehensive design system and operational framework focused on consistent
        delivery as the team scaled. We established the infrastructure foundation even as we
        continued building toward full certification workflows.
      </p>
      <p>
        The team grew from 4 to 10 over two years, with 2 promotions and 2 progressions into
        engineering leadership roles, while maintaining high code and design quality. This work
        taught me two critical lessons. First, championing product thinking, configurability,
        scalability, and architecture in a custom development culture required constant education
        and reinforcement. The biggest challenge wasn't technical. It was shifting the mindset from
        "build what this client needs" to "build what enables all clients to succeed." Second,
        regulatory complexity reveals itself iteratively. You can't front-load all compliance
        discovery. Building continuous validation loops with SMEs and designing for configurability
        from the start proved essential to maintaining both compliance and usability.
      </p>

      <PullQuote quote="Regulatory complexity reveals itself iteratively. You can't front-load all compliance discovery." />
      <aside className='aside inline'>
        <div className='asideInner'>
          <MetricsCard
            metrics={[
              {
                value: '4 to 10',
                description: 'team members',
              },
              { value: '100%', description: 'retention over two years' },
              { value: '2', description: 'promotions' },
              { value: '2', description: 'new engineering leads' },
            ]}
          />
        </div>
      </aside>
      <p>
        There is a third lesson that took longer to name. I stayed in the doing far longer than I
        should have. I was conducting discovery, leading design work, managing the team, and
        building operational infrastructure simultaneously, and for a long time, that felt like what
        the role required. In some ways, it was. But it also meant that when the team needed me to
        step back and operate at a truly strategic level, I didn't always have the bandwidth to get
        there. The tension between building the product and building the organization never fully
        resolved. That is what I would most want to do differently, and what I now understand most
        clearly.
      </p>
      <PullQuote quote="The biggest challenge wasn't technical. It was shifting the mindset from 'build what this client needs' to 'build what enables all clients to succeed.'" />
      <p>
        These lessons shaped my understanding of what product management fundamentally is. In
        hindsight, I would have invested in operational infrastructure, design system, process
        templates, and onboarding resources even earlier, before the team scaled. I would also
        formalize the product mindset in writing during onboarding, rather than reinforcing it only
        verbally throughout the project lifecycle. By the end, I understood that the PM role in a
        0-to-1 environment is about holding the vision while building the right structure: the
        systems, documentation, and frameworks that empower the team to take ownership and execute
        independently.
      </p>
      <PullQuote quote='The PM role in a 0-to-1 environment is about holding the vision while building the right structure: the systems, documentation, and frameworks that empower the team to take ownership and execute independently.' />
      <p>
        That understanding doesn't belong to this product or this company. It's the thing I'd carry
        into any 0-to-1 environment and build from, earlier.
      </p>
    </section>
  )
}
