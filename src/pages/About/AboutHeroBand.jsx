import DashboardMockup from '../Home/DashboardMockup'
import PhoneMockup from '../Home/PhoneMockup'
import CommunicationCard from '../Home/CommunicationCard'
import Reveal from '../../components/ui/Reveal'
import styles from './AboutHeroBand.module.css'

function AboutHeroBand() {
  return (
    <div
      className={styles.band}
      role="img"
      aria-label="SchoolMate dashboard and mobile app running for a school, with a communication panel"
    >
      <div className={styles.backdrop} aria-hidden="true" />
      <Reveal as="div" className={styles.dashboard} direction="up">
        <DashboardMockup />
      </Reveal>
      <Reveal as="div" className={styles.phone} direction="up" delay={140}>
        <PhoneMockup />
      </Reveal>
      <Reveal as="div" className={styles.communication} direction="up" delay={240}>
        <CommunicationCard />
      </Reveal>
    </div>
  )
}

export default AboutHeroBand
