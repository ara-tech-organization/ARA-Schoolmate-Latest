import PhoneFrame from './PhoneFrame'
import CircularsAppScreen from './CircularsAppScreen'
import NotificationStack from './NotificationStack'
import styles from './WhyChooseVisual.module.css'

function WhyChooseVisual() {
  return (
    <div
      className={styles.visual}
      role="img"
      aria-label="SchoolMate app circulars screen with push notifications for attendance, homework, and fees"
    >
      <div className={styles.phone}>
        <PhoneFrame>
          <CircularsAppScreen />
        </PhoneFrame>
      </div>
      <div className={styles.stack}>
        <NotificationStack />
      </div>
    </div>
  )
}

export default WhyChooseVisual
