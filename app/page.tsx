'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

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

  return (
    <main>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <a href="#home" className={styles.logo}>Elizabeth Means</a>
          <ul className={styles.navLinks}>
            <li><a href="#about">About</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1>Hi, I'm Elizabeth Means</h1>
            <p className={styles.heroSubtitle}>UX Designer & User Experience Researcher</p>
            <p className={styles.heroDescription}>
              I create meaningful digital experiences through user-centered design, 
              research, and thoughtful problem-solving.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
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
          <h2>Resume</h2>
          
          {/* Experience */}
          <div className={styles.resumeSection}>
            <h3>Experience</h3>
            
            <div className={styles.resumeItem}>
              <div className={styles.resumeItemHeader}>
                <h4>Senior UX Designer</h4>
                <span className={styles.resumeDate}>2022 - Present</span>
              </div>
              <p className={styles.resumeCompany}>Company Name</p>
              <ul className={styles.resumeDetails}>
                <li>Led user research initiatives and translated insights into design solutions</li>
                <li>Collaborated with cross-functional teams to deliver user-centered products</li>
                <li>Created wireframes, prototypes, and high-fidelity designs</li>
                <li>Conducted usability testing and iterated based on feedback</li>
              </ul>
            </div>

            <div className={styles.resumeItem}>
              <div className={styles.resumeItemHeader}>
                <h4>UX Designer</h4>
                <span className={styles.resumeDate}>2020 - 2022</span>
              </div>
              <p className={styles.resumeCompany}>Company Name</p>
              <ul className={styles.resumeDetails}>
                <li>Designed user interfaces for web and mobile applications</li>
                <li>Performed user interviews and usability testing</li>
                <li>Created design systems and component libraries</li>
                <li>Worked closely with developers to ensure design implementation</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className={styles.resumeSection}>
            <h3>Education</h3>
            
            <div className={styles.resumeItem}>
              <div className={styles.resumeItemHeader}>
                <h4>Bachelor of Science in Design</h4>
                <span className={styles.resumeDate}>2016 - 2020</span>
              </div>
              <p className={styles.resumeCompany}>University Name</p>
            </div>
          </div>

          {/* Skills */}
          <div className={styles.resumeSection}>
            <h3>Skills</h3>
            
            <div className={styles.skillsGrid}>
              <div className={styles.skillCategory}>
                <h4>Design</h4>
                <ul className={styles.skillList}>
                  <li>User Research</li>
                  <li>Wireframing</li>
                  <li>Prototyping</li>
                  <li>UI Design</li>
                  <li>Design Systems</li>
                </ul>
              </div>

              <div className={styles.skillCategory}>
                <h4>Tools</h4>
                <ul className={styles.skillList}>
                  <li>Figma</li>
                  <li>Adobe XD</li>
                  <li>Sketch</li>
                  <li>InVision</li>
                  <li>Miro</li>
                </ul>
              </div>

              <div className={styles.skillCategory}>
                <h4>Research</h4>
                <ul className={styles.skillList}>
                  <li>User Interviews</li>
                  <li>Usability Testing</li>
                  <li>Surveys</li>
                  <li>Personas</li>
                  <li>Journey Mapping</li>
                </ul>
              </div>
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
                  <a href="mailto:hello@elizabethmeans.com">hello@elizabethmeans.com</a>
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

              <button type="submit" className={styles.btn}>Send Message</button>
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
  )
}

