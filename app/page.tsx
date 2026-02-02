'use client'

import { useState, useEffect, useRef } from 'react'
import styles from './page.module.css'
import Link from './components/design-system/Link/Link'
import HamburgerButton from './components/design-system/HamburgerButton/HamburgerButton'
import Hero from './components/Hero/Hero'
import About from './components/About'
import Resume from './components/Resume/Resume'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import SkipLink from './components/design-system/SkipLink/SkipLink'
import LogoLink from './components/design-system/LogoLink/LogoLink'
import ThemeToggle from './components/design-system/ThemeToggle/ThemeToggle'

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  // Track window size for responsive menu (set in useEffect to avoid hydration mismatch)
  const [isMobile, setIsMobile] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const hamburgerRef = useRef<HTMLButtonElement>(null)

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
          if (hamburgerRef.current) {
            hamburgerRef.current.focus()
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

  return (
    <SkipLink
      href="#main-content"
      content={
        <main className={styles.mainContainer}>
          {/* Mobile menu overlay */}
        {mobileMenuOpen && isMobile && (
          <div
            className={styles.mobileMenuOverlay}
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden='true'
          />
        )}
        
        {/* Navigation */}
        <nav className={styles.nav}>
          <div className={styles.navContainer}>
          <LogoLink onClick={() => setMobileMenuOpen(false)} href='#home'>Elizabeth Means</LogoLink>

            {isMounted && isMobile && (
              <HamburgerButton
                ref={hamburgerRef}
                isOpen={mobileMenuOpen}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-controls='mobile-menu'
              />
            )}
            <div
              className={styles.navRight}
              id='mobile-menu'
              ref={mobileMenuRef}
              aria-hidden={isMounted && isMobile && !mobileMenuOpen ? 'true' : 'false'}>
              <ul className={styles.navLinks} role='list'>
                <li>
                  <Link
                    variant='nav'
                    blockLayout={isMobile}
                    href='#main-content'
                    aria-label='Navigate to About section'
                    onClick={() => {
                      if (isMobile) {
                        setMobileMenuOpen(false)
                      }
                    }}>
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    variant='nav'
                    blockLayout={isMobile}
                    href='#resume'
                    aria-label='Navigate to Resume section'
                    onClick={() => {
                      if (isMobile) {
                        setMobileMenuOpen(false)
                      }
                    }}>
                    Resume
                  </Link>
                </li>
                <li>
                  <Link
                    variant='nav'
                    blockLayout={isMobile}
                    href='#contact'
                    aria-label='Navigate to Contact section'
                    onClick={() => {
                      if (isMobile) {
                        setMobileMenuOpen(false)
                      }
                    }}>
                    Contact
                  </Link>
                </li>
              </ul>
              <ThemeToggle theme={theme} onToggle={toggleTheme} />
            </div>
          </div>
        </nav>

        <Hero />
        <About />
        <Resume />
        <Contact />
        <Footer />
        </main>
      }
    />
  )
}
