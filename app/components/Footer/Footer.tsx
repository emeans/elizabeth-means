'use client'

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <p>&copy; {new Date().getFullYear()} Elizabeth Means. All rights reserved.</p>
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/elizabeth-a-means/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
            <a href="https://github.com/emeans" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

