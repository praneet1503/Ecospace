'use client'

import styles from './SDGSection.module.css'

const SDG_GOALS = [
  { id: 1, title: 'No Poverty', color: '#E5243B', description: 'End poverty in all its forms everywhere' },
  { id: 2, title: 'Zero Hunger', color: '#DDD53E', description: 'End hunger, achieve food security and improved nutrition' },
  { id: 3, title: 'Good Health', color: '#4C9F38', description: 'Ensure healthy lives and promote well-being' },
  { id: 4, title: 'Quality Education', color: '#C6192B', description: 'Ensure inclusive and equitable quality education' },
  { id: 5, title: 'Gender Equality', color: '#DD3E39', description: 'Achieve gender equality and empower women and girls' },
  { id: 6, title: 'Clean Water', color: '#26BDE2', description: 'Ensure sustainable management of water' },
  { id: 7, title: 'Clean Energy', color: '#FCCC0A', description: 'Ensure access to modern and sustainable energy' },
  { id: 8, title: 'Economic Growth', color: '#A21942', description: 'Promote sustained economic growth and decent work' },
  { id: 9, title: 'Infrastructure', color: '#DD1C3B', description: 'Build resilient infrastructure and foster innovation' },
  { id: 10, title: 'Reduced Inequalities', color: '#DD1C58', description: 'Reduce inequality within and among countries' },
  { id: 11, title: 'Sustainable Cities', color: '#FD6925', description: 'Make cities and settlements inclusive and safe' },
  { id: 12, title: 'Responsible Consumption', color: '#BF8B2E', description: 'Ensure sustainable consumption patterns' },
  { id: 13, title: 'Climate Action', color: '#407D52', description: 'Take urgent action to combat climate change' },
  { id: 14, title: 'Life below Water', color: '#0A97D9', description: 'Conserve and sustainably use oceans and seas' },
  { id: 15, title: 'Life on Land', color: '#56C596', description: 'Protect and promote sustainable terrestrial ecosystems' },
  { id: 16, title: 'Peace & Justice', color: '#002D5C', description: 'Promote peaceful and inclusive societies' },
  { id: 17, title: 'Partnerships', color: '#1B4D6D', description: 'Strengthen means of implementation for partnership' },
]

export default function SDGSection() {
  return (
    <section className={styles.section} id="sdg-goals">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>UN Sustainable Development Goals</h2>
          <p>
            The 17 Sustainable Development Goals are a universal call to action to end poverty, protect the planet, and
            ensure peace and prosperity for all.
          </p>
        </div>

        <div className={styles.grid}>
          {SDG_GOALS.map((goal) => (
            <div key={goal.id} className={styles.card}>
              <div className={styles.background} style={{ backgroundColor: goal.color }} />
              <div className={styles.content}>
                <div className={styles.goalNumber}>{goal.id}</div>
                <h3>{goal.title}</h3>
                <p>{goal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
