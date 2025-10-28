'use client'

import { useState, useEffect } from 'react'
import styles from './page.module.css'
import Header from './components/Header'
import WeatherCard from './components/WeatherCard'
import MetricCard from './components/MetricCard'
import SDGSection from './components/SDGSection'
import COP28Section from './components/COP28Section'
import Footer from './components/Footer'
import EmptyState from './components/EmptyState'
import Confetti from './components/Confetti'
import { analyticsEvents } from '../lib/analytics'

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false)

  // Track scroll depth
  useEffect(() => {
    let maxScrollBucket = 0
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      const currentBucket = Math.floor(scrollPercentage / 25)
      if (currentBucket > maxScrollBucket) {
        maxScrollBucket = currentBucket
        analyticsEvents.scrollDepth(currentBucket * 25)
      }
    }

    // Track time on page
    const startTime = Date.now()
    const trackTime = () => {
      const duration = Math.round((Date.now() - startTime) / 1000)
      analyticsEvents.timeOnPage(duration)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('beforeunload', trackTime)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('beforeunload', trackTime)
    }
  }, [])

  const metrics: Array<{
    title: string
    value?: string | number
    unit?: string
    icon: string
    color: 'blue' | 'green' | 'yellow' | 'red'
    description: string
    dataKey?: string
  }> = [
    {
      title: 'Air Quality Index',
      icon: '💨',
      color: 'blue',
      description:
        'Clean air is a gift we often take for granted. This index measures pollutants like PM2.5 and PM10—lower numbers mean healthier air for all of us to breathe.',
      dataKey: 'airQuality',
    },
    {
      title: 'CO₂ Emissions',
      icon: '🏭',
      color: 'red',
      description:
        'The carbon dioxide in our atmosphere is rising faster than ever. By reducing emissions from fossil fuels, we can slow climate change and protect our planet.',
      dataKey: 'co2Levels',
    },
    {
      title: 'Temperature Anomaly',
      icon: '🌡️',
      color: 'yellow',
      description:
        'Our planet is warming. This shows how much global temperatures have risen above pre-industrial levels. The Paris Agreement aims to keep this under 1.5°C—every fraction of a degree matters.',
      dataKey: 'temperatureAnomaly',
    },
    {
      title: 'Forest Coverage',
      icon: '🌲',
      color: 'green',
      description:
        'Forests are Earth\'s lungs, storing carbon and sheltering countless species. With about 4 billion hectares remaining, protecting and restoring forests is crucial for our future.',
      dataKey: 'forestCoverage',
    },
    {
      title: 'Ocean Acidification',
      icon: '🌊',
      color: 'blue',
      description:
        'Our oceans absorb CO₂, becoming more acidic over time. This threatens coral reefs, shellfish, and entire marine ecosystems that millions depend on.',
      dataKey: 'oceanAcidification',
    },
    {
      title: 'Renewable Energy',
      icon: '⚡',
      color: 'green',
      description:
        'The future is renewable! Solar, wind, and other clean energy sources are growing fast. Every percentage point brings us closer to a sustainable, carbon-free world.',
      dataKey: 'renewableEnergy',
    },
  ]

  return (
    <main>
      <Confetti 
        active={showConfetti} 
        onComplete={() => setShowConfetti(false)}
        duration={3000}
        particleCount={150}
      />
      
      <Header />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Discover Our Living Planet</h1>
          <p className={styles.heroSubtitle}>
            Join us on a journey to understand sustainability, climate action, and how we can protect Earth together
          </p>
          <p className={styles.heroDescription}>
            Explore real-time environmental data, learn about the UN Sustainable Development Goals, and discover simple actions that make a big difference.
          </p>
          <button 
            className={styles.ctaButton}
            onClick={() => {
              analyticsEvents.exploreDataClicked()
              setShowConfetti(true)
              setTimeout(() => {
                document.getElementById('metrics')?.scrollIntoView({ behavior: 'smooth' })
              }, 300)
            }}
          >
            Explore Data
          </button>
        </div>
        <div className={styles.heroVisuals}>
          <svg viewBox="0 0 400 300" className={styles.illustration}>
            <circle cx="200" cy="100" r="60" fill="#1e88e5" opacity="0.2" />
            <circle cx="100" cy="200" r="40" fill="#43a047" opacity="0.2" />
            <circle cx="300" cy="200" r="50" fill="#1e88e5" opacity="0.15" />
            <path d="M50 250 Q150 220 200 240 T350 250" stroke="#43a047" strokeWidth="3" fill="none" opacity="0.5" />
          </svg>
        </div>
      </section>

      {/* Weather Section */}
      <section id="weather" className={styles.weatherSection}>
        <div className={styles.container}>
          <h2>Right Now in Dubai</h2>
          <WeatherCard />
        </div>
      </section>

      {/* Metrics Section */}
      <section id="metrics" className={styles.metricsSection}>
        <div className={styles.container}>
          <div className={styles.metricsHeader}>
            <h2>Planet Pulse: Environmental Metrics</h2>
            <p>See how Earth is doing today—each metric tells an important story</p>
          </div>
          {metrics.length > 0 ? (
            <div className={styles.metricsGrid}>
              {metrics.map((metric, index) => (
                <MetricCard key={index} {...metric} />
              ))}
            </div>
          ) : (
            <EmptyState 
              title="No Metrics Available"
              message="We're currently experiencing issues loading environmental data. Please check back soon!"
              actionLabel="Refresh Page"
              onAction={() => window.location.reload()}
            />
          )}
        </div>
      </section>

      {/* SDG Section */}
      <SDGSection />

      {/* COP28 Section */}
      <COP28Section />

      {/* Call to Action Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Ready to Be Part of the Solution?</h2>
            <p>Every small action adds up. Together, we can create a sustainable future for generations to come.</p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryBtn}>
                <a 
                  href="https://www.un.org/sustainabledevelopment/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => analyticsEvents.sdgLinkClicked()}
                >
                  Explore UN Sustainable Goals
                </a>
              </button>
              <button className={styles.secondaryBtn}>
                <a 
                  href="https://climate.nasa.gov/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => analyticsEvents.nasaLinkClicked()}
                >
                  Dive into NASA Climate Data
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
