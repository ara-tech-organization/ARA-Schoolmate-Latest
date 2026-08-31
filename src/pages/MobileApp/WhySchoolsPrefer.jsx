import zapIcon from '../../assets/icons/zap.svg'
import fileTextIcon from '../../assets/icons/file-text.svg'
import usersIcon from '../../assets/icons/users.svg'
import monitorIcon from '../../assets/icons/monitor.svg'
import Reveal from '../../components/ui/Reveal'
import styles from './WhySchoolsPrefer.module.css'

const REASONS = [
  {
    icon: zapIcon,
    title: 'Fast & Secure Communication',
    body: 'Unlimited notifications, updates. Instantly. No text message limits.',
  },
  {
    icon: fileTextIcon,
    title: 'Paperless School Operations',
    body: 'Digitize attendance, alerts, circulars, homework, consent forms, and academic workflows.',
  },
  {
    icon: usersIcon,
    title: 'Improved Parent Engagement',
    body: 'Keep Parents informed with Live Notifications on Attendance, Tests, Homework, and School Activities.',
  },
  {
    icon: monitorIcon,
    title: 'Easy-to-Use Dashboard',
    body: 'One simple and intuitive interface for all school activities.',
  },
]

function WhySchoolsPrefer() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Why Do Schools Prefer SchoolMate Mobile App?</h2>

        <div className={styles.grid}>
          {REASONS.map((reason) => (
            <div key={reason.title} className={styles.card}>
              <div className={styles.iconTile}>
                <img src={reason.icon} alt="" loading="lazy" decoding="async" aria-hidden="true" />
              </div>
              <div className={styles.copy}>
                <h3>{reason.title}</h3>
                <p>{reason.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export default WhySchoolsPrefer
