// Global environmental estimates - static baseline data for Ecospace metrics
// Data sources: EEA (European Environment Agency), IRENA (International Renewable Energy Agency),
// FAO (Food and Agriculture Organization), Our World in Data

export const GLOBAL_ESTIMATES = {
  oceanAcidification: {
    value: 8.04, // Current global surface ocean pH (declined from ~8.11 in 1985)
    unit: 'pH',
    description: 'Global surface ocean pH declined from ~8.11 to ~8.04 (1985–2024), representing ≈18% increase in acidity. About 40% of surface and 60% of subsurface waters exceed safe acidification thresholds.',
    source: 'EEA, Our World in Data',
    year: 2024
  },
  renewableEnergy: {
    value: 4448, // Global renewable power capacity in GW
    unit: 'GW',
    description: 'Global renewable power capacity ≈ 4,448 GW (end of 2024), with +585 GW added in 2024 (~15% growth). Renewables supply ~30% of global electricity.',
    source: 'IRENA',
    year: 2024
  },
  forestCover: {
    value: 4.06, // Billion hectares
    unit: 'Billion ha',
    description: 'Forests cover ~31% of Earth\'s land area (~4.06 billion ha), with net loss ~4.7 million ha/year (2010–2020 period).',
    source: 'FAO',
    year: 2020
  }
} as const

// Type for the estimates
export type GlobalEstimate = typeof GLOBAL_ESTIMATES[keyof typeof GLOBAL_ESTIMATES]