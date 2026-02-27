import Link from '@components/Link'
import MetricsCard from '@/components/design-system/MetricsCard'
import styles from '../WicCaseStudy.module.css'
import PullQuote from '@/components/design-system/PullQuote'
import ContentImage from '@/components/design-system/ContentImage'
import Timeline from '@/components/design-system/Timeline'
export default function LearningToListen() {
  return (
    <section>
      <h2>Learning to Listen at Scale</h2>
      <p>
        Building a commercial product required a fundamentally different approach than KL&A's
        traditional requirements-driven engagements with contracted clients. Part of defining the PM
        role was establishing what discovery should look like in this new context. After the
        conference in Portland, we realized we needed design thinking and a product mindset to serve
        multiple states, each implementing the federal program slightly differently. This changed
        our discovery process.
      </p>
      <Timeline
        items={[
          {
            value: 'September 27-29, 2023 | Portland, OR',
            title: '2023 NWA WIC Technology, Innovation, and Vendor Management Conference',
            description:
              'Showcased vendor management including vendor authorization workflow and compliance.',
          },
          {
            value: 'April 7-10, 2024 | Chicago, IL',
            title: '2024 NWA Annual Education and Training Conference',
            description:
              'Showcased food management including food package creation and food package tailoring demo.',
          },
          {
            value: 'April 9, 2024',
            title: 'USDA announced the WIC Final Food Rule',
          },
          {
            value: 'November 19-21, 2024 | Baltimore, MD',
            title: '2024 NWA Nutrition Education & Breastfeeding Conference',
            description:
              'Showcased the participant portal including communication preferences, health journey, achievements, and breastfeeding support via in-app messaging.',
          },
          {
            value: 'April 22-25, 2025 | Las Vegas, NV',
            title: '2025 NWA Annual Education and Training Conference',
            description: 'Showcased the participant pre-certification workflow and intake process.',
          },
          {
            value: 'September 3-5, 2025 | Minneapolis, MN',
            title: '2025 NWA Technology, Innovation, and Vendor Management Conference',
            description:
              'Showcased agency security and summaries, risk and referral management, and inventory management.',
          },
        ]}
      />
      <p>
        I worked consistently with our internal SME in frequent meetings to understand regulations
        and current user workflows. We conducted focus group sessions with staff members across
        three states to understand state-level variations. We gathered feedback from 5 National WIC
        Association conferences between August 2023 and September 2025, showcasing new features at
        each as development milestones. Over time this created a rhythm: discover, design, develop,
        repeat. Features moved quickly because each one was grounded in real insight. Over 2+ years,
        I led 40+ discovery sessions incorporating insights from conferences and focus groups across
        more than 30 distinct feature sets.
      </p>

      <aside className={`${styles.aside} ${styles.inline}`}>
        <div className={styles.asideInner}>
          <MetricsCard
            metrics={[
              { value: '40+', description: 'discovery sessions' },
              { value: '30+', description: 'distinct feature sets' },
              { value: '5', description: 'NWA conferences' },
              { value: '3', description: 'state focus groups' },
            ]}
          />
        </div>
      </aside>
      <p>
        Early in discovery, a clear pattern emerged: legacy systems with hard-coded values required
        full development cycles for regulatory updates, sometimes taking months. States needed
        flexibility to stay compliant without waiting for developers. This insight shaped our
        approach: we prioritized user-configurable features throughout the platform, from forms to
        workflows to validation rules. We also discovered that many states still relied on manual
        paper processes, such as breast pump loans or formula inventory, so we built configurable
        workflow automation to digitize these processes.
      </p>
      <p>
        This problem-solving approach proved itself in April 2024 when the USDA announced the WIC
        Final Food Rule at the Chicago conference{' '}
        <Link href='#ref-3' className='citation-ref'>
          [3]
        </Link>
        . States had 24 months to implement. Because we designed food packages to be
        user-configurable from the start, we validated the Final Food Rule updates against our
        system at the conference itself, demonstrating that our approach eliminated the lengthy
        release cycles that plagued legacy systems. This design thinking became one of our key
        competitive differentiators.
      </p>
      <ContentImage
        src='/images/wic-case-study/wic-admin-food-package-configuration.png'
        alt='WIC Admin Food Package Configuration'
      />
    </section>
  )
}
