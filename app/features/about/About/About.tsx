import Link from '@components/navigation/Link'

export default function About() {
  return (
    <div className='section-content'>
      <h2>About Me</h2>
      <p>
        I started in art, and I never really left. Everything I've built since carries the same
        question I was asking at eighteen: can this be both beautiful and functional? I brought that
        question into computer science, spent a decade as a full-stack engineer and engineering
        leader, and found what energizes me most: understanding people's needs and synthesizing them
        into solutions that work for users, businesses, and the teams building them.
      </p>
      <p>
        I'm drawn to work that meets people where they are, without judgment, at moments when it
        matters. Most recently, I led product development for a WIC management information system.
        WIC sits at the intersection of food, health, and human dignity, the kind of mission that
        pulls me in. Over two years, we validated a participant-first, human-centered architecture
        against $14.9M in federal research findings. I learned a great deal about what it takes to
        build product quality into a culture, and what gets lost when speed wins the argument
        instead.
      </p>
      <p>
        What I bring is rare: technical credibility from shipping production systems, design
        thinking from building design systems and leading discovery, and the people leadership to
        grow teams that continuously learn and sustain themselves. I'm currently completing a UX
        Research & Design certification from the University of Michigan, formalizing a practice I've
        been building for years, and actively seeking my next role with a small, mission-driven team
        where the work is hard and integrated product thinking isn't negotiable.
      </p>
      <hr className='section-divider' />
      <p>
        <span className='text-bold'>Want the full picture?</span> Download my resume or connect with
        me on LinkedIn and GitHub.
      </p>
      <Link variant='inline' href='/downloads/Elizabeth-Means-Resume-Web.pdf' download>
        Download Resume (PDF)
      </Link>
      &nbsp;&nbsp;&nbsp;
      <Link variant='inline' href='https://www.linkedin.com/in/elizabeth-a-means/' external>
        LinkedIn
      </Link>
      &nbsp;&nbsp;&nbsp;
      <Link variant='inline' href='https://github.com/emeans' external>
        Github
      </Link>
    </div>
  )
}
