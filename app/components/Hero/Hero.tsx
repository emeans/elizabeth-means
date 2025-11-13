'use client'

import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroImage}>
            <img src="/portrait.png" alt="Portrait photo of Elizabeth Means, Product Designer & Engineer" />
          </div>
          <div className={styles.heroText}>
            <h1>Hi, I'm Elizabeth Means</h1>
            <p className={styles.heroSubtitle}>Product Designer & Engineer</p>
            <p className={styles.heroDescription}>
              I bridge design and engineering—creating systems that work beautifully for both users and the teams who build them.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

