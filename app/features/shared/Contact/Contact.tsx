import styles from './Contact.module.css'

/**
 * Contact blurb and heading. Compose with ContactForm in the footer
 * to control layout (e.g. grid, order, stacking).
 */
export default function Contact() {
  return (
    <div className={styles.contactInfo}>
      <h2>Get In Touch</h2>
      <p>
        I'm currently open to new opportunities. Whether you have a role in mind or just want to
        connect, I'd love to hear from you.
      </p>
    </div>
  )
}
