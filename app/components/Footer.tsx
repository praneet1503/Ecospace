'use client'

import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <div className={styles.logo}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M16 4 C12 8 10 12 10 16 C10 22 13 26 16 26 C19 26 22 22 22 16 C22 12 20 8 16 4"
                  fill="currentColor"
                  opacity="0.3"
                />
              </svg>
              <span>Ecospace</span>
            </div>
            <p>Learn about sustainability, climate action, and environmental education for all ages.</p>
          </div>

          <div className={styles.section}>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#weather">Current Weather</a>
              </li>
              <li>
                <a href="#metrics">Environmental Metrics</a>
              </li>
              <li>
                <a href="#sdg-goals">SDG Goals</a>
              </li>
              <li>
                <a href="#cop28">COP28 Conference</a>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="https://www.un.org/sustainabledevelopment/" target="_blank" rel="noopener noreferrer">
                  UN SDG
                </a>
              </li>
              <li>
                <a href="https://climate.nasa.gov/" target="_blank" rel="noopener noreferrer">
                  NASA Climate
                </a>
              </li>
              <li>
                <a href="https://www.climate-course.org/" target="_blank" rel="noopener noreferrer">
                  Climate Course
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:praneetnrana@gmail.com">📧 Email</a>
              </li>
              <li>
                <a href="https://github.com/praneet1503" target="_blank" rel="noopener noreferrer">
                  🐙 GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.project}>The First Project of Elysium</p>
          <p className={styles.credit}>Made with ❤️ by Praneet</p>

          <p className={styles.copyRow}>
            © {currentYear} Ecospace
            <span className={styles.spacer}>•</span>
            <button className={styles.v2Button} aria-label="Version 2">v2</button>
          </p>
        </div>
      </div>
    </footer>
  )
}
