import attendanceIcon from '../../assets/icons/attendance-tracking.svg'
import communicationIcon from '../../assets/icons/communication-tools.svg'
import feeIcon from '../../assets/icons/fee-management.svg'
import timetableIcon from '../../assets/icons/timetable-scheduling.svg'
import academicIcon from '../../assets/icons/academic-monitoring.svg'
import transportIcon from '../../assets/icons/transport-management.svg'
import erpIcon from '../../assets/icons/erp-features.svg'
import Reveal from '../../components/ui/Reveal'
import DashboardMockup from '../Home/DashboardMockup'
import styles from './WhatWeCombine.module.css'

const CAPABILITIES = [
  { label: 'Attendance tracking', icon: attendanceIcon },
  { label: 'Communication tools', icon: communicationIcon },
  { label: 'Fee management', icon: feeIcon },
  { label: 'Timetable scheduling', icon: timetableIcon },
  { label: 'Academic monitoring', icon: academicIcon },
  { label: 'Transport management', icon: transportIcon },
  { label: 'ERP features', icon: erpIcon },
]

function WhatWeCombine() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className="container">
        <p className={styles.intro}>
          Our platform is an all-in-one solution that combines attendance tracking, communication tools, fee
          management, timetable scheduling, academic monitoring, transport management, and ERP features into one
          seamless dashboard.
        </p>

        <ul className={styles.tiles}>
          {CAPABILITIES.map((item) => (
            <li key={item.label} className={styles.tile}>
              <img src={item.icon} alt="" loading="lazy" decoding="async" width={20} height={20} />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>

        <div className={styles.connector} aria-hidden="true">
          <span className={styles.connectorLine} />
          <span className={styles.connectorDot} />
        </div>

        <div className={styles.dashboard} role="img" aria-label="SchoolMate admin dashboard showing attendance, homework, fees, and class-wise reports">
          <DashboardMockup />
        </div>
      </div>
    </Reveal>
  )
}

export default WhatWeCombine
