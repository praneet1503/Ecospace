'use client'

import { useEffect, useState } from 'react'
import styles from './WeatherCard.module.css'
import { WeatherData } from '../../lib/environmentalData'
import { useToast } from '../context/ToastProvider'

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
        
        // Fetch weather data directly from OpenWeatherMap API
        // Note: In production, API keys should be handled securely
        // For static export/GitHub Pages, we'll show fallback data if API key is not available
        const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY
        
        if (!apiKey) {
          // Show fallback data when API key is not configured
          setWeatherData({
            temp: null,
            humidity: null,
            condition: null,
            windSpeed: null,
            feelsLike: null
          })
          setLoading(false)
          return
        }

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Dubai,AE&units=metric&appid=${apiKey}`
        )
        
        if (!response.ok) {
          throw new Error('Failed to fetch weather data')
        }
        
        const data = await response.json()
        setWeatherData({
          temp: Math.round(data.main.temp),
          humidity: data.main.humidity,
          condition: data.weather[0].description,
          windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
          feelsLike: Math.round(data.main.feels_like)
        })
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
          <span className={styles.temp}>{weatherData.temp ?? 'nil'}°C</span>
          <span className={styles.feelsLike}>Feels like {weatherData.feelsLike ?? 'nil'}°C</span>
        </div>
        <div className={styles.iconWrapper}>
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="45" fill="currentColor" opacity="0.1" />
            <path d="M50 20 L60 40 L50 50 L40 40 Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      <p className={styles.condition}>{weatherData.condition ?? 'nil'}</p>

      <div className={styles.metrics}>
        <div className={styles.metric}>
          <span className={styles.label}>Humidity</span>
          <span className={styles.value}>{weatherData.humidity ?? 'nil'}%</span>
        </div>
        <div className={styles.metric}>
          <span className={styles.label}>Wind Speed</span>
          <span className={styles.value}>{weatherData.windSpeed ?? 'nil'} km/h</span>
        </div>
      </div>
    </div>
  )
}
