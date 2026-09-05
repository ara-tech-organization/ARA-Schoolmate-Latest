import Reveal from '../../components/ui/Reveal'
import PhoneFrame from './PhoneFrame'
import AttendanceAppScreen from './AttendanceAppScreen'
import HomeworkAppScreen from './HomeworkAppScreen'
import FeesAppScreen from './FeesAppScreen'
import TimetableAppScreen from './TimetableAppScreen'
import CircularsAppScreen from './CircularsAppScreen'
import styles from './SmartFeatures.module.css'

const FEATURES = [
  {
    index: '01',
    title: 'Attendance Management',
    body: 'Digitally track and manage attendance with real-time parent alerts. The well-integrated student attendance management system boosts transparency and accountability and reduces manual work.',
    visual: (
      <PhoneFrame>
        <AttendanceAppScreen />
      </PhoneFrame>
    ),
    alt: 'SchoolMate attendance tracking screen',
  },
  {
    index: '02',
    title: 'Homework & Study Materials',
    body: 'Teachers and staff can upload homework, assignments, relevant documents, and study material directly through the SchoolMate app for easy access by students.',
    visual: (
      <PhoneFrame>
        <HomeworkAppScreen />
      </PhoneFrame>
    ),
    alt: 'SchoolMate homework and study materials screen',
  },
  {
    index: '03',
    title: 'Fees & Finance',
    body: 'The mobile app gives parents instant access to all fee details, complete payment history, and reminders.',
    visual: (
      <PhoneFrame>
        <FeesAppScreen />
      </PhoneFrame>
    ),
    alt: 'SchoolMate fees and payments screen',
  },
  {
    index: '04',
    title: 'Timetable & Exam Updates',
    body: 'Students and parents can easily access class schedules, exam schedules, and academic calendar details at any time.',
    visual: (
      <PhoneFrame>
        <TimetableAppScreen />
      </PhoneFrame>
    ),
    alt: 'SchoolMate timetable screen',
  },
  {
    index: '05',
    title: 'Circulars & Notifications',
    body: 'Schools can instantly send notifications, announcements, circulars, event updates, and emergency notifications.',
    visual: (
      <PhoneFrame>
        <CircularsAppScreen />
      </PhoneFrame>
    ),
    alt: 'SchoolMate circulars and notifications screen',
  },
]

function SmartFeatures() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Smart Features Inside the SchoolMate App</h2>

        <div className={styles.list}>
          {FEATURES.map((feature, i) => (
            <div key={feature.index} className={`${styles.row} ${i % 2 === 1 ? styles.reversed : ''}`}>
              <Reveal as="div" className={styles.copy} direction="up">
                <p className={styles.index}>{feature.index}</p>
                <h3 className={styles.title}>{feature.title}</h3>
                <p className={styles.body}>{feature.body}</p>
              </Reveal>
              <Reveal
                as="div"
                className={styles.visual}
                direction="up"
                delay={120}
                role="img"
                aria-label={feature.alt}
              >
                {feature.visual}
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export default SmartFeatures
