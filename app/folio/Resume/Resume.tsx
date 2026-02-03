import styles from './Resume.module.css'
import Link from '../../components/design-system/Link/Link'

export default function Resume() {
  return (
    <section id='resume' className={`section ${styles.resumeSection}`}>
      <div className='container'>
        <div className='sectionContent'>
          <h2>Resume</h2>
          <p className={styles.resumeDescription}>
            Want to know more about my experience? Download my resume, view my
            <span>
                &nbsp;
                <a
                    href='https://www.linkedin.com/in/elizabeth-a-means/'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='LinkedIn'>
                    LinkedIn
                </a>
            </span>{' '}
            or
                <span>
                &nbsp;
                <a
                    href='https://github.com/emeans'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='GitHub'>
                    GitHub
                </a>
            </span>
            .
          </p>

            <Link variant="cta" href="/Elizabeth-Means-Resume.pdf" download>
                Download Resume (PDF)
            </Link>
        </div>
      </div>
    </section>
  )
}
