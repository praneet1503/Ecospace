'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './not-found.module.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { analyticsEvents } from '../lib/analytics'

export default function NotFound() {
  useEffect(() => {
    analyticsEvents.notFoundPageViewed()
  }, [])
  const quickLinks = [
    { label: 'Home', href: '/', icon: '🏠' },
    { label: 'Environmental Metrics', href: '/#metrics', icon: '📊' },
    { label: 'SDG Goals', href: '/#sdg-goals', icon: '🎯' },
    { label: 'COP28 Info', href: '/#cop28', icon: '🌍' },
  ]

  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.content}>
          <div className={styles.illustration}>
            <Image 
              src="/illustrations/404.svg" 
              alt="Lost in space - 404 error" 
              width={300} 
              height={300}
              priority
            />
          </div>

          <h1 className={styles.title}>Oops! We're Lost in Space</h1>
          <p className={styles.subtitle}>
            This page seems to have drifted into orbit. Let's get you back on track!
          </p>

          <div className={styles.quickLinks}>
            <p className={styles.quickLinksTitle}>Where would you like to go?</p>
            <div className={styles.linksGrid}>
              {quickLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={styles.linkCard}
                  onClick={() => analyticsEvents.notFoundLinkClicked(link.label)}
                >
                  <span className={styles.linkIcon}>{link.icon}</span>
                  <span className={styles.linkLabel}>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <Link 
            href="/" 
            className={styles.homeButton}
            onClick={() => analyticsEvents.notFoundLinkClicked('Home')}
          >
            Take Me Home 🚀
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
