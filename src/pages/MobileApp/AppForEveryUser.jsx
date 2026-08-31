import CheckItem from '../../components/ui/CheckItem'
import roleParents from '../../assets/images/role-parents.png'
import roleTeachers from '../../assets/images/role-teachers.png'
import roleAdmins from '../../assets/images/role-admins.png'
import Reveal from '../../components/ui/Reveal'
import styles from './AppForEveryUser.module.css'

const ROLES = [
  {
    key: 'parents',
    title: 'For Parents',
    image: roleParents,
    alt: 'SchoolMate app parent dashboard',
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
    image: roleTeachers,
    alt: 'SchoolMate app attendance screen for teachers',
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
    image: roleAdmins,
    alt: 'SchoolMate app circulars screen for administrators',
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

        <div className={styles.grid}>
          {ROLES.map((role) => (
            <div key={role.key} className={styles.card}>
              <div className={styles.visual}>
                <img src={role.image} alt={role.alt} loading="lazy" decoding="async" />
              </div>
              <h3 className={styles.title}>{role.title}</h3>
              <ul className={styles.items}>
                {role.items.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export default AppForEveryUser
