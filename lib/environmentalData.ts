// Environmental data service for fetching real-time metrics
export interface EnvironmentalData {
  value: number | string | null
  unit?: string
}

// Air Quality Index from WAQI API
export async function fetchAirQuality(): Promise<EnvironmentalData> {
  try {
    const token = process.env.NEXT_PRIVATE_WAQI_TOKEN || 'demo'
    const response = await fetch(`https://api.waqi.info/feed/dubai/?token=${token}`)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    if (data.status === 'ok' && data.data && data.data.aqi !== undefined) {
      return {
        value: data.data.aqi,
        unit: 'AQI US'
      }
    } else {
      throw new Error('Invalid API response or data unavailable')
    }
  } catch (error) {
    console.error('Air quality fetch error:', error)
    // Return null when no real data is available
    return { value: null, unit: 'AQI US' }
  }
}

// CO2 levels from Global Warming API
export async function fetchCO2Levels(): Promise<EnvironmentalData> {
  try {
    const response = await fetch('https://global-warming.org/api/co2-api')
    const data = await response.json()

    if (data.co2 && data.co2.length > 0) {
      const latest = data.co2[data.co2.length - 1]
      return {
        value: Math.round(parseFloat(latest.cycle) * 100) / 100,
        unit: 'ppm'
      }
    } else {
      throw new Error('Invalid CO2 data format')
    }
  } catch (error) {
    console.error('CO2 fetch error:', error)
    // Return null when no real data is available
    return { value: null, unit: 'ppm' }
  }
}

// Temperature anomaly from NOAA API
export async function fetchTemperatureAnomaly(): Promise<EnvironmentalData> {
  try {
    const response = await fetch('https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/global/time-series/globe/land_ocean/tavg/1/8/1850-2025/data.json')

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    if (data.data && typeof data.data === 'object') {
      // Get the most recent year's data
      const years = Object.keys(data.data).sort((a, b) => parseInt(b) - parseInt(a))
      const latestYear = years[0]
      const latestData = data.data[latestYear]

      if (latestData && typeof latestData.anomaly === 'number') {
        return {
          value: Math.round(latestData.anomaly * 10) / 10,
          unit: '°C'
        }
      } else {
        throw new Error('Invalid temperature anomaly data')
      }
    } else {
      throw new Error('Invalid temperature data format')
    }
  } catch (error) {
    console.error('Temperature anomaly fetch error:', error)
    // Return null when no real data is available
    return { value: null, unit: '°C' }
  }
}

// Forest coverage - no real API available yet
export async function fetchForestCoverage(): Promise<EnvironmentalData> {
  // This would ideally come from a forest monitoring API
  // For now, return null as no real data is available
  return { value: null, unit: 'Billion hectares' }
}

// Ocean acidification - no real API available yet
export async function fetchOceanAcidification(): Promise<EnvironmentalData> {
  // This would ideally come from ocean monitoring APIs
  // For now, return null as no real data is available
  return { value: null, unit: 'pH' }
}

// Renewable energy percentage - no real API available yet
export async function fetchRenewableEnergy(): Promise<EnvironmentalData> {
  // This would ideally come from energy statistics APIs
  // For now, return null as no real data is available
  return { value: null, unit: '% of global' }
}

// Weather data for Dubai using OpenWeatherMap API
export interface WeatherData {
  temp: number | null
  humidity: number | null
  condition: string | null
  windSpeed: number | null
  feelsLike: number | null
}

export async function fetchWeatherData(): Promise<WeatherData> {
  console.log('[SERVER] Weather API Debug - fetchWeatherData function called')
  try {
    const apiKey = process.env.NEXT_PRIVATE_OPENWEATHER_API_KEY
    console.log('[SERVER] Weather API Debug - API Key configured:', !!apiKey)
    console.log('[SERVER] Weather API Debug - API Key value (first 8 chars):', apiKey ? apiKey.substring(0, 8) + '...' : 'undefined')
    if (!apiKey) {
      // Return null values when API key is not configured
      return {
        temp: null,
        humidity: null,
        condition: null,
        windSpeed: null,
        feelsLike: null
      }
    }

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Dubai,AE&units=metric&appid=${apiKey}`
    )
    console.log('[SERVER] Weather API Debug - Response status:', response.status)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    console.log('[SERVER] Weather API Debug - Response data received, temp:', data.main?.temp)

    return {
      temp: Math.round(data.main.temp),
      humidity: data.main.humidity,
      condition: data.weather[0].description,
      windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
      feelsLike: Math.round(data.main.feels_like)
    }
  } catch (error) {
    console.error('Weather fetch error:', error)
    // Return null when no real data is available
    return {
      temp: null,
      humidity: null,
      condition: null,
      windSpeed: null,
      feelsLike: null
    }
  }
}