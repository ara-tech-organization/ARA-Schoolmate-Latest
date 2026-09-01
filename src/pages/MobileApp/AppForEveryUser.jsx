import CheckItem from '../../components/ui/CheckItem'
import Reveal from '../../components/ui/Reveal'
import RevealGroup from '../../components/ui/RevealGroup'
import PhoneFrame from './PhoneFrame'
import PhoneMockup from '../Home/PhoneMockup'
import AttendanceAppScreen from './AttendanceAppScreen'
import CircularsAppScreen from './CircularsAppScreen'
import styles from './AppForEveryUser.module.css'

const ROLES = [
  {
    key: 'parents',
    title: 'For Parents',
    alt: 'SchoolMate app parent dashboard',
    visual: <PhoneMockup />,
    items: [
      'Monitor attendance and homework',
      'Receive instant school updates',
      'View exam results and schedules',
      'Access fee reminders and payment details',
      'Stay connected with teachers',
    ],
  },
  {
    key: 'teachers',
    title: 'For Teachers',
    alt: 'SchoolMate app attendance screen for teachers',
    visual: (
      <PhoneFrame>
        <AttendanceAppScreen />
      </PhoneFrame>
    ),
    items: [
      'Mark attendance digitally',
      'Upload homework and marks',
      'Share classroom updates',
      'Access student records instantly',
    ],
  },
  {
    key: 'admins',
    title: 'For School Administrators',
    alt: 'SchoolMate app circulars screen for administrators',
    visual: (
      <PhoneFrame>
        <CircularsAppScreen />
      </PhoneFrame>
    ),
    items: [
      'Manage communication centrally',
      'Monitor attendance reports',
      'Track academic performance',
      'Improve operational efficiency',
    ],
  },
]

function AppForEveryUser() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>SchoolMate App for Every User</h2>

        <RevealGroup className={styles.grid}>
          {ROLES.map((role) => (
            <div key={role.key} className={styles.card}>
              <div className={styles.visual} role="img" aria-label={role.alt}>
                <div className={styles.phoneSlot}>{role.visual}</div>
              </div>
              <h3 className={styles.title}>{role.title}</h3>
              <ul className={styles.items}>
                {role.items.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>
          ))}
        </RevealGroup>
      </div>
    </Reveal>
  )
}

export default AppForEveryUser
