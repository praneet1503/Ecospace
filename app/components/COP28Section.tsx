'use client'

import { useState } from 'react'
import styles from './COP28Section.module.css'

const COP28_TABS = [
  {
    id: 'intro',
    label: 'Introduction',
    content: (
      <>
        <h3>What is COP28?</h3>
        <p>
          COP28 is the 28th Conference of the Parties to the UN Framework Convention on Climate Change (UNFCCC).
          Held in Dubai, UAE in 2023, it brought together representatives from 197 countries to advance global
          climate action and meet the goals of the Paris Agreement.
        </p>
        <p>
          This landmark conference focused on accelerating the transition to renewable energy, increasing climate
          finance for vulnerable nations, and taking stock of global climate progress.
        </p>
      </>
    ),
  },
  {
    id: 'themes',
    label: 'Themes & Objectives',
    content: (
      <>
        <h3>Key Themes</h3>
        <ul>
          <li><strong>Global Stocktake:</strong> Assessing progress toward Paris Agreement goals</li>
          <li><strong>Energy Transition:</strong> Tripling renewable energy capacity by 2030</li>
          <li><strong>Climate Finance:</strong> Supporting vulnerable nations in climate adaptation</li>
          <li><strong>Loss and Damage:</strong> Establishing funds for climate-affected communities</li>
          <li><strong>Nature-based Solutions:</strong> Protecting and restoring ecosystems</li>
        </ul>
      </>
    ),
  },
  {
    id: 'outcomes',
    label: 'Key Outcomes',
    content: (
      <>
        <h3>Historic Achievements</h3>
        <ul>
          <li>✓ Operationalized the Loss and Damage Fund for vulnerable nations</li>
          <li>✓ Committed to tripling renewable energy capacity by 2030</li>
          <li>✓ Pledged $700+ billion in climate finance</li>
          <li>✓ Agreement to transition from fossil fuels in energy systems</li>
          <li>✓ Enhanced focus on climate action adaptation strategies</li>
        </ul>
      </>
    ),
  },
  {
    id: 'challenges',
    label: 'Challenges',
    content: (
      <>
        <h3>Ongoing Challenges</h3>
        <p>
          While COP28 marked significant progress, several challenges remain. The inclusion of fossil fuel
          executives, funding gaps for adaptation, and the need to accelerate implementation of climate commitments
          are key areas for future improvement.
        </p>
        <p>
          The next decade is critical for achieving net-zero emissions by 2050 and limiting global warming to 1.5°C
          above pre-industrial levels.
        </p>
      </>
    ),
  },
  {
    id: 'engage',
    label: 'Get Involved',
    content: (
      <>
        <h3>How You Can Help</h3>
        <ul>
          <li>📱 Adopt sustainable practices in daily life</li>
          <li>⚡ Support renewable energy initiatives</li>
          <li>🌍 Raise awareness about climate change</li>
          <li>♻️ Reduce, reuse, and recycle</li>
          <li>🤝 Engage with climate action organizations</li>
          <li>🗳️ Support climate-focused policies and leaders</li>
        </ul>
      </>
    ),
  },
]

export default function COP28Section() {
  const [activeTab, setActiveTab] = useState('intro')

  return (
    <section className={styles.section} id="cop28">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>COP28 Climate Conference 2023</h2>
          <p>Dubai, UAE - Global Action on Climate Change</p>
        </div>

        <div className={styles.tabsWrapper}>
          <div className={styles.tabs}>
            {COP28_TABS.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className={styles.content}>
            {COP28_TABS.find((tab) => tab.id === activeTab)?.content}
          </div>
        </div>
      </div>
    </section>
  )
}
