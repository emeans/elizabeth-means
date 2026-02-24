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
          {/* <Link href='/work' variant='standalone'>
            ← Back to Work
          </Link> */}
          <h4>Building the Playbook While Running the Play</h4>
          <p className='text-bold'>0-to-1 Product Management at KL&A</p>
          <hr className='section-divider' />
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
          <hr className='section-divider' />
          <section className='section-content'>
            <section>
              <p>
                KL&A had spent 30 years delivering custom government software, building exactly what
                each client specified. When they decided to build their first commercial product, a
                modern WIC Management Information System, they created something else they'd never
                had before: a Product Manager role.
              </p>
              <p>
                I stepped into that undefined position in late 2023 and spent two years navigating a
                tension I didn't fully anticipate. To build a great product, I needed to be close to
                the work: conducting discovery, designing solutions, and validating with users. But
                to build a product organization, I needed to step back from the work: creating
                infrastructure, enabling my team, and shifting a 30-year-old custom development
                culture toward product thinking. Doing both simultaneously, with limited resources
                and no blueprint, was the real challenge this case study is about.
              </p>
              <p>
                The result: a federal research-validated product architecture, working
                demonstrations at five national conferences, zero team attrition over two years, and
                a clearer picture of what product management can look like inside a custom
                development company.
              </p>
            </section>
            <section>
              <h4>Why This Moment, Why This Product</h4>
              <p>
                The Women, Infants, and Children program is deceptively complex. Most people think
                of it as a client benefit program, but it operates across three interconnected
                domains: participant case management, vendor authorization, and food package
                administration. All three have to reconcile with each other in real time. A change
                to an approved food item ripples across vendor eligibility, participant benefits,
                and state compliance reporting simultaneously. It is a surprisingly complex system,
                and the software supporting it hadn't kept pace.
              </p>
              <p>
                Many state WIC agencies were running on legacy platforms over 20 years old. These
                systems were so rigid that routine regulatory updates required full development
                cycles, sometimes taking months. Staff had adapted by building manual workarounds
                across disconnected tools, absorbing the complexity that software should have
                handled for them.
              </p>
              <p>
                KL&A saw an opportunity. Federal grants for modernization were active, states would
                soon need to spend that money, and no modern commercial WIC MIS existed that could
                serve multiple states without heavy customization. They decided to build one from
                scratch: the company's first commercial product after 30 years of custom
                development.
              </p>
              <p>
                Early validation came quickly, and from an unexpected source. At the National WIC
                Association conference in Portland, our booth happened to be next to a third-party
                compliance investigator who worked directly with state agencies on vendor
                investigations. He walked through what we had built, asked sharp questions, and then
                said something that stuck: wouldn't it be something if he could log into a system
                like this out in the field and run his investigation directly? He wasn't a potential
                customer. He had no reason to flatter us. He was just describing, unprompted, a
                capability our product could naturally support. It was the kind of validation you
                can't manufacture.
              </p>
              <p>
                A few months later, a $14.9 million federal grant was awarded{' '}
                <Link href='#ref-1' className='citation-ref'>[1]</Link> to research modernization pathways for WIC systems
                nationally. We hadn't known it was coming. When the initial findings were published{' '}
                <Link href='#ref-2' className='citation-ref'>[2]</Link>, they described the ideal modern WIC platform as
                participant-first, human-centered, modular, and licensable. Those were the exact
                principles we had already been building around. We hadn't found product-market fit
                by chasing a funding signal. We had found it by listening carefully to the people
                closest to the problem.
              </p>
            </section>
            <section>
              <h4>Defining the Role by Doing the Work</h4>
              <p>
                I joined the WIC product team in November 2022 as an engineering lead, a year before
                I stepped into the Product Manager role. From the start, I was answering questions
                KL&A had never needed to answer before. What does product management look like when
                you're building for multiple states instead of a single client? How do you balance
                discovery with delivery in a regulated industry? What should I own, and what should
                the team own?
              </p>
              <p>
                I answered those questions by doing the work and adjusting as I learned. That meant
                leading through collaboration rather than direction, gathering input before major
                decisions, and creating space for engineers at every level to speak up, push back,
                and take ownership. We were building a complex 0-to-1 product with limited resources
                in a regulated industry. I needed the team to think, not just execute.
              </p>
              <p>
                It worked. Within six months, the team had developed a shared instinct for the work.
                We understood how each person thought, where their strengths naturally pulled them,
                and what they needed from one another. By mid-2024, my tech lead had grown into full
                ownership of the engineering side, consulting me on complex problems but driving the
                direction himself. I had become more of a subject-matter expert than an engineering
                leader. That felt like the right outcome. Over two years of building through
                ambiguity and shifting priorities, we had zero attrition. In my experience, that
                doesn't happen without psychological safety as a genuine foundation.
              </p>
              <p>
                But the role also presented a tension I didn't fully anticipate. To build a great
                product, I needed to stay close to the work: conducting discovery, designing
                solutions, and validating with users. To build a product organization, I needed to
                step back: create infrastructure, enable the team, and shift a custom development
                culture toward product thinking. I stayed in the doing far longer than I should
                have. That tension was never fully resolved. It just changed shape as the team grew,
                and it shaped almost every decision I made.
              </p>
            </section>
            <section>
              <h4>Learning to Listen at Scale</h4>
              <p>
                Building a commercial product required a fundamentally different approach than
                KL&A's traditional requirements-driven engagements with contracted clients. Part of
                defining the PM role was establishing what discovery should look like in this new
                context. After the conference in Portland, we realized we needed design thinking and
                a product mindset to serve multiple states, each implementing the federal program
                slightly differently. This changed our discovery process.
              </p>
              <p>
                I worked consistently with our internal SME in frequent meetings to understand
                regulations and current user workflows. We conducted focus group sessions with staff
                members across three states to understand state-level variations. We gathered
                feedback from 5 National WIC Association conferences between August 2023 and
                September 2025, showcasing new features at each as development milestones. Over time
                this created a rhythm: discover, design, develop, repeat. Features moved quickly
                because each one was grounded in real insight. Over 2+ years, I led 40+ discovery
                sessions incorporating insights from conferences and focus groups across more than
                30 distinct feature sets.
              </p>
              <p>
                Early in discovery, a clear pattern emerged: legacy systems with hard-coded values
                required full development cycles for regulatory updates, sometimes taking months.
                States needed flexibility to stay compliant without waiting for developers. This
                insight shaped our approach: we prioritized user-configurable features throughout
                the platform, from forms to workflows to validation rules. We also discovered that
                many states still relied on manual paper processes, such as breast pump loans or
                formula inventory, so we built configurable workflow automation to digitize these
                processes.
              </p>
              <p>
                This problem-solving approach proved itself in April 2024 when the USDA announced
                the WIC Final Food Rule at the Chicago conference <Link href='#ref-3' className='citation-ref'>[3]</Link>.
                States had 24 months to implement. Because we designed food packages to be
                user-configurable from the start, we validated the Final Food Rule updates against
                our system at the conference itself, demonstrating that our approach eliminated the
                lengthy release cycles that plagued legacy systems. This design thinking became one
                of our key competitive differentiators.
              </p>
            </section>
            <section>
              <h4>Designing for People, Not Just Compliance</h4>
              <p>
                WIC software had long been built around administrative compliance. We set out to
                build around people instead, and that distinction shaped every design decision we
                made. The most visible expression of this was our health journey, a compassionate
                timeline surfacing health insights, education, and support for participants. But the
                philosophy permeated the entire system, representing a shift from administrative
                case management to genuine supportive engagement.
              </p>
              <p>
                I applied Jakob's usability heuristics <Link href='#ref-4' className='citation-ref'>[4]</Link> throughout.
                Information architecture was a particular focus: I wanted the system to follow
                users' mental models rather than the underlying data structure, exposing
                functionality in a logical hierarchy with the most frequently used features within
                easy reach. I leaned into recognition over recall to reduce cognitive overload,
                maintained consistency across the design language, and built in both personalization
                at the user level and customization at the state level. Validation, error recovery,
                and microcopy were treated as core design work, not afterthoughts, written in plain
                language and aligned with a consistent brand voice.
              </p>
              <p>
                As the team grew, I recognized that the PM role wasn't only about making good
                product decisions. It was about building the infrastructure that would enable the
                team to make good decisions without me in the room. I developed a comprehensive
                design operations framework: process templates for research, design briefs,
                handoffs, and review checklists, a Figma organization and versioning system, UX
                writing guidelines covering voice, tone, and accessibility standards, a design
                delegation playbook defining roles and autonomy levels, and a design system with a
                component library and WCAG documentation. It was built to enable consistent
                delivery, faster onboarding, and higher velocity as the team scaled. Building it was
                also where the tension between doing and enabling was sharpest. I was doing
                significant design work while simultaneously building the systems that would
                eventually let me stop doing it myself.
              </p>
              <p>
                That tension showed up at the feature level, too. Risk management began as simple
                forms in early mockups. As we kept validating with our subject matter expert and
                understood the true regulatory complexity, we evolved the design into a step-based
                wizard that progressively guided users through each component. The final design
                looked nothing like the first. That only happened because we kept validating rather
                than assuming we understood the requirements upfront, and it ensured we met complex
                regulations while maintaining usability.
              </p>
            </section>
            <section>
              <h4>Where We Chose to Bet</h4>
              <p>
                The original plan was to build vendor management, then food management, and then the
                clinic. Discovery at the Portland and Chicago conferences revealed a gap. The
                concept of a participant-first program was strongly held but not reflected in the
                software that supported it. I advocated pivoting to an external-facing participant
                portal next. It was a strategic detour, and not an obvious one in a company built
                around delivering what clients specified.
              </p>
              <p>
                My aim was to balance risk and speed. We built full-stack infrastructure for
                features we knew clinic would need (participant records, households, certification
                periods) while prototyping new participant-facing concepts (health journey,
                achievements, breastfeeding support) for rapid customer validation at minimal
                engineering cost.
              </p>
              <p>
                The participant portal was a success. The response in Baltimore confirmed we had
                identified the right direction. The participant-first philosophy became our North
                Star.
              </p>
              <p>
                We invested in configurability as a strategic choice. Rather than custom-coding per
                state, we selectively focused on where states clearly had divergent approaches, such
                as workflow processes, form content in specific areas, and algorithms. This meant we
                could build a more maintainable, scalable product tailored to their programs with
                less engineering work. Where workflows and user needs were consistent, we maintained
                standard implementations. This architectural choice enabled true COTS scalability.
                It meant we could spend our engineering investment where it mattered most: on the
                features that made the product worth buying.
              </p>
            </section>
            <section>
              <h4>Validation & Outcomes</h4>
              <p>
                Over two years, we validated our product direction through five national conference
                demonstrations, direct stakeholder engagement, and alignment with external research.
                Several states expressed strong commercial interest, though translating that
                interest into contracts required navigating the realities of government procurement
                cycles. The $14.9 million federal grant research findings{' '}
                <Link href='#ref-2' className='citation-ref'>[2]</Link> directly validated our product approach:
                participant-first, human-centered, modular, and licensable architecture aligned
                precisely with their recommendations for the modern WIC program.
              </p>
              <p>
                We delivered working demonstrations of vendor management, food management, and
                participant portal modules, showcasing critical workflows including vendor
                authorization, food package creation, and participant intake. The system supported
                state agencies with multiple local clinics. The comprehensive design system and
                operational framework focused on consistent delivery as the team scaled. We
                established the infrastructure foundation even as we continued building toward full
                certification workflows.
              </p>
              <p>
                The team grew from 4 to 10 over two years, with 2 promotions and 2 progressions into
                engineering leadership roles, while maintaining high code and design quality. This
                work taught me two critical lessons. First, championing product thinking,
                configurability, scalability, and architecture in a custom development culture
                required constant education and reinforcement. The biggest challenge wasn't
                technical. It was shifting the mindset from "build what this client needs" to "build
                what enables all clients to succeed." Second, regulatory complexity reveals itself
                iteratively. You can't front-load all compliance discovery. Building continuous
                validation loops with SMEs and designing for configurability from the start proved
                essential to maintaining both compliance and usability.
              </p>
              <p>
                There is a third lesson that took longer to name. I stayed in the doing far longer
                than I should have. I was conducting discovery, leading design work, managing the
                team, and building operational infrastructure simultaneously, and for a long time,
                that felt like what the role required. In some ways, it was. But it also meant that
                when the team needed me to step back and operate at a truly strategic level, I
                didn't always have the bandwidth to get there. The tension between building the
                product and building the organization never fully resolved. That is what I would
                most want to do differently, and what I now understand most clearly.
              </p>
              <p>
                These lessons shaped my understanding of what product management fundamentally is.
                In hindsight, I would have invested in operational infrastructure, design system,
                process templates, and onboarding resources even earlier, before the team scaled. I
                would also formalize the product mindset in writing during onboarding, rather than
                reinforcing it only verbally throughout the project lifecycle. By the end, I
                understood that the PM role in a 0-to-1 environment is about holding the vision
                while building the right structure: the systems, documentation, and frameworks that
                empower the team to take ownership and execute independently. That understanding
                doesn't belong to this product or this company. It's the thing I'd carry into any
                0-to-1 environment and build from, earlier.
              </p>
            </section>
            <hr className='section-divider' />
            <section>
              <h4>References</h4>
              <p id='ref-1'>
              <sup className="citation-ref">[1]</sup> National WIC Association, "NWA Receives USDA Funding to Modernize WIC MIS,"
                September 2024.{' '}
                <Link href='https://www.nwica.org/press-releases/national-wic-association-receives-usda-funding-to-modernize-wic-management-information-systems'>
                  nwica.org
                </Link>
              </p>
              <p id='ref-2'>
              <sup className="citation-ref">[2]</sup> National WIC Association and Nava PBC, "Modernizing WIC's MIS: Findings from Year
                One of Research," 2025.{' '}
                <Link href='https://www.nwica.org/events/info/2025-nwa-technology-innovation-and-vendor-management-conference'>nwica.org</Link>
              </p>
              <p id='ref-3'>
              <sup className="citation-ref">[3]</sup> USDA Food and Nutrition Service, "Biden-Harris Administration Announces Finalized
                Science-Driven Updates to Foods Provided Through WIC," April 9, 2024.{' '}
                <Link href='https://www.fns.usda.gov/wic/fr-041824'>usda.gov</Link>
              </p>
              <p id='ref-4'>
              <sup className="citation-ref">[4]</sup> Jakob Nielsen, "10 Usability Heuristics for User Interface Design," Nielsen Norman
                Group, 1994, updated 2020.{' '}
                <Link href='https://www.nngroup.com/articles/ten-usability-heuristics/'>
                  nngroup.com
                </Link>
              </p>
            </section>
          </section>
        </div>
      </div>
    </section>
  )
}
