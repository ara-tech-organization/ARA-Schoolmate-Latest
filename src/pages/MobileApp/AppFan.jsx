import PhoneFrame from './PhoneFrame'
import AttendanceAppScreen from './AttendanceAppScreen'
import CircularsAppScreen from './CircularsAppScreen'
import PhoneMockup from '../Home/PhoneMockup'
import styles from './AppFan.module.css'

function AppFan() {
  return (
    <div
      className={styles.fan}
      role="img"
      aria-label="SchoolMate app screens showing attendance, circulars and the parent dashboard"
    >
      <div className={styles.attendance}>
        <PhoneFrame>
          <AttendanceAppScreen />
        </PhoneFrame>
      </div>
      <div className={styles.circulars}>
        <PhoneFrame>
          <CircularsAppScreen />
        </PhoneFrame>
      </div>
      <div className={styles.main}>
        <PhoneMockup />
      </div>
    </div>
  )
}

export default AppFan
