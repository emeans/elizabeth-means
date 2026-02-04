import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id='home' className={styles.hero}>
      <div className='container'>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1><span>Hi, I'm Elizabeth&nbsp;Means</span></h1>
            <p className={styles.heroSubtitle}><span>Product • Design • Engineering</span></p>
            <p className={styles.heroDescription}>
              <span>Creating solutions that are both beautiful and buildable.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
