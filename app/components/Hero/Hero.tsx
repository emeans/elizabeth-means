'use client'

import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id='home' className={styles.hero}>
      <div className='container'>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1><span>Hi, I'm Elizabeth&nbsp;Means</span></h1>
            <p className={styles.heroSubtitle}><span>Product Designer & Engineer</span></p>
            <p className={styles.heroDescription}>
              <span>I bridge design and engineering—creating systems that work beautifully for both users
              and the teams who build them.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
