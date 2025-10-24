import styles from './page.module.css'
import Header from './components/Header'
import WeatherCard from './components/WeatherCard'
import MetricCard from './components/MetricCard'
import SDGSection from './components/SDGSection'
import COP28Section from './components/COP28Section'
import Footer from './components/Footer'

export default function Home() {
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
        'Air quality is measured by the concentration of pollutants such as PM2.5, PM10, and various gases. Lower values indicate cleaner, healthier air.',
      dataKey: 'airQuality',
    },
    {
      title: 'CO₂ Emissions',
      icon: '🏭',
      color: 'red',
      description:
        'Global atmospheric CO₂ concentration is rising due to human activities like fossil fuel combustion. We need to reduce emissions to combat climate change.',
      dataKey: 'co2Levels',
    },
    {
      title: 'Temperature Anomaly',
      icon: '🌡️',
      color: 'yellow',
      description:
        'Global average temperature has risen above pre-industrial levels. The Paris Agreement aims to limit warming to 1.5°C.',
      dataKey: 'temperatureAnomaly',
    },
    {
      title: 'Forest Coverage',
      icon: '🌲',
      color: 'green',
      description:
        'About 4.06 billion hectares of forest remain on Earth. Forests are critical for carbon storage, biodiversity, and climate regulation.',
      dataKey: 'forestCoverage',
    },
    {
      title: 'Ocean Acidification',
      icon: '🌊',
      color: 'blue',
      description:
        'Ocean pH has decreased since pre-industrial times, representing increased acidity. This harms marine life.',
      dataKey: 'oceanAcidification',
    },
    {
      title: 'Renewable Energy',
      icon: '⚡',
      color: 'green',
      description:
        'Renewable energy accounts for a portion of global electricity generation. Expanding renewables is crucial for a sustainable future.',
      dataKey: 'renewableEnergy',
    },
  ]

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Welcome to Ecospace</h1>
          <p className={styles.heroSubtitle}>
            Learn about sustainability, climate action, and environmental education for all ages
          </p>
          <p className={styles.heroDescription}>
            Explore real-time environmental data, understand the UN Sustainable Development Goals, and discover how you
            can help protect our planet.
          </p>
          <button className={styles.ctaButton}>
            <a href="#metrics">Explore Data</a>
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
          <h2>Current Environmental Conditions</h2>
          <WeatherCard />
        </div>
      </section>

      {/* Metrics Section */}
      <section id="metrics" className={styles.metricsSection}>
        <div className={styles.container}>
          <div className={styles.metricsHeader}>
            <h2>Environmental Metrics</h2>
            <p>Explore key environmental indicators and what they mean for our planet</p>
          </div>
          <div className={styles.metricsGrid}>
            {metrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>
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
            <h2>Ready to Make a Difference?</h2>
            <p>Every action counts in our fight for sustainability and climate action.</p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryBtn}>
                <a href="https://www.un.org/sustainabledevelopment/" target="_blank" rel="noopener noreferrer">
                  Learn More about SDGs
                </a>
              </button>
              <button className={styles.secondaryBtn}>
                <a href="https://climate.nasa.gov/" target="_blank" rel="noopener noreferrer">
                  NASA Climate Resources
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
