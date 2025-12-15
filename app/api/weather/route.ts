import { NextResponse } from 'next/server'
import { fetchWeatherData } from '../../../lib/environmentalData'

export async function GET() {
  // Security: this API route was reviewed during RSC Flight protocol fixes.
  // It does not use React Server Functions or accept serialized RSC payloads.
  try {
    const weatherData = await fetchWeatherData()
    return NextResponse.json(weatherData)
  } catch (error) {
    console.error('Weather API route error:', error)
    return NextResponse.json(
      {
        temp: null,
        humidity: null,
        condition: null,
        windSpeed: null,
        feelsLike: null
      },
      { status: 500 }
    )
  }
}