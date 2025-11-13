'use client'

import styles from './Resume.module.css'

export default function Resume() {
  return (
    <section id='resume' className={styles.resume}>
      <div className={styles.container}>
        <div className={styles.resumeContent}>
          <h2>Resume</h2>
          <p className={styles.resumeDescription}>
            Want to know more about my experience? Download my resume, view my
            <span className={styles.contactItem}>
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
          <div className={styles.resumeLinks}>
            <a href='/Elizabeth-Means-Resume.pdf' className={styles.resumeLink} download>
                Download Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
