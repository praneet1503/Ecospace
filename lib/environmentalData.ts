// Environmental data service for fetching real-time metrics
export interface EnvironmentalData {
  value: number | string
  unit?: string
}

// Air Quality Index from WAQI API
export async function fetchAirQuality(): Promise<EnvironmentalData> {
  try {
    const token = process.env.NEXT_PUBLIC_WAQI_TOKEN || 'demo'
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
    // Fallback to static data
    return { value: 62, unit: 'AQI US' }
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
    // Fallback to static data
    return { value: 417, unit: 'ppm' }
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
    // Fallback to static data
    return { value: 1.2, unit: '°C' }
  }
}

// Forest coverage - using static data with occasional updates
export async function fetchForestCoverage(): Promise<EnvironmentalData> {
  // This would ideally come from a forest monitoring API
  // For now, using static data that could be updated periodically
  return { value: 4.06, unit: 'Billion hectares' }
}

// Ocean acidification - using static data
export async function fetchOceanAcidification(): Promise<EnvironmentalData> {
  // This would ideally come from ocean monitoring APIs
  // For now, using static data
  return { value: 8.1, unit: 'pH' }
}

// Renewable energy percentage - using static data
export async function fetchRenewableEnergy(): Promise<EnvironmentalData> {
  // This would ideally come from energy statistics APIs
  // For now, using static data
  return { value: 29, unit: '% of global' }
}