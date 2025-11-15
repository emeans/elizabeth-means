'use client'

import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id='home' className={styles.hero}>
      <div className='container'>
        <div className={styles.heroContent}>
          {/* <div className={styles.heroImage}>
            <img
                src='/portrait.png'
                alt='Portrait photo of Elizabeth Means, Product Designer & Engineer'
            />
          </div> */}
          <div className={styles.heroText}>
            <h1><span className={styles.highlight}>Hi, I'm</span></h1>
            <h1><span className={styles.highlight}>Elizabeth Means</span></h1>
            <p className={styles.heroSubtitle}><span className={styles.highlight}>Product Designer & Engineer</span></p>
            <p className={styles.heroDescription}>
              <span className={styles.highlight}>I bridge design and engineering—creating systems that work beautifully for both users
              and the teams who build them.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
