import styles from './Footer.module.css'
import Contact from '@features/shared/Contact'
import ContactForm from '@features/shared/ContactForm'
import GitHubIcon from '@features/shared/GitHubIcon'
import LinkedInIcon from '@features/shared/LinkedInIcon'
import Link from '@components/navigation/Link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section id='contact' className='section'>
        <div className='container'>
          <div className='section-content'>
            <Contact />
            <ContactForm />
            <div className={styles.copyrightLinks}>
              <p>&copy; {new Date().getFullYear()} Elizabeth Means. All rights reserved.</p>
              <span>
                <Link
                  href='https://www.linkedin.com/in/elizabeth-a-means/'
                  external
                  variant='standalone'
                  hideExternalIcon
                  aria-label='LinkedIn profile'>
                  <LinkedInIcon aria-hidden />
                </Link>
                &nbsp;&nbsp;
                <Link
                  href='https://github.com/emeans'
                  external
                  variant='standalone'
                  hideExternalIcon
                  aria-label='GitHub profile'>
                  <GitHubIcon aria-hidden />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}
