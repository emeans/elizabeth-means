import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id='home' className={styles.hero}>
      <div className='container'>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>Hi, I'm Elizabeth.</h1>
            <p className={styles.heroSubtitle}>
              I bridge research, design, and engineering, in the work and in the culture.
            </p>
            <p className={styles.heroDescription}>
              Drawn to mission-driven teams where the problem is hard, the stakes are human, and
              integrated product thinking shapes every decision.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
