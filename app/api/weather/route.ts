import { NextResponse } from 'next/server'
import { fetchWeatherData } from '../../../lib/environmentalData'

export async function GET() {
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