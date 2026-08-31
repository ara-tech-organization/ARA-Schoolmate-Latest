import refreshIcon from '../../assets/icons/reduce-manual-work.svg'
import usersIcon from '../../assets/icons/improve-parent-engagement.svg'
import slidersIcon from '../../assets/icons/automate-administration.svg'
import trendingUpIcon from '../../assets/icons/increase-operational-efficiency.svg'
import zapIcon from '../../assets/icons/deliver-real-time-updates.svg'
import Reveal from '../../components/ui/Reveal'
import styles from './HelpsSchools.module.css'

const OUTCOMES = [
  { label: 'Reduce manual work', icon: refreshIcon },
  { label: 'Improve parent engagement', icon: usersIcon },
  { label: 'Automate administration', icon: slidersIcon },
  { label: 'Increase operational efficiency', icon: trendingUpIcon },
  { label: 'Deliver real-time updates', icon: zapIcon },
]

function HelpsSchools() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className="container">
        <h2 className={styles.lead}>SchoolMate is a trusted smartschool management system that helps schools:</h2>

        <ul className={styles.outcomes}>
          {OUTCOMES.map((item) => (
            <li key={item.label} className={styles.outcome}>
              <span className={styles.iconTile}>
                <img src={item.icon} alt="" loading="lazy" decoding="async" width={24} height={24} />
              </span>
              <span className={styles.outcomeLabel}>{item.label}</span>
            </li>
          ))}
        </ul>

        <p className={styles.closing}>
          SchoolMate has everything modern schools need to grow digitally. From attendance alerts, homework
          notifications, online fee management to academic analytics.
        </p>
      </div>
    </Reveal>
  )
}

export default HelpsSchools
