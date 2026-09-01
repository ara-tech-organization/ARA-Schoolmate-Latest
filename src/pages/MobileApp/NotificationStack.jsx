import brandMark from '../../assets/images/brand-mark.png'
import styles from './NotificationStack.module.css'

const NOTIFICATIONS = [
  { time: 'now', title: 'Attendance', body: 'Marked present at 08:42 AM' },
  { time: '2m', title: 'Homework', body: 'Mathematics · Ch. 7 exercises due today' },
  { time: '1h', title: 'Fees', body: 'Term II payment due 30 Sep' },
]

function NotificationStack() {
  return (
    <div className={styles.stackWrap} aria-hidden="true">
      <div className={styles.stack}>
        {NOTIFICATIONS.map((item) => (
          <div key={item.title} className={styles.card}>
            <div className={styles.head}>
              <img src={brandMark} alt="" className={styles.mark} />
              <p className={styles.brand}>SchoolMate</p>
              <span className={styles.spacer} />
              <p className={styles.time}>{item.time}</p>
            </div>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.body}>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NotificationStack
