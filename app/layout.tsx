import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import ThemeProvider from './components/ThemeProvider'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
}

export const metadata: Metadata = {
  title: 'Ecospace - Learn About Sustainability',
  description: 'Ecospace is an educational platform about sustainability, climate action, and environmental awareness inspired by NASA Climate Kids and Google Weather UI.',
  keywords: ['sustainability', 'environment', 'climate', 'education', 'SDG', 'COP28'],
  authors: [{ name: 'Praneet Nandan Rana' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Ecospace - Learn About Sustainability',
    description: 'Discover sustainability and climate action through interactive educational content.',
    type: 'website',
    url: 'https://ecospace.vercel.app',
  },
}

export default function RootLayout({
  children,
}: any) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/Ecospace.ico" />
      </head>
      <body>
        <ThemeProvider>
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
