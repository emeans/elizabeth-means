'use client'

import { useState, useEffect, useRef } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')
  const [skipLinkFocused, setSkipLinkFocused] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const skipLinkRef = useRef<HTMLAnchorElement>(null)
  const statusLiveRegionRef = useRef<HTMLDivElement>(null)

  const validateForm = (): boolean => {
    const errors = {
      name: '',
      email: '',
      message: ''
    }
    let isValid = true

    // Validate name
    if (!formData.name.trim()) {
      errors.name = 'Name is required'
      isValid = false
    }

    // Validate email
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address'
      isValid = false
    }

    // Validate message
    if (!formData.message.trim()) {
      errors.message = 'Message is required'
      isValid = false
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long'
      isValid = false
    }

    setFormErrors(errors)
    return isValid
  }

  // Effect to focus on first error field after validation
  useEffect(() => {
    if (formStatus === 'error') {
      // Wait for DOM to update with error messages
      const timer = setTimeout(() => {
        const firstError = formErrors.name 
          ? 'name' 
          : formErrors.email 
          ? 'email' 
          : formErrors.message 
          ? 'message' 
          : null
        if (firstError) {
          const errorField = document.getElementById(firstError) as HTMLInputElement | HTMLTextAreaElement
          if (errorField) {
            errorField.focus()
            errorField.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }
        }
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [formErrors, formStatus])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')
    setStatusMessage('')
    setFormErrors({ name: '', email: '', message: '' })

    // Validate form
    if (!validateForm()) {
      setFormStatus('error')
      setStatusMessage('Please correct the errors below and try again.')
      return
    }

    const form = e.target as HTMLFormElement
    const formDataToSend = new FormData(form)
    formDataToSend.append('form-name', 'contact')
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend as any).toString()
      })
      
      if (response.ok) {
        setFormData({ name: '', email: '', message: '' })
        setFormErrors({ name: '', email: '', message: '' })
        setFormStatus('success')
        setStatusMessage('Thank you for your message! I\'ll get back to you soon.')
        // ARIA live region will automatically announce to screen readers
        // Scroll to top of form to show success message
        setTimeout(() => {
          const formElement = document.querySelector(`.${styles.contactForm}`) as HTMLElement
          if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 100)
      } else {
        setFormStatus('error')
        setStatusMessage('There was an error sending your message. Please try again.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setFormStatus('error')
      setStatusMessage('There was an error sending your message. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    // Clear error for this field when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      })
    }
    // Clear status message when user starts typing after error
    if (formStatus === 'error') {
      setFormStatus('idle')
      setStatusMessage('')
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Validate field on blur
    const { name, value } = e.target
    if (value.trim()) {
      if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setFormErrors({
          ...formErrors,
          email: 'Please enter a valid email address'
        })
      } else if (name === 'message' && value.trim().length < 10) {
        setFormErrors({
          ...formErrors,
          message: 'Message must be at least 10 characters long'
        })
      }
    }
  }

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const initialTheme = savedTheme || systemTheme
    setTheme(initialTheme)
    document.documentElement.setAttribute('data-theme', initialTheme)
  }, [])

  // Update theme when it changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const skipLink = skipLinkRef.current
    if (!skipLink) return

    const handleFocus = () => setSkipLinkFocused(true)
    const handleBlur = () => setSkipLinkFocused(false)

    skipLink.addEventListener('focus', handleFocus)
    skipLink.addEventListener('blur', handleBlur)

    return () => {
      skipLink.removeEventListener('focus', handleFocus)
      skipLink.removeEventListener('blur', handleBlur)
    }
  }, [])

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className={styles.skipLink}
        ref={skipLinkRef}
      >
        Skip to main content
      </a>
      <main className={`${styles.mainContainer} ${skipLinkFocused ? styles.skipLinkActive : ''}`}>
        {/* Navigation */}
        <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <a href="#home" className={styles.logo}>Elizabeth Means</a>
          <div className={styles.navRight}>
            <ul className={styles.navLinks} role="list">
              <li><a href="#main-content" aria-label="Navigate to About section">About</a></li>
              <li><a href="#resume" aria-label="Navigate to Resume section">Resume</a></li>
              <li><a href="#contact" aria-label="Navigate to Contact section">Contact</a></li>
            </ul>
            <button 
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              <span className={styles.themeToggleIcon} aria-hidden="true">
                {theme === 'light' ? '🌙' : '☀️'}
              </span>
              <span className={styles.themeToggleText}>
                {theme === 'light' ? 'Dark' : 'Light'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroImage}>
              <img src="/portrait.png" alt="Portrait photo of Elizabeth Means, Product Designer & Engineer" />
            </div>
            <div className={styles.heroText}>
              <h1>Hi, I'm Elizabeth Means</h1>
              <p className={styles.heroSubtitle}>Product Designer & Engineer</p>
              <p className={styles.heroDescription}>
                I bridge design and engineering—creating systems that work beautifully for both users and the teams who build them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="main-content" className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutContent}>
            <h2>About Me</h2>
            <p>
              My path to design has been unconventional. I started with an art foundation before transitioning to computer science, then spent a decade as a full-stack engineer and engineering leader. Along the way, I discovered what energizes me most: understanding what people need and creating solutions that work for both users and the teams building them.
            </p>
            <p>
              For the past two years, I've been leading product development for a management information system serving the WIC program. I conduct discovery sessions with stakeholders, create design solutions in Figma, and lead a cross-functional engineering team. I've also championed design systems thinking—co-founding my company's internal Design Group and publishing articles about user-centered design.
            </p>
            <p>
              I'm currently completing a UX Research & Design certification from the University of Michigan to formalize skills I've been developing through practice. I'm drawn to design systems, stakeholder discovery, and the challenge of creating experiences that are both beautiful and buildable.
            </p>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className={styles.resume}>
        <div className={styles.container}>
          <div className={styles.resumeContent}>
            <h2>Resume</h2>
            <p className={styles.resumeDescription}>
              Want to know more about my experience? 
              Download my resume, view my 
              <span className={styles.contactItem}>
                <a href="https://www.linkedin.com/in/elizabeth-a-means/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"> LinkedIn</a>
              </span> or 
              <span>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub"> GitHub</a>
              </span>.
            </p>
            <div className={styles.resumeLinks}>
              <a href="/elizabeth-meansresume.pdf" className={styles.resumeLink} download>
                Download Resume (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <h2>Get In Touch</h2>
              <p>
                I'd love to hear from you—whether you want to discuss a potential opportunity, collaborate on a project, or just chat about design and engineering. 
              </p>
              <p>Fill out the form to send me a message or email me directly at 
                <span className={styles.contactItem}>
                  <a href="mailto:hi@elizabethmeans.com"> hi@elizabethmeans.com</a>
                </span>.
              </p>
            </div>

            <form name="contact" method="POST" className={styles.contactForm} data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} noValidate>
              <input type="hidden" name="form-name" value="contact" />
              <p className={styles.hidden}>
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>

              {/* ARIA Live Region for form status */}
              <div
                ref={statusLiveRegionRef}
                role="status"
                aria-live="polite"
                aria-atomic="true"
                aria-relevant="additions text"
                className={styles.statusMessage}
              >
                {statusMessage && (
                  <div className={formStatus === 'success' ? styles.successMessage : styles.errorMessage} role="alert">
                    {statusMessage}
                  </div>
                )}
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="name">
                  Name <span className={styles.requiredIndicator} aria-label="required">*</span>
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  aria-required="true"
                  aria-invalid={formErrors.name ? 'true' : 'false'}
                  aria-describedby={formErrors.name ? 'name-error' : undefined}
                  className={formErrors.name ? styles.inputError : ''}
                />
                {formErrors.name && (
                  <div id="name-error" className={styles.fieldError} role="alert">
                    {formErrors.name}
                  </div>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">
                  Email <span className={styles.requiredIndicator} aria-label="required">*</span>
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  aria-required="true"
                  aria-invalid={formErrors.email ? 'true' : 'false'}
                  aria-describedby={formErrors.email ? 'email-error' : undefined}
                  className={formErrors.email ? styles.inputError : ''}
                />
                {formErrors.email && (
                  <div id="email-error" className={styles.fieldError} role="alert">
                    {formErrors.email}
                  </div>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">
                  Message <span className={styles.requiredIndicator} aria-label="required">*</span>
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={6} 
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  aria-required="true"
                  aria-invalid={formErrors.message ? 'true' : 'false'}
                  aria-describedby={formErrors.message ? 'message-error' : undefined}
                  className={formErrors.message ? styles.inputError : ''}
                ></textarea>
                {formErrors.message && (
                  <div id="message-error" className={styles.fieldError} role="alert">
                    {formErrors.message}
                  </div>
                )}
              </div>

              <button 
                type="submit" 
                className={styles.btn} 
                disabled={formStatus === 'submitting'}
                aria-disabled={formStatus === 'submitting'}
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <p>&copy; {new Date().getFullYear()} Elizabeth Means. All rights reserved.</p>
            <div className={styles.socialLinks}>
              <a href="https://www.linkedin.com/in/elizabeth-a-means/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
      </main>
    </>
  )
}

