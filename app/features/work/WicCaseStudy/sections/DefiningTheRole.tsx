import MetricsCard from '@/components/design-system/MetricsCard'
import styles from '../WicCaseStudy.module.css'
import PullQuote from '@/components/design-system/PullQuote'
export default function DefiningTheRole() {
  return (
    <section>
      <h2 className='text-lg'>Defining the Role by Doing the Work</h2>
      <p>
        I joined the WIC product team in November 2022 as an engineering lead, a year before I
        stepped into the Product Manager role. From the start, I was answering questions KL&A had
        never needed to answer before. What does product management look like when you're building
        for multiple states instead of a single client? How do you balance discovery with delivery
        in a regulated industry? What should I own, and what should the team own?
      </p>
      <p>
        I answered those questions by doing the work and adjusting as I learned. That meant leading
        through collaboration rather than direction, gathering input before major decisions, and
        creating space for engineers at every level to speak up, push back, and take ownership. We
        were building a complex 0-to-1 product with limited resources in a regulated industry. I
        needed the team to think, not just execute.
      </p>
      <p>
        It worked. Within six months, the team had developed a shared instinct for the work. We
        understood how each person thought, where their strengths naturally pulled them, and what
        they needed from one another. By mid-2024, my tech lead had grown into full ownership of the
        engineering side, consulting me on complex problems but driving the direction himself. I had
        become more of a subject-matter expert than an engineering leader and that felt like the right
        outcome. Over two years of building through ambiguity and shifting priorities, we had zero
        attrition. In my experience, that doesn't happen without psychological safety as a genuine
        foundation and by becoming human-centered internally, too.
      </p>
      <aside className={`${styles.aside} ${styles.inline}`}>
        <div className={styles.asideInner}>
          <MetricsCard value="100%" description="retention over two years" />
          <PullQuote quote="We had become human-centered internally, too." />
        </div>
      </aside>
      <p>
        But the role also presented a tension I didn't fully anticipate. To build a great product, I
        needed to stay close to the work: conducting discovery, designing solutions, and validating
        with users. To build a product organization, I needed to step back: create infrastructure,
        enable the team, and shift a custom development culture toward product thinking. I stayed in
        the doing far longer than I should have. That tension was never fully resolved. It just
        changed shape as the team grew, and it shaped almost every decision I made.
      </p>
    </section>
  )
}
