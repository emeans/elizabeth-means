'use client'

import { useState, useRef, useEffect } from 'react'
import styles from './Contact.module.css'

const EMAIL = 'hi@elizabethmeans.com'

/**
 * Contact blurb and heading. Compose with ContactForm in the footer
 * to control layout (e.g. grid, order, stacking).
 */
export default function Contact() {
  const [showCopied, setShowCopied] = useState(false)
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current)
    }
  }, [])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL)
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current)
      setShowCopied(true)
      hideTimeoutRef.current = setTimeout(() => setShowCopied(false), 5000)
    } catch {
      setShowCopied(false)
    }
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
      {showCopied && (
        <div
          className={styles.toast}
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className={`material-symbols-outlined ${styles.toastIcon}`} aria-hidden>
            check
          </span>
          Email Copied!
        </div>
      )}
    </div>
  )
}
