import Link from '@components/Link'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id='home' className={styles.hero}>
      <div className='container'>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>Hi, I'm Elizabeth.
            </h1>
            <p className={styles.heroSubtitle}>
              I build the systems that help teams do their best work.
            </p>
            <p className={styles.heroDescription}>
                Product strategist, design thinker, and engineer — bridging user needs, technical
                constraints, and human-centered culture.
            </p>
            <hr className='section-divider' />
            <p>
              <span className={styles.heroWork}>Building the Playbook While Running the Play:</span>
              <span className={styles.heroWorkSecondary}>0-to-1 Product Management at KL&A</span>
              <span><Link variant='inline' href='/work/wic-product-case-study'>Read the case study</Link></span>

            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
