import brandMark from '../../assets/images/brand-mark.png'
import attendanceIcon from '../../assets/icons/attendance-tracking.svg'
import biometricIcon from '../../assets/icons/fn-shield-check.svg'
import feeIcon from '../../assets/icons/fee-management.svg'
import payrollIcon from '../../assets/icons/fn-briefcase.svg'
import homeworkIcon from '../../assets/icons/tile-book.svg'
import transportIcon from '../../assets/icons/fn-bus.svg'
import notificationsIcon from '../../assets/icons/fn-bell.svg'
import reportsIcon from '../../assets/icons/fn-chart.svg'
import Reveal from '../../components/ui/Reveal'
import RevealGroup from '../../components/ui/RevealGroup'
import styles from './ModuleEcosystem.module.css'

const TOP_MODULES = [
  { icon: attendanceIcon, label: 'Attendance tracking', fill: 45 },
  { icon: biometricIcon, label: 'Biometric integration support', fill: 78 },
  { icon: feeIcon, label: 'Fee and finance management', fill: 92 },
  { icon: payrollIcon, label: 'Payroll and leave management', fill: 88 },
]

const BOTTOM_MODULES = [
  { icon: homeworkIcon, label: 'Homework and timetable tools', fill: 48 },
  { icon: transportIcon, label: 'GPS-based transport tracking', fill: 72 },
  { icon: notificationsIcon, label: 'Notifications and messaging', fill: 92 },
  { icon: reportsIcon, label: 'Reports and analytics', fill: 80 },
]

function ModuleRow({ modules }) {
  return (
    <RevealGroup className={styles.row}>
      {modules.map((module) => (
        <div key={module.label} className={styles.card}>
          <div className={styles.cardHead}>
            <img src={module.icon} alt="" className={styles.icon} />
            <span>{module.label}</span>
          </div>
          <div className={styles.track}>
            <div className={styles.fill} style={{ width: `${module.fill}%` }} />
          </div>
        </div>
      ))}
    </RevealGroup>
  )
}

function Branch({ stemsOn }) {
  return (
    <div
      className={`${styles.branch} ${stemsOn === 'top' ? styles.branchStemsTop : styles.branchStemsBottom}`}
      aria-hidden="true"
    >
      <div className={styles.stemRow}>
        <span className={styles.stem} />
        <span className={styles.stem} />
        <span className={styles.stem} />
        <span className={styles.stem} />
      </div>
      <div className={styles.hline} />
      <div className={styles.vline} />
      <div className={styles.dot} />
    </div>
  )
}

function ModuleEcosystem() {
  return (
    <div className={styles.ecosystem} role="img" aria-label="SchoolMate module ecosystem connecting attendance, biometric integration, fee and payroll management, homework and timetable tools, transport tracking, notifications, and reports around the platform hub">
      <ModuleRow modules={TOP_MODULES} />
      <Branch stemsOn="top" />
      <Reveal as="div" className={styles.hub} direction="up" delay={180}>
        <img src={brandMark} alt="" className={styles.hubIcon} />
        <span className={styles.hubLabel}>SchoolMate</span>
      </Reveal>
      <Branch stemsOn="bottom" />
      <ModuleRow modules={BOTTOM_MODULES} />
    </div>
  )
}

export default ModuleEcosystem
