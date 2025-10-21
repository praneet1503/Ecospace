'use client'

import { useEffect, useState } from 'react'
import styles from './WeatherCard.module.css'

interface WeatherData {
  temp: number
  humidity: number
  condition: string
  windSpeed: number
  feelsLike: number
}

export default function WeatherCard() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchWeather() {
      try {
        setLoading(true)
        const apiKey = '217c853cb167f26e23eb6d7a3699e276'
        const city = 'dubai,UAE'
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        )
        if (!response.ok) throw new Error('Failed to fetch weather')
        const data = await response.json()
        setWeather({
          temp: Math.round(data.main.temp),
          humidity: data.main.humidity,
          condition: data.weather[0].main,
          windSpeed: Math.round(data.wind.speed),
          feelsLike: Math.round(data.main.feels_like),
        })
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [])

  if (loading) {
    return (
      <div className={styles.card + ' ' + styles.loading}>
        <div className={styles.skeleton} />
      </div>
    )
  }

  if (error || !weather) {
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
          <span className={styles.temp}>{weather.temp}°C</span>
          <span className={styles.feelsLike}>Feels like {weather.feelsLike}°C</span>
        </div>
        <div className={styles.iconWrapper}>
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="45" fill="currentColor" opacity="0.1" />
            <path d="M50 20 L60 40 L50 50 L40 40 Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      <p className={styles.condition}>{weather.condition}</p>

      <div className={styles.metrics}>
        <div className={styles.metric}>
          <span className={styles.label}>Humidity</span>
          <span className={styles.value}>{weather.humidity}%</span>
        </div>
        <div className={styles.metric}>
          <span className={styles.label}>Wind Speed</span>
          <span className={styles.value}>{weather.windSpeed} km/h</span>
        </div>
      </div>
    </div>
  )
}
