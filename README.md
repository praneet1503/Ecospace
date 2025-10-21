# Ecospace v2 – Sustainable Development Education Platform

A modern, responsive, and visually appealing educational website about sustainability, climate action, and environmental awareness, inspired by **NASA Climate Kids**, **Earth.org**, and **Google Weather UI**.

**Live Demo:** [Ecospace on Vercel](ecospace-eosin.vercel.app)

---

## ✨ Features

### 🎨 **Modern UI/UX Design**
- Fully redesigned from scratch with Next.js 15 + React 18
- Clean, professional interface with smooth animations
- Responsive design for desktop, tablet, and mobile
- Light/Dark mode toggle with persistent preferences
- Accessibility-first approach with ARIA labels and focus states

### 📦 **Modular Component Architecture**
- Reusable React components with CSS Modules
- Server & Client components optimized for performance
- Type-safe with TypeScript
- SEO-optimized metadata and structured data

### 🌍 **Educational Content Sections**
1. **Current Weather** - Real-time environmental conditions from OpenWeatherMap API
2. **Environmental Metrics** - Interactive cards showing CO₂, temperature anomaly, forest coverage, etc.
3. **UN SDG Goals** - Beautiful grid of all 17 Sustainable Development Goals with animations
4. **COP28 Climate Conference** - Tabbed interface with introduction, themes, outcomes, challenges, and engagement
5. **Call-to-Action** - Encouraging visitors to learn more and take action

### 🎭 **Design System**
- **Color Palette:**
  - Primary Blue: `#1e88e5`
  - Primary Green: `#43a047`
  - Accent Yellow: `#f9a825`
  - Background (Light): `#f5f9ff`
  - Background (Dark): `#0a192f`

- **Typography:**
  - Font Family: Poppins, Inter (from Google Fonts)
  - Weights: 300–700
  - Responsive font scaling with CSS clamp()

- **Effects:**
  - Smooth transitions (0.3s cubic-bezier)
  - Float animations for visual interest
  - Fade-in and slide-in entrance animations
  - Hover state transforms and elevations

### 🌙 **Theme Support**
- Automatic detection of system preference
- Persistent theme selection in localStorage
- CSS variables for dynamic theming
- Real-time theme toggle in header

### 📊 **Analytics**
- Vercel Analytics integrated for tracking usage
- Real-time insights available in Vercel dashboard
- Environment-based conditional rendering

---

## 🛠️ **Tech Stack**

- **Framework:** Next.js 15 with Turbopack
- **Runtime:** React 18
- **Styling:** CSS Modules + Global CSS with CSS Variables
- **Language:** TypeScript
- **Package Manager:** npm
- **Hosting:** Vercel (recommended)
- **API:** OpenWeatherMap (free tier for weather data)

---

## 📂 **Project Structure**

```
app/
├── layout.tsx              # Root layout with metadata, theme provider, analytics
├── page.tsx                # Home page with all sections
├── globals.css             # Global styles and CSS variables
├── page.module.css         # Home page styles
└── components/
    ├── Header.tsx          # Navigation header with logo and theme toggle
    ├── Header.module.css
    ├── ThemeProvider.tsx   # Theme context and persistence logic
    ├── ThemeToggle.tsx      # Dark/light mode button
    ├── ThemeToggle.module.css
    ├── WeatherCard.tsx      # Live weather display with API data
    ├── WeatherCard.module.css
    ├── MetricCard.tsx       # Expandable metric cards with descriptions
    ├── MetricCard.module.css
    ├── SDGSection.tsx       # Grid of 17 SDG goals with animations
    ├── SDGSection.module.css
    ├── COP28Section.tsx     # Tabbed climate conference information
    ├── COP28Section.module.css
    ├── Footer.tsx           # Footer with links, credits, and social
    └── Footer.module.css
public/
└── Ecospace.ico            # Favicon
```

---

## 🚀 **Getting Started**

### Prerequisites
- Node.js 18+ and npm
- macOS, Linux, or Windows

### Installation

```bash
# Clone the repository
git clone https://github.com/praneet1503/Ecospace.git
cd Ecospace

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page auto-updates as you edit files.

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

---

## 🎨 **Customization**

### **Colors**
Edit CSS variables in `app/globals.css`:

```css
:root {
  --primary-blue: #1e88e5;
  --primary-green: #43a047;
  --accent-yellow: #f9a825;
  --background: #f5f9ff;
  /* ... more variables */
}

html[data-theme='dark'] {
  --background: #0a192f;
  --surface: #1a2332;
  /* ... dark mode variables */
}
```

### **Fonts**
Google Fonts are loaded in `app/layout.tsx`. To change:

```tsx
<link
  href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

### **Weather Location**
Update the city in `app/components/WeatherCard.tsx`:

```tsx
const city = 'your-city,COUNTRY_CODE'
```

### **Metrics Data**
Edit the `metrics` array in `app/page.tsx` to add/remove or update environmental metrics.

### **SDG Goals**
Customize the `SDG_GOALS` array in `app/components/SDGSection.tsx` with different colors and descriptions.

### **COP28 Content**
Modify tabs and content in `app/components/COP28Section.tsx`.

---

## 📱 **Responsive Design**

The design uses mobile-first approach with breakpoints:

```css
/* Mobile: < 768px */
/* Tablet: 768px – 1023px */
/* Desktop: ≥ 1024px */
```

All components scale gracefully across device sizes using:
- Flexible grids (CSS Grid + Flexbox)
- Responsive font sizes (clamp)
- Touch-friendly tap targets (min 40×40px)
- Optimized images and lazy loading

---

## ♿ **Accessibility**

- ✅ Semantic HTML structure
- ✅ ARIA labels for interactive elements
- ✅ Focus outlines for keyboard navigation
- ✅ Color contrast ratios meet WCAG AA standards
- ✅ Readable font sizes and line heights
- ✅ Keyboard-navigable menus and buttons
- ✅ Reduced motion support

---

## 📊 **Performance**

- **Build Size:** ~108 KB First Load JS (optimized)
- **Static Generation:** All pages pre-rendered at build time
- **Image Optimization:** Inline SVG illustrations (no external images needed)
- **CSS Efficiency:** CSS Modules prevent style conflicts
- **Code Splitting:** Automatic per-component in Next.js 15

**Lighthouse Scores:**
- Performance: 98+
- Accessibility: 95+
- Best Practices: 100
- SEO: 100

---

## 🔍 **Analytics**

Vercel Analytics is integrated for tracking:
- Pageviews and user sessions
- Device and browser information
- Traffic sources
- Real-time metrics

To view analytics:
1. Deploy to Vercel
2. Go to your project's Analytics tab
3. Enable "Web Analytics"

---

## 🌍 **Environment Variables**

Create a `.env.local` file for sensitive data (if needed):

```env
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_key_here
```

**Note:** The current weather API key is public for demo purposes. Replace with your own for production.

---

## 📝 **SEO Metadata**

All pages include:
- Descriptive titles and meta descriptions
- Open Graph tags for social sharing
- Canonical URLs
- Structured data (JSON-LD ready)
- Sitemap and robots.txt ready

---

## 🤝 **Contributing**

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 **License**

This project is licensed under the **MIT License** – see the LICENSE file for details.

---

## 👤 **Author**

**Praneet Nandan Rana**
- 📧 Email: [praneetnrana@gmail.com](mailto:praneetnrana@gmail.com)
- 🐙 GitHub: [@praneet1503](https://github.com/praneet1503)

---

## 🙏 **Acknowledgments**

- Inspiration: NASA Climate Kids, Earth.org, Google Weather UI
- UN Sustainable Development Goals
- OpenWeatherMap API
- Vercel Analytics and Deployment

---

## 📚 **Resources**

- [Next.js Documentation](https://nextjs.org/docs)
- [React 18 Documentation](https://react.dev)
- [UN SDG Website](https://www.un.org/sustainabledevelopment/)
- [NASA Climate Kids](https://climate.nasa.gov/kids/)
- [COP28 Information](https://www.cop28.com)

---

**Last Updated:** October 21, 2024  
**Version:** 2.0 (Complete Redesign with Next.js 15 & React 18)
