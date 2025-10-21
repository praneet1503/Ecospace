'use client'

import { useState } from 'react'
import styles from './MetricCard.module.css'

interface MetricCardProps {
  title: string
  value: string | number
  unit?: string
  icon: string
  description: string
  color?: 'blue' | 'green' | 'yellow' | 'red'
}

export default function MetricCard({
  title,
  value,
  unit = '',
  icon,
  description,
  color = 'blue',
}: MetricCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`${styles.card} ${styles[`color-${color}`]}`}>
      <div
        className={styles.header}
        onClick={() => setExpanded(!expanded)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setExpanded(!expanded)
          }
        }}
      >
        <div className={styles.iconBox}>{icon}</div>
        <div className={styles.headerText}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.value}>
            {value}
            {unit && <span className={styles.unit}>{unit}</span>}
          </p>
        </div>
        <div className={`${styles.chevron} ${expanded ? styles.open : ''}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      {expanded && (
        <div className={styles.content}>
          <p>{description}</p>
        </div>
      )}
    </div>
  )
}
