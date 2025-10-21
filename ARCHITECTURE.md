# 🌍 Ecospace v2 – Visual Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    ECOSPACE V2 ARCHITECTURE                     │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                         APP LAYOUT                              │
│  (Next.js 15 App Router with TypeScript & Vercel Analytics)    │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │  ROOT LAYOUT     │
                    │  layout.tsx      │ ◄── Metadata, Viewport,
                    │  globals.css     │     Theme Provider, Analytics
                    │  tsconfig.json   │
                    └──────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │   HOME PAGE      │
                    │   page.tsx       │ ◄── Main Content
                    │  page.module.css │
                    └──────────────────┘
                              │
                ┌─────────────┴──────────────┐
                │                            │
                ▼                            ▼
        ┌────────────────┐        ┌────────────────┐
        │    COMPONENTS  │        │    STYLING     │
        │    (8 total)   │        │   (CSS/Vars)   │
        └────────────────┘        └────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                       COMPONENT TREE                            │
└─────────────────────────────────────────────────────────────────┘

                          <RootLayout>
                             │
              ┌──────────────┴──────────────┐
              │                             │
        <ThemeProvider>                     │
              │                             │
              ▼                             ▼
          <Header>                      <main>
          │ │ │ │                        │
          │ │ │ └─ ThemeToggle           ├─ Hero Section
          │ │ │                          │
          │ │ └─── Nav Links             ├─ <WeatherCard/>
          │ │                            │
          │ └───── Logo                  ├─ <MetricCard/> ×6
          │                              │
          └────── Mobile Menu            ├─ <SDGSection/>
                                         │
                                         ├─ <COP28Section/>
                                         │
                                         ├─ CTA Section
                                         │
                                         └─ <Footer/>
                                             │
                                             ├─ Quick Links
                                             ├─ Resources
                                             ├─ Contact
                                             └─ Credits

┌─────────────────────────────────────────────────────────────────┐
│                   COMPONENT BREAKDOWN                           │
└─────────────────────────────────────────────────────────────────┘

1. HEADER Component
   ├─ Logo + Brand Name (Gradient Text)
   ├─ Desktop Navigation Menu
   ├─ Mobile Hamburger Menu (responsive)
   ├─ ThemeToggle Button
   └─ Styles: Header.module.css

2. ThemeProvider Component
   ├─ Detects system theme preference
   ├─ Stores preference in localStorage
   ├─ Sets data-theme attribute on HTML
   └─ Provides CSS variable switching

3. ThemeToggle Component
   ├─ Sun/Moon Icon Button
   ├─ Toggles between light/dark mode
   └─ Styles: ThemeToggle.module.css

4. WeatherCard Component
   ├─ Real-time weather API call (OpenWeatherMap)
   ├─ Temperature display (large, centered)
   ├─ Condition text (sunny, cloudy, etc.)
   ├─ Humidity & Wind Speed metrics
   ├─ Loading state (shimmer animation)
   ├─ Error state (fallback message)
   └─ Styles: WeatherCard.module.css

5. MetricCard Component
   ├─ Expandable/collapsible design
   ├─ Icon + Title + Value display
   ├─ Chevron indicator
   ├─ Detailed description (on expand)
   ├─ 4 color variants (blue, green, yellow, red)
   ├─ Accessible keyboard navigation
   └─ Styles: MetricCard.module.css

6. SDGSection Component
   ├─ Grid of 17 UN Sustainable Dev Goals
   ├─ Each card has official UN color
   ├─ Goal number, title, description
   ├─ Hover: lift + scale animation
   ├─ Responsive auto-fit grid
   └─ Styles: SDGSection.module.css

7. COP28Section Component
   ├─ 5-tab tabbed interface
   │  ├─ Introduction
   │  ├─ Themes & Objectives
   │  ├─ Key Outcomes
   │  ├─ Challenges
   │  └─ Get Involved
   ├─ Smooth tab transitions
   ├─ Content displays/hides on tab click
   └─ Styles: COP28Section.module.css

8. Footer Component
   ├─ Multi-column responsive grid
   ├─ Logo + Description
   ├─ Quick Links Section
   ├─ Resources Section
   ├─ Contact Information
   ├─ Divider
   ├─ Credits with ❤️ animation
   └─ Styles: Footer.module.css

┌─────────────────────────────────────────────────────────────────┐
│                    STYLING ARCHITECTURE                         │
└─────────────────────────────────────────────────────────────────┘

globals.css (Global Styles)
│
├─ CSS Custom Properties (Variables)
│  ├─ :root (Light Mode)
│  │  ├─ --primary-blue: #1e88e5
│  │  ├─ --primary-green: #43a047
│  │  ├─ --accent-yellow: #f9a825
│  │  ├─ --background: #f5f9ff
│  │  ├─ --surface: #ffffff
│  │  └─ --text-primary: #0a1929
│  │
│  └─ html[data-theme='dark'] (Dark Mode)
│     ├─ --background: #0a192f
│     ├─ --surface: #1a2332
│     ├─ --text-primary: #e8eef7
│     └─ ... (all dark variants)
│
├─ Global Reset
│  ├─ *, html, body
│  └─ Smooth scroll behavior
│
├─ Base Typography
│  ├─ h1, h2, h3, h4, h5, h6
│  ├─ p, a, button
│  └─ Responsive font scaling with clamp()
│
├─ Focus & Accessibility
│  ├─ :focus-visible outlines
│  ├─ Keyboard navigation states
│  └─ Color contrast requirements
│
├─ Animations & Keyframes
│  ├─ @keyframes fadeInUp
│  ├─ @keyframes slideInRight
│  ├─ @keyframes pulse
│  ├─ @keyframes shimmer
│  ├─ @keyframes float
│  └─ Smooth transitions (0.3s cubic-bezier)
│
├─ Utility Classes
│  ├─ .container (max-width: 1200px)
│  ├─ .section-padding (responsive padding)
│  ├─ .grid (CSS Grid defaults)
│  ├─ .grid-auto (auto-fit columns)
│  └─ .animate-* (animation helpers)
│
└─ Scrollbar Styling
   ├─ ::-webkit-scrollbar (10px)
   ├─ ::-webkit-scrollbar-track
   └─ ::-webkit-scrollbar-thumb

Page-Specific & Component CSS Modules
│
├─ page.module.css
│  ├─ .hero (gradient background, flex layout)
│  ├─ .weatherSection (padding, background)
│  ├─ .metricsSection (grid layout)
│  └─ .ctaSection (call-to-action styling)
│
├─ Header.module.css
│  ├─ .header (sticky positioning, shadow)
│  ├─ .nav (responsive flex menu)
│  ├─ .navLink (hover effects, underline)
│  └─ .mobileNav (responsive hamburger)
│
├─ WeatherCard.module.css
│  ├─ .card (gradient bg, rounded corners)
│  ├─ .mainWeather (temp display layout)
│  ├─ .metrics (grid of weather metrics)
│  └─ .loading (shimmer animation)
│
├─ MetricCard.module.css
│  ├─ .card (card styling with border)
│  ├─ .header (clickable, hover effects)
│  ├─ .content (expandable content area)
│  └─ .color-* (color variants)
│
├─ SDGSection.module.css
│  ├─ .grid (responsive auto-fit grid)
│  ├─ .card (SDG goal card styling)
│  ├─ .background (color overlay)
│  └─ .content (text content area)
│
├─ COP28Section.module.css
│  ├─ .tabs (tabbed interface)
│  ├─ .tab (individual tab styling)
│  ├─ .tab.active (active state)
│  └─ .content (tab content area)
│
└─ Footer.module.css
   ├─ .footer (background, border)
   ├─ .section (multi-column grid)
   ├─ .logo (brand styling)
   └─ .heart (animated pulse effect)

┌─────────────────────────────────────────────────────────────────┐
│                   RESPONSIVE BREAKPOINTS                        │
└─────────────────────────────────────────────────────────────────┘

Mobile (< 768px)
├─ Hero: stack vertical
├─ Grid: 1 column
├─ Nav: hamburger menu
├─ SDG: smaller cards
└─ Padding: 1rem

Tablet (768px - 1023px)
├─ Hero: 2 columns
├─ Grid: 2 columns
├─ Nav: desktop visible
├─ SDG: auto-fit columns
└─ Padding: 2rem

Desktop (≥ 1024px)
├─ Hero: 2 columns, full width
├─ Grid: 3+ columns
├─ Nav: full menu
├─ Container: max-width 1200px
└─ Padding: 4-5rem

┌─────────────────────────────────────────────────────────────────┐
│                    DATA FLOW & STATE                            │
└─────────────────────────────────────────────────────────────────┘

App (Root)
│
├─ Server-Side
│  ├─ layout.tsx (generates metadata)
│  └─ page.tsx (static generation)
│
└─ Client-Side (with 'use client')
   ├─ Header
   │  ├─ State: mobileMenuOpen
   │  └─ Effects: None (stateless mostly)
   │
   ├─ ThemeProvider
   │  ├─ State: theme, mounted
   │  └─ Effects: detect system pref, apply theme
   │
   ├─ ThemeToggle
   │  ├─ State: isDark, mounted
   │  └─ Effects: read data-theme on mount
   │
   ├─ WeatherCard
   │  ├─ State: weather, loading, error
   │  └─ Effects: fetch from OpenWeatherMap API
   │
   ├─ MetricCard
   │  ├─ State: expanded
   │  └─ Effects: toggle expand on click
   │
   ├─ SDGSection
   │  ├─ State: None (static data)
   │  └─ Effects: None (static rendering)
   │
   ├─ COP28Section
   │  ├─ State: activeTab
   │  └─ Effects: switch content on tab click
   │
   └─ Footer
      ├─ State: None (static)
      └─ Effects: calculate currentYear on render

┌─────────────────────────────────────────────────────────────────┐
│                     BUILD & DEPLOYMENT                          │
└─────────────────────────────────────────────────────────────────┘

Development
├─ npm run dev
├─ Next.js Turbopack (fast rebuild)
└─ Hot Module Replacement (HMR)

Production Build
├─ npm run build
│  ├─ TypeScript compilation
│  ├─ Code minification
│  ├─ CSS optimizations
│  ├─ Static generation (SSG)
│  └─ Output size: ~108 KB First Load JS
│
└─ npm start
   └─ Production server

Vercel Deployment
├─ Connect GitHub
├─ Auto-deploy on push
├─ Analytics tracking
├─ Edge function support
└─ Domain configuration

┌─────────────────────────────────────────────────────────────────┐
│                      KEY FEATURES MAP                           │
└─────────────────────────────────────────────────────────────────┘

✨ DESIGN
├─ Modern gradient colors
├─ Smooth animations
├─ Responsive layout
├─ Light/Dark mode
└─ Accessibility-first

🚀 PERFORMANCE
├─ Static pre-rendering
├─ Optimized bundle size
├─ CSS Modules
├─ No external images
└─ Turbopack builds

📱 RESPONSIVE
├─ Mobile-first approach
├─ Flexible grids
├─ Touch-friendly spacing
├─ Adaptive typography
└─ Hamburger navigation

♿ ACCESSIBLE
├─ Semantic HTML
├─ ARIA labels
├─ Keyboard navigation
├─ Focus indicators
└─ Color contrast (WCAG AA)

📊 ANALYTICS
├─ Vercel Analytics
├─ Real-time tracking
├─ User metrics
├─ Traffic sources
└─ Device info

🌍 CONTENT
├─ Real-time weather
├─ 6 environmental metrics
├─ 17 SDG goals
├─ COP28 information
└─ Educational resources

═══════════════════════════════════════════════════════════════════

                 🎉 ARCHITECTURE COMPLETE 🎉

         Next.js 15 + React 18 Modern Component Architecture
                    Production-Ready & Deployed

═══════════════════════════════════════════════════════════════════
