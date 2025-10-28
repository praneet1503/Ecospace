import { track } from '@vercel/analytics'

// Custom analytics events for emotional design tracking
export const analyticsEvents = {
  // CTA interactions
  exploreDataClicked: () => {
    track('explore_data_clicked', {
      location: 'hero_section',
      hasConfetti: true
    })
  },

  sdgLinkClicked: () => {
    track('sdg_link_clicked', {
      location: 'cta_section',
      externalLink: true
    })
  },

  nasaLinkClicked: () => {
    track('nasa_link_clicked', {
      location: 'cta_section',
      externalLink: true
    })
  },

  // Metric interactions
  metricExpanded: (metricTitle: string) => {
    track('metric_expanded', {
      metric: metricTitle
    })
  },

  metricCollapsed: (metricTitle: string) => {
    track('metric_collapsed', {
      metric: metricTitle
    })
  },

  // Theme interactions
  themeToggled: (newTheme: 'light' | 'dark') => {
    track('theme_toggled', {
      newTheme
    })
  },

  // Data loading
  weatherDataLoaded: (duration: number) => {
    track('weather_data_loaded', {
      loadTime: duration
    })
  },

  metricDataLoaded: (metricTitle: string, duration: number) => {
    track('metric_data_loaded', {
      metric: metricTitle,
      loadTime: duration
    })
  },

  dataLoadError: (source: string, error: string) => {
    track('data_load_error', {
      source,
      error
    })
  },

  // Page engagement
  scrollDepth: (percentage: number) => {
    track('scroll_depth', {
      percentage
    })
  },

  timeOnPage: (duration: number) => {
    track('time_on_page', {
      duration
    })
  },

  // Empty state
  emptyStateRefreshClicked: () => {
    track('empty_state_refresh_clicked')
  },

  // 404 page
  notFoundPageViewed: () => {
    track('404_page_viewed')
  },

  notFoundLinkClicked: (destination: string) => {
    track('404_link_clicked', {
      destination
    })
  }
}
