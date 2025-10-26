'use client'

import { useState, useEffect } from 'react'
import styles from './Header.module.css'
import ThemeToggle from './ThemeToggle'

function getTimeOfDayGreeting(): string {
  const hour = new Date().getHours()
  
  if (hour >= 5 && hour < 12) return 'Good morning'
  if (hour >= 12 && hour < 17) return 'Good afternoon'
  if (hour >= 17 && hour < 21) return 'Good evening'
  return 'Good night'
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    setGreeting(getTimeOfDayGreeting())
    
    // Update greeting every minute
    const interval = setInterval(() => {
      setGreeting(getTimeOfDayGreeting())
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  const navLinks = [
    { label: 'Weather', href: '#weather' },
    { label: 'Metrics', href: '#metrics' },
    { label: 'SDG Goals', href: '#sdg-goals' },
    { label: 'COP28', href: '#cop28' },
  ]

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
            <path d="M16 4 C12 8 10 12 10 16 C10 22 13 26 16 26 C19 26 22 22 22 16 C22 12 20 8 16 4" fill="currentColor" opacity="0.3" />
          </svg>
          <div className={styles.logoContent}>
            <span className={styles.logoText}>Ecospace</span>
            {greeting && <span className={styles.greeting}>{greeting}! 👋</span>}
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Theme Toggle & Mobile Menu */}
        <div className={styles.actions}>
          <ThemeToggle />
          <button
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
