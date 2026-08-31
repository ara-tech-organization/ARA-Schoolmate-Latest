import dashboardIcon from '../../assets/icons/stat-dashboard.svg'
import Eyebrow from '../../components/ui/Eyebrow'
import Reveal from '../../components/ui/Reveal'
import styles from './KeyStatistics.module.css'

const STATS = [
  { value: '3+', label: 'Years of Industry Experience' },
  { value: '20+', label: 'Smart Modules Integrated' },
  { value: '99%', label: 'Client Satisfaction Rate' },
  { value: '24/7', label: 'Cloud-Based Accessibility' },
  { value: '80%', label: 'Reduction in Manual Administrative Work' },
]

function KeyStatistics() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className="container">
        <Eyebrow align="center" tone="inverse">
          By the numbers
        </Eyebrow>
        <ul className={styles.grid}>
          {STATS.map((stat) => (
            <li key={stat.label} className={styles.stat}>
              <p className={styles.value}>{stat.value}</p>
              <p className={styles.label}>{stat.label}</p>
            </li>
          ))}
          <li className={styles.stat}>
            <img src={dashboardIcon} alt="" loading="lazy" decoding="async" className={styles.icon} width={30} height={30} />
            <p className={styles.labelStrong}>Complete All-in-One Dashboard</p>
          </li>
        </ul>
      </div>
    </Reveal>
  )
}

export default KeyStatistics
