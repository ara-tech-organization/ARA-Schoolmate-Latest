import checkInverse from '../../assets/icons/check-circle-inverse.svg'
import Reveal from '../../components/ui/Reveal'
import RevealGroup from '../../components/ui/RevealGroup'
import PhoneMockup from '../Home/PhoneMockup'
import PhoneFrame from './PhoneFrame'
import AttendanceAppScreen from './AttendanceAppScreen'
import HomeworkAppScreen from './HomeworkAppScreen'
import FeesAppScreen from './FeesAppScreen'
import TimetableAppScreen from './TimetableAppScreen'
import CircularsAppScreen from './CircularsAppScreen'
import styles from './OneApp.module.css'

const DEVICES = [
  { key: 'dashboard', node: <PhoneMockup />, alt: 'SchoolMate parent dashboard app screen' },
  {
    key: 'attendance',
    node: (
      <PhoneFrame>
        <AttendanceAppScreen />
      </PhoneFrame>
    ),
    alt: 'SchoolMate attendance app screen',
  },
  {
    key: 'homework',
    node: (
      <PhoneFrame>
        <HomeworkAppScreen />
      </PhoneFrame>
    ),
    alt: 'SchoolMate homework app screen',
  },
  {
    key: 'fees',
    node: (
      <PhoneFrame>
        <FeesAppScreen />
      </PhoneFrame>
    ),
    alt: 'SchoolMate fees app screen',
  },
  {
    key: 'timetable',
    node: (
      <PhoneFrame>
        <TimetableAppScreen />
      </PhoneFrame>
    ),
    alt: 'SchoolMate timetable app screen',
  },
  {
    key: 'circulars',
    node: (
      <PhoneFrame>
        <CircularsAppScreen />
      </PhoneFrame>
    ),
    alt: 'SchoolMate circulars app screen',
  },
]

const FUNCTIONS = [
  'A smart school management system',
  'A student school management system',
  'A digital attendance platform',
  'A communication management solution',
  'A centralized academic management app',
]

function OneApp() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>One App, Complete School Control</h2>
        <p className={styles.lead}>The SchoolMate Mobile App is designed to function as:</p>

        <RevealGroup className={styles.devices}>
          {DEVICES.map((device) => (
            <div key={device.key} className={styles.device} role="img" aria-label={device.alt}>
              {device.node}
            </div>
          ))}
        </RevealGroup>

        <RevealGroup className={styles.functions}>
          {FUNCTIONS.map((fn) => (
            <div key={fn} className={styles.function}>
              <img src={checkInverse} alt="" loading="lazy" decoding="async" aria-hidden="true" />
              <p>{fn}</p>
            </div>
          ))}
        </RevealGroup>

        <p className={styles.closing}>
          SchoolMate helps institutions modernise school operations with cloud-based security and
          mobile accessibility without the complexity.
        </p>
      </div>
    </Reveal>
  )
}

export default OneApp
