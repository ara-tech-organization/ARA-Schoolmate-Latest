import checkInverse from '../../assets/icons/check-circle-inverse.svg'
import appMockup from '../../assets/images/app-mockup-standalone.png'
import appAttendance from '../../assets/images/app-attendance.png'
import appHomework from '../../assets/images/app-homework.png'
import appFees from '../../assets/images/app-fees.png'
import appTimetable from '../../assets/images/app-timetable.png'
import appCirculars from '../../assets/images/app-circulars.png'
import Reveal from '../../components/ui/Reveal'
import styles from './OneApp.module.css'

const DEVICES = [
  { src: appMockup, alt: 'SchoolMate parent dashboard app screen' },
  { src: appAttendance, alt: 'SchoolMate attendance app screen' },
  { src: appHomework, alt: 'SchoolMate homework app screen' },
  { src: appFees, alt: 'SchoolMate fees app screen' },
  { src: appTimetable, alt: 'SchoolMate timetable app screen' },
  { src: appCirculars, alt: 'SchoolMate circulars app screen' },
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

        <div className={styles.devices}>
          {DEVICES.map((device) => (
            <div key={device.alt} className={styles.device}>
              <img src={device.src} alt={device.alt} />
            </div>
          ))}
        </div>

        <div className={styles.functions}>
          {FUNCTIONS.map((fn) => (
            <div key={fn} className={styles.function}>
              <img src={checkInverse} alt="" aria-hidden="true" />
              <p>{fn}</p>
            </div>
          ))}
        </div>

        <p className={styles.closing}>
          SchoolMate helps institutions modernise school operations with cloud-based security and
          mobile accessibility without the complexity.
        </p>
      </div>
    </Reveal>
  )
}

export default OneApp
