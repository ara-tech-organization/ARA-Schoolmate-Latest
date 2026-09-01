import Eyebrow from '../../components/ui/Eyebrow'
import Button from '../../components/ui/Button'
import CheckItem from '../../components/ui/CheckItem'
import Reveal from '../../components/ui/Reveal'
import RevealGroup from '../../components/ui/RevealGroup'
import MarkAttendanceCard from './MarkAttendanceCard'
import ParentPhoneCard from './ParentPhoneCard'
import AdminDashboardCard from './AdminDashboardCard'
import styles from './EveryUser.module.css'

const ROLES = [
  {
    title: 'For Teachers',
    visual: <MarkAttendanceCard />,
    items: [
      'Mark attendance instantly',
      'Upload homework and marks',
      'Send updates to parents',
      'Access student records quickly',
    ],
  },
  {
    title: 'For Parents',
    visual: <ParentPhoneCard />,
    items: [
      'Monitor attendance and homework',
      'View exam schedules and results',
      'Receive instant alerts',
      'Pay fees online',
      'Access all communication in one place',
    ],
  },
  {
    title: 'For School Administrators',
    visual: <AdminDashboardCard />,
    items: [
      'Centralized dashboards',
      'Fee and finance tracking',
      'Timetable planning',
      'Circular and event management',
      'Analytics and reporting',
    ],
  },
]

function EveryUser() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className="container">
        <Eyebrow align="center">Built for every role</Eyebrow>
        <h2 className={styles.heading}>Powerful Features for Every User</h2>

        <RevealGroup className={styles.grid}>
          {ROLES.map((role) => (
            <div key={role.title} className={styles.role}>
              <div className={`${styles.well} ${styles.wellCard}`}>{role.visual}</div>
              <h3 className={styles.roleTitle}>{role.title}</h3>
              <ul className={styles.items}>
                {role.items.map((label) => (
                  <CheckItem key={label}>{label}</CheckItem>
                ))}
              </ul>
            </div>
          ))}
        </RevealGroup>

        <div className={styles.actions}>
          <Button to="/contact">Get a free Demo</Button>
        </div>
      </div>
    </Reveal>
  )
}

export default EveryUser
