import Link from '@components/Link'

export default function About() {
  return (
    <section id='main-content' className='section'>
      <div className='container'>
        <div className='section-content'>
          <h2>About Me</h2>
          <p>
            My path here has been unconventional. I started with an art foundation before
            transitioning to computer science, then spent a decade as a full-stack engineer and
            engineering leader. Along the way I discovered what energizes me most: understanding
            people's needs and synthesizing them into solutions that work for users, businesses, and
            the teams building them.
          </p>
          <p>
            Most recently, I led product development for a management information system serving the
            WIC program. I conducted 40+ discovery sessions with stakeholders across three states,
            translated insights into product strategy and Figma design solutions, and led a
            cross-functional engineering team of 8. I presented at five national conferences,
            gathering user feedback to inform roadmap and prioritization decisions.
          </p>
          <p>
            I bring an unusual combination: technical credibility from shipping production systems,
            design thinking from championing design systems and creating 100+ high-fidelity mockups,
            product sense from turning complex user research into business strategy, and people
            leadership from building high-trust engineering teams. I'm currently completing a UX
            Research & Design certification from the University of Michigan. I'm drawn to roles
            where disciplines intersect — where building better processes, systems, and cultures
            makes everyone's work stronger.
          </p>
          <hr className='section-divider' />
          <p>
            <span className='text-bold'>Want the full picture?</span> Download my resume or connect
            with me on LinkedIn and GitHub.
          </p>
          <Link variant='inline' href='/Elizabeth-Means-Resume.pdf' download>
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
      </div>
    </section>
  )
}
