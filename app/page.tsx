'use client'

import { useState, useEffect, useRef } from 'react'
import styles from './page.module.css'
import Hero from './components/Hero/Hero'
import About from './components/About'
import Resume from './components/Resume/Resume'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

export default function Home() {
  const [skipLinkFocused, setSkipLinkFocused] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const skipLinkRef = useRef<HTMLAnchorElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  // Track window size for responsive menu
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768
    }
    return false
  })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const checkIsMobile = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile((prevIsMobile) => {
        // Close menu if resizing from mobile to tablet/desktop
        if (prevIsMobile && !mobile) {
          setMobileMenuOpen(false)
        }
        return mobile
      })
    }

    // Check on mount
    checkIsMobile()

    // Listen for resize events (throttled)
    let timeoutId: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(checkIsMobile, 100)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timeoutId)
    }
  }, [])

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
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  // Close mobile menu when clicking outside or on escape key, and manage focus
  useEffect(() => {
    if (!isMobile) {
      return
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
        // Return focus to hamburger button after menu closes
        setTimeout(() => {
          const hamburger = document.querySelector(
            `button[aria-controls="mobile-menu"]`,
          ) as HTMLButtonElement
          if (hamburger) {
            hamburger.focus()
          }
        }, 50)
      }
    }

    if (mobileMenuOpen && isMobile) {
      document.addEventListener('keydown', handleEscape)
     
      // Focus first link in menu when it opens
      const firstLink = mobileMenuRef.current?.querySelector('a') as HTMLAnchorElement
      if (firstLink) {
        setTimeout(() => {
          firstLink.focus()
        }, 100)
      }
    } 

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [mobileMenuOpen, isMobile])

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
      <a href='#main-content' className={styles.skipLink} ref={skipLinkRef}>
        Skip to main content
      </a>
      <main className={`${styles.mainContainer} ${skipLinkFocused ? styles.skipLinkActive : ''}`}>
        {/* Navigation */}
        {mobileMenuOpen && isMobile && (
          <div
            className={styles.mobileMenuOverlay}
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden='true'
          />
        )}
        <nav className={styles.nav}>
          <div className={styles.navContainer}>
            <a href='#home' className={styles.logo} onClick={() => setMobileMenuOpen(false)}>
              Elizabeth Means
            </a>
            <button
              className={styles.hamburger}
              onClick={() => {
                if (isMobile) {
                  setMobileMenuOpen((prev) => !prev)
                }
              }}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls='mobile-menu'>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
            </button>
            <div
              className={styles.navRight}
              id='mobile-menu'
              ref={mobileMenuRef}
              aria-hidden={isMounted && isMobile && !mobileMenuOpen ? 'true' : 'false'}>
              <ul className={styles.navLinks} role='list'>
                <li>
                  <a
                    href='#main-content'
                    aria-label='Navigate to About section'
                    onClick={() => {
                        if (isMobile) {
                          setMobileMenuOpen(false)
                        }
                      }}>
                    About
                  </a>
                </li>
                <li>
                  <a
                    href='#resume'
                    aria-label='Navigate to Resume section'
                    onClick={() => {
                        if (isMobile) {
                          setMobileMenuOpen(false)
                        }
                      }}>
                    Resume
                  </a>
                </li>
                <li>
                  <a
                    href='#contact'
                    aria-label='Navigate to Contact section'
                    onClick={() => {
                        if (isMobile) {
                          setMobileMenuOpen(false)
                        }
                      }}>
                    Contact
                  </a>
                </li>
              </ul>
              <button
                className={styles.themeToggle}
                onClick={toggleTheme}
                aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}>
                <span className={styles.themeToggleIcon} aria-hidden='true'>
                  {theme === 'light' ? '🌙' : '☀️'}
                </span>
                <span className={styles.themeToggleText}>
                  {theme === 'light' ? 'Dark' : 'Light'}
                </span>
              </button>
            </div>
          </div>
        </nav>

        <Hero />
        <About />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
