'use client'

import { useEffect, useState } from 'react'
import styles from './WeatherCard.module.css'
import { fetchWeatherData } from '../../lib/environmentalData'
import { useToast } from '../context/ToastProvider'

interface WeatherData {
  temp: number
  humidity: number
  condition: string
  windSpeed: number
  feelsLike: number
}

export default function WeatherCard() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { showToast } = useToast()

    useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchWeatherData()
        setWeatherData(data)
        showToast('Weather data loaded', 'success', 2500)
      } catch (err: any) {
        const errorMsg = err.message || 'Failed to fetch weather data'
        setError(errorMsg)
        showToast(errorMsg, 'error', 4000)
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [showToast])

  if (loading) {
    return (
      <div className={styles.card + ' ' + styles.loading}>
        <div className={styles.skeleton} />
      </div>
    )
  }

  if (error || !weatherData) {
    return (
      <div className={styles.card + ' ' + styles.error}>
        <p>Unable to fetch weather data</p>
      </div>
    )
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>Current Weather</h3>
        <span className={styles.location}>Dubai, UAE</span>
      </div>

      <div className={styles.mainWeather}>
        <div className={styles.tempDisplay}>
          <span className={styles.temp}>{weatherData.temp}°C</span>
          <span className={styles.feelsLike}>Feels like {weatherData.feelsLike}°C</span>
        </div>
        <div className={styles.iconWrapper}>
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="45" fill="currentColor" opacity="0.1" />
            <path d="M50 20 L60 40 L50 50 L40 40 Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      <p className={styles.condition}>{weatherData.condition}</p>

      <div className={styles.metrics}>
        <div className={styles.metric}>
          <span className={styles.label}>Humidity</span>
          <span className={styles.value}>{weatherData.humidity}%</span>
        </div>
        <div className={styles.metric}>
          <span className={styles.label}>Wind Speed</span>
          <span className={styles.value}>{weatherData.windSpeed} km/h</span>
        </div>
      </div>
    </div>
  )
}
