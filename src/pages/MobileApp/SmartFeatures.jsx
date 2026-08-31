import appAttendance from '../../assets/images/app-attendance.png'
import appHomework from '../../assets/images/app-homework.png'
import appFees from '../../assets/images/app-fees.png'
import appTimetable from '../../assets/images/app-timetable.png'
import appCirculars from '../../assets/images/app-circulars.png'
import Reveal from '../../components/ui/Reveal'
import Image from '../../components/ui/Image'
import styles from './SmartFeatures.module.css'

const FEATURES = [
  {
    index: '01',
    title: 'Attendance Management',
    body: 'Digitally track and manage attendance with real-time parent alerts. The well-integrated student attendance management system boosts transparency and accountability and reduces manual work.',
    image: appAttendance,
    alt: 'SchoolMate attendance tracking screen',
  },
  {
    index: '02',
    title: 'Homework & Study Materials',
    body: 'Teachers and staff can upload homework, assignments, relevant documents, and study material directly through the SchoolMate app for easy access by students.',
    image: appHomework,
    alt: 'SchoolMate homework and study materials screen',
  },
  {
    index: '03',
    title: 'Fees & Finance',
    body: 'The mobile app gives parents instant access to all fee details, complete payment history, and reminders.',
    image: appFees,
    alt: 'SchoolMate fees and payments screen',
  },
  {
    index: '04',
    title: 'Timetable & Exam Updates',
    body: 'Students and parents can easily access class schedules, exam schedules, and academic calendar details at any time.',
    image: appTimetable,
    alt: 'SchoolMate timetable screen',
  },
  {
    index: '05',
    title: 'Circulars & Notifications',
    body: 'Schools can instantly send notifications, announcements, circulars, event updates, and emergency notifications.',
    image: appCirculars,
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
              <div className={styles.copy}>
                <p className={styles.index}>{feature.index}</p>
                <h3 className={styles.title}>{feature.title}</h3>
                <p className={styles.body}>{feature.body}</p>
              </div>
              <div className={styles.visual}>
                <Image src={feature.image} alt={feature.alt} loading="lazy" decoding="async" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export default SmartFeatures
