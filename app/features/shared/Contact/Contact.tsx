'use client'

import styles from './Contact.module.css'

const EMAIL = 'hi@elizabethmeans.com'

/**
 * Contact blurb and heading. Compose with ContactForm in the footer
 * to control layout (e.g. grid, order, stacking).
 */
export default function Contact() {
  function copyEmail() {
    navigator.clipboard.writeText(EMAIL)
  }

  return (
    <div className={styles.contactInfo}>
      <h2>Get In Touch</h2>
      <p>
        I'm currently open to new opportunities. Whether you have a role in mind or just want to
        connect, I'd love to hear from you. You can also reach me directly at{' '}
        <span className={styles.emailRow}>
          <span className={styles.email}>{EMAIL}</span>
          <button
            type="button"
            className={styles.copyButton}
            onClick={copyEmail}
            aria-label="Copy email address"
            title="Copy email"
          >
            <span
              className={`material-symbols-outlined ${styles.copyIcon}`}
              aria-hidden
            >
              content_copy
            </span>
          </button>
        </span>
        .
      </p>
    </div>
  )
}
