import DashboardMockup from './DashboardMockup'
import CommunicationCard from './CommunicationCard'
import MiniAttendanceCard from './MiniAttendanceCard'
import PhoneMockup from './PhoneMockup'
import styles from './HeroEcosystem.module.css'

function HeroEcosystem() {
  return (
    <div
      className={styles.ecosystem}
      role="img"
      aria-label="SchoolMate dashboard and mobile app showing attendance, communication, and fee management"
    >
      <div className={styles.dashboard}>
        <DashboardMockup />
      </div>
      <div className={styles.communication}>
        <CommunicationCard />
      </div>
      <div className={styles.attendance}>
        <MiniAttendanceCard />
      </div>
      <div className={styles.phone}>
        <PhoneMockup />
      </div>
    </div>
  )
}

export default HeroEcosystem
