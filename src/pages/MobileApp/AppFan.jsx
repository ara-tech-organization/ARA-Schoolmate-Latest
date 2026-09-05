import PhoneFrame from './PhoneFrame'
import AttendanceAppScreen from './AttendanceAppScreen'
import CircularsAppScreen from './CircularsAppScreen'
import PhoneMockup from '../Home/PhoneMockup'
import Reveal from '../../components/ui/Reveal'
import styles from './AppFan.module.css'

function AppFan() {
  return (
    <div
      className={styles.fan}
      role="img"
      aria-label="SchoolMate app screens showing attendance, circulars and the parent dashboard"
    >
      <Reveal as="div" className={styles.attendance} direction="up" delay={140}>
        <PhoneFrame>
          <AttendanceAppScreen />
        </PhoneFrame>
      </Reveal>
      <Reveal as="div" className={styles.circulars} direction="up" delay={220}>
        <PhoneFrame>
          <CircularsAppScreen />
        </PhoneFrame>
      </Reveal>
      <Reveal as="div" className={styles.main} direction="up">
        <PhoneMockup />
      </Reveal>
    </div>
  )
}

export default AppFan
