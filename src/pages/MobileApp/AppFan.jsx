import PhoneFrame from './PhoneFrame'
import AttendanceAppScreen from './AttendanceAppScreen'
import CircularsAppScreen from './CircularsAppScreen'
import PhoneMockup from '../Home/PhoneMockup'
import Reveal from '../../components/ui/Reveal'
import { getHeroRevealDelay } from '../../utils/pageLoaderTiming'
import styles from './AppFan.module.css'

function AppFan() {
  const base = getHeroRevealDelay()

  return (
    <div
      className={styles.fan}
      role="img"
      aria-label="SchoolMate app screens showing attendance, circulars and the parent dashboard"
    >
      <Reveal as="div" className={styles.attendance} direction="right" delay={base + 140}>
        <PhoneFrame>
          <AttendanceAppScreen />
        </PhoneFrame>
      </Reveal>
      <Reveal as="div" className={styles.circulars} direction="left" delay={base + 220}>
        <PhoneFrame>
          <CircularsAppScreen />
        </PhoneFrame>
      </Reveal>
      <Reveal as="div" className={styles.main} direction="up" delay={base}>
        <PhoneMockup />
      </Reveal>
    </div>
  )
}

export default AppFan
