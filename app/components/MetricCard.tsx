'use client'

import { useState, useEffect } from 'react'
import styles from './MetricCard.module.css'
import {
  fetchAirQuality,
  fetchCO2Levels,
  fetchTemperatureAnomaly,
  fetchForestCoverage,
  fetchOceanAcidification,
  fetchRenewableEnergy
} from '../../lib/environmentalData'

interface MetricCardProps {
  title: string
  value?: string | number
  unit?: string
  icon: string
  description: string
  color?: 'blue' | 'green' | 'yellow' | 'red'
  dataKey?: string
}

const dataFetchers: Record<string, () => Promise<{ value: number | string; unit?: string }>> = {
  airQuality: fetchAirQuality,
  co2Levels: fetchCO2Levels,
  temperatureAnomaly: fetchTemperatureAnomaly,
  forestCoverage: fetchForestCoverage,
  oceanAcidification: fetchOceanAcidification,
  renewableEnergy: fetchRenewableEnergy,
}

export default function MetricCard({
  title,
  value: staticValue,
  unit: staticUnit = '',
  icon,
  description,
  color = 'blue',
  dataKey,
}: MetricCardProps) {
  const [expanded, setExpanded] = useState(false)
  const [value, setValue] = useState<string | number>(staticValue || 0)
  const [unit, setUnit] = useState<string>(staticUnit)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  useEffect(() => {
    if (dataKey && dataFetchers[dataKey]) {
      const fetchData = async () => {
        try {
          setLoading(true)
          setError(null)
          const data = await dataFetchers[dataKey]()
          setValue(data.value)
          if (data.unit) setUnit(data.unit)
          setLastUpdated(new Date())
        } catch (err: any) {
          setError(err.message || 'Failed to fetch data')
        } finally {
          setLoading(false)
        }
      }

      fetchData()
    }
  }, [dataKey])

  const displayValue = loading ? '...' : error ? 'N/A' : value
  const displayUnit = loading || error ? '' : unit

  return (
    <div className={`${styles.card} ${styles[`color-${color}`]} ${loading ? styles.loading : ''} ${error ? styles.error : ''}`}>
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
            {displayValue}
            {displayUnit && <span className={styles.unit}>{displayUnit}</span>}
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
          {error && <p className={styles.errorText}>Error: {error}</p>}
          {lastUpdated && !error && (
            <p className={styles.lastUpdated}>
              Last updated: {lastUpdated.toLocaleTimeString()}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
