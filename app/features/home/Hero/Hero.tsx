import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id='home' className={styles.hero}>
      <div className='container'>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1><span>Hi, I'm Elizabeth&nbsp;Means</span></h1>
            <p className={styles.heroSubtitle}><span>I build the systems that help teams do their best work.</span></p>
            <p className={styles.heroDescription}>
              <span>Product strategist, design thinker, and engineer — bridging user needs, technical constraints, and human-centered culture.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
