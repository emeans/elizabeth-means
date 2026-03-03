'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import styles from './AppLayout.module.css'
import Link from '@components/Link'
import HamburgerButton from '@components//HamburgerButton'
import SkipLink from '@components/SkipLink'
import LogoLink from '@components/LogoLink'
import ThemeToggle from '@components/ThemeToggle'
import Favicon from '@features/shared/Favicon/Favicon'
import Footer from '@features/shared/Footer'

const navItems = [
  { href: '/work/wic-product-case-study', label: 'WIC Case Study', ariaLabel: 'Go to Case Study page' },
  { href: '/lab', label: 'Lab', ariaLabel: 'Go to Lab page' },
  { href: '/about', label: 'About', ariaLabel: 'Go to About page' },
] as const

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const hamburgerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setIsMounted(true)
    const checkIsMobile = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile((prev) => {
        if (prev && !mobile) setMobileMenuOpen(false)
        return mobile
      })
    }
    checkIsMobile()
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

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const initialTheme = savedTheme || systemTheme
    setTheme(initialTheme)
    document.documentElement.setAttribute('data-theme', initialTheme)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))

  useEffect(() => {
    if (!isMobile) return
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
        setTimeout(() => hamburgerRef.current?.focus(), 50)
      }
    }
    if (mobileMenuOpen && isMobile) {
      document.addEventListener('keydown', handleEscape)
      const firstLink = mobileMenuRef.current?.querySelector('a') as HTMLAnchorElement
      if (firstLink) setTimeout(() => firstLink.focus(), 100)
    }
    return () => document.removeEventListener('keydown', handleEscape)
  }, [mobileMenuOpen, isMobile])

  const closeMobileMenu = () => setMobileMenuOpen(false)
  const pathname = usePathname()

  const isNavActive = (href: string) => {
    if (pathname == null) return false
    const path = pathname.replace(/\/$/, '') || '/'
    const base = href.replace(/\/$/, '') || '/'
    return path === base || path.startsWith(base + '/')
  }

  return (
    <>
      <Favicon theme={theme} />
      <SkipLink
        href="#main-content"
        content={
          <main className={styles.mainContainer}>
          {mobileMenuOpen && isMobile && (
            <div
              className={styles.mobileMenuOverlay}
              onClick={closeMobileMenu}
              aria-hidden="true"
            />
          )}
          <nav className={styles.nav}>
            <div className={styles.navContainer}>
              <LogoLink onClick={closeMobileMenu} href="/">
                <span className={styles.firstName}>elizabeth</span><span className={styles.lastName}>means</span><span className={styles.period}>.</span>
              </LogoLink>
              {isMounted && isMobile && (
                <HamburgerButton
                  ref={hamburgerRef}
                  isOpen={mobileMenuOpen}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-controls="mobile-menu"
                />
              )}
              <div
                className={styles.navRight}
                id="mobile-menu"
                ref={mobileMenuRef}
                aria-hidden={isMounted && isMobile && !mobileMenuOpen ? 'true' : 'false'}
              >
                <ul className={styles.navLinks} role="list">
                  {navItems.map(({ href, label, ariaLabel }) => (
                    <li key={href}>
                      <Link
                        variant="nav"
                        blockLayout={isMobile}
                        href={href}
                        aria-label={ariaLabel}
                        active={isNavActive(href)}
                        onClick={closeMobileMenu}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ThemeToggle theme={theme} onToggle={toggleTheme} />
              </div>
            </div>
          </nav>
          <div id="main-content">
            {children}
            <Footer />
          </div>
        </main>
      }
    />
    </>
  )
}
