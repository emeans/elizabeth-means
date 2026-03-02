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
          </div>
        </div>
      </div>
    </section>
  )
}
