'use client'

import { useState, useEffect, useRef } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [skipLinkFocused, setSkipLinkFocused] = useState(false)
  const skipLinkRef = useRef<HTMLAnchorElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
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
        alert('Thank you for your message! I\'ll get back to you soon.')
      } else {
        alert('There was an error sending your message. Please try again.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error sending your message. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
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
          <ul className={styles.navLinks} role="list">
            <li><a href="#about" aria-label="Navigate to About section">About</a></li>
            <li><a href="#resume" aria-label="Navigate to Resume section">Resume</a></li>
            <li><a href="#contact" aria-label="Navigate to Contact section">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroImage}>
              <img src="/portrait.png" alt="Elizabeth Means" />
            </div>
            <div className={styles.heroText}>
              <h1>Hi, I'm Elizabeth Means</h1>
              <p className={styles.heroSubtitle}>UX Designer & User Experience Researcher</p>
              <p className={styles.heroDescription}>
                I create meaningful digital experiences through user-centered design, 
                research, and thoughtful problem-solving.
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
              I'm a UX designer passionate about creating intuitive, accessible, 
              and delightful user experiences. With a focus on research-driven design, 
              I work to understand user needs and translate insights into beautiful, 
              functional interfaces.
            </p>
            <p>
              My approach combines empathy, creativity, and strategic thinking to solve 
              complex design challenges and deliver products that users love.
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
              View my professional experience and connect with me on LinkedIn.
            </p>
            <div className={styles.resumeLinks}>
              <a href="/resume.pdf" className={styles.resumeLink} download>
                Download Resume (PDF)
              </a>
              <a 
                href="https://www.linkedin.com/in/elizabeth-a-means/" 
                className={styles.resumeLink}
                target="_blank" 
                rel="noopener noreferrer"
              >
                View on LinkedIn
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
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Feel free to reach out through the form or connect with me 
                on social media.
              </p>
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <strong>Email</strong>
                  <a href="mailto:hi@elizabethmeans.com">hi@elizabethmeans.com</a>
                </div>
                <div className={styles.contactItem}>
                  <strong>LinkedIn</strong>
                  <a href="https://www.linkedin.com/in/elizabeth-a-means/" target="_blank" rel="noopener noreferrer">Connect with me</a>
                </div>
              </div>
            </div>

            <form name="contact" method="POST" className={styles.contactForm} data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contact" />
              <p className={styles.hidden}>
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>
              
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={6} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.btn} aria-label="Send contact form message">Send Message</button>
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

