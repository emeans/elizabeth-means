'use client'

import { useState, useEffect, useRef } from 'react'
import styles from './ContactForm.module.css'
import Button from '@components/primitives/Button'

export default function ContactForm() {
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

    if (!formData.name.trim()) {
      errors.name = 'Name is required'
      isValid = false
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required'
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address'
      isValid = false
    }

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

  useEffect(() => {
    if (formStatus === 'error') {
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

    if (!validateForm()) {
      setFormStatus('error')
      setStatusMessage('Please correct the errors below and try again.')
      return
    }

    const form = e.target as HTMLFormElement
    const formDataToSend = new FormData(form)
    formDataToSend.append('form-name', 'contact')

    try {
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
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors({
        ...formErrors,
        [name]: '',
      })
    }
    if (formStatus === 'error') {
      setFormStatus('idle')
      setStatusMessage('')
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <form
      ref={formRef}
      name='contact'
      method='POST'
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
        <label htmlFor='name'>Name </label>
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
        <label htmlFor='email'>Email </label>
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
        <label htmlFor='message'>Message </label>
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
          className={formErrors.message ? styles.inputError : ''}
        />
        {formErrors.message && (
          <div id='message-error' className={styles.fieldError} role='alert'>
            {formErrors.message}
          </div>
        )}
      </div>

      <Button
        type='submit'
        variant='primary'
        size='medium'
        fullWidth
        disabled={formStatus === 'submitting'}
        label={formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
      />
    </form>
  )
}
