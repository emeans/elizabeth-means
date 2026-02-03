'use client'

import { useState, useEffect, useRef } from 'react'
import styles from './Contact.module.css'
import Button from '../../components/design-system/Button/Button'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')
  const statusLiveRegionRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const validateForm = (): boolean => {
    const errors = {
      name: '',
      email: '',
      message: '',
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
          const errorField = document.getElementById(firstError) as
            | HTMLInputElement
            | HTMLTextAreaElement
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
      // Convert FormData to URLSearchParams format
      const params = new URLSearchParams()
      for (const [key, value] of formDataToSend.entries()) {
        params.append(key, value.toString())
      }

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      })

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' })
        setFormErrors({ name: '', email: '', message: '' })
        setFormStatus('success')
        setStatusMessage("Thank you for your message! I'll get back to you soon.")
        // ARIA live region will automatically announce to screen readers
        // Scroll to top of form to show success message
        setTimeout(() => {
          if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 100)
      } else {
        setFormStatus('error')
        setStatusMessage('There was an error sending your message. Please try again.')
      }
    } catch (error) {
      // Log to error tracking service in production
      if (process.env.NODE_ENV === 'development') {
        console.error('Form submission error:', error)
      }
      setFormStatus('error')
      setStatusMessage('There was an error sending your message. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    // Clear error for this field when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors({
        ...formErrors,
        [name]: '',
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
          email: 'Please enter a valid email address',
        })
      } else if (name === 'message' && value.trim().length < 10) {
        setFormErrors({
          ...formErrors,
          message: 'Message must be at least 10 characters long',
        })
      }
    }
  }

  return (
    <section id='contact' className='section'>
      <div className='container'>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h2>Get In Touch</h2>
            <p>
              I&apos;d love to hear from you—whether you want to discuss a potential opportunity,
              collaborate on a project, or just chat about design and engineering.
            </p>
            {/* <p>
              Fill out the form to send me a message or email me directly at
              <span className={styles.contactItem}>
                &nbsp;
                <a href='mailto:hi@elizabethmeans.com'>hi@elizabethmeans.com</a>
              </span>
              .
            </p> */}
          </div>

          <form
            ref={formRef}
            name='contact'
            method='POST'
            className={styles.contactForm}
            data-netlify='true'
            data-netlify-honeypot='bot-field'
            onSubmit={handleSubmit}
            noValidate>
            <input type='hidden' name='form-name' value='contact' />
            <p className={styles.hidden}>
              <label>
                Don&apos;t fill this out if you&apos;re human: <input name='bot-field' />
              </label>
            </p>

            {/* ARIA Live Region for form status */}
            <div
              ref={statusLiveRegionRef}
              role='status'
              aria-live='polite'
              aria-atomic='true'
              aria-relevant='additions text'
              className={styles.statusMessage}>
              {statusMessage && (
                <div
                  className={formStatus === 'success' ? styles.successMessage : styles.errorMessage}
                  role='alert'>
                  {statusMessage}
                </div>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor='name'>
                Name{' '}
                <span className={styles.requiredIndicator} aria-label='required'>
                  *
                </span>
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                aria-required='true'
                aria-invalid={formErrors.name ? 'true' : 'false'}
                aria-describedby={formErrors.name ? 'name-error' : undefined}
                className={formErrors.name ? styles.inputError : ''}
              />
              {formErrors.name && (
                <div id='name-error' className={styles.fieldError} role='alert'>
                  {formErrors.name}
                </div>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor='email'>
                Email{' '}
                <span className={styles.requiredIndicator} aria-label='required'>
                  *
                </span>
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                aria-required='true'
                aria-invalid={formErrors.email ? 'true' : 'false'}
                aria-describedby={formErrors.email ? 'email-error' : undefined}
                className={formErrors.email ? styles.inputError : ''}
              />
              {formErrors.email && (
                <div id='email-error' className={styles.fieldError} role='alert'>
                  {formErrors.email}
                </div>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor='message'>
                Message{' '}
                <span className={styles.requiredIndicator} aria-label='required'>
                  *
                </span>
              </label>
              <textarea
                id='message'
                name='message'
                rows={6}
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                aria-required='true'
                aria-invalid={formErrors.message ? 'true' : 'false'}
                aria-describedby={formErrors.message ? 'message-error' : undefined}
                className={formErrors.message ? styles.inputError : ''}></textarea>
              {formErrors.message && (
                <div id='message-error' className={styles.fieldError} role='alert'>
                  {formErrors.message}
                </div>
              )}
            </div>

            <Button type='submit' variant='primary' size='large' disabled={formStatus === 'submitting'}>
              {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
