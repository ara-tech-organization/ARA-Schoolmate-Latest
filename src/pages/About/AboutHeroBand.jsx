import DashboardMockup from '../Home/DashboardMockup'
import PhoneMockup from '../Home/PhoneMockup'
import CommunicationCard from '../Home/CommunicationCard'
import styles from './AboutHeroBand.module.css'

function AboutHeroBand() {
  return (
    <div
      className={styles.band}
      role="img"
      aria-label="SchoolMate dashboard and mobile app running for a school, with a communication panel"
    >
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={styles.dashboard}>
        <DashboardMockup />
      </div>
      <div className={styles.phone}>
        <PhoneMockup />
      </div>
      <div className={styles.communication}>
        <CommunicationCard />
      </div>
    </div>
  )
}

export default AboutHeroBand
