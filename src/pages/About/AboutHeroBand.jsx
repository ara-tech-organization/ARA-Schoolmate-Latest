import DashboardMockup from '../Home/DashboardMockup'
import PhoneMockup from '../Home/PhoneMockup'
import CommunicationCard from '../Home/CommunicationCard'
import Reveal from '../../components/ui/Reveal'
import { getHeroRevealDelay } from '../../utils/pageLoaderTiming'
import styles from './AboutHeroBand.module.css'

function AboutHeroBand() {
  const base = getHeroRevealDelay()

  return (
    <div
      className={styles.band}
      role="img"
      aria-label="SchoolMate dashboard and mobile app running for a school, with a communication panel"
    >
      <div className={styles.backdrop} aria-hidden="true" />
      <Reveal as="div" className={styles.dashboard} direction="up" delay={base}>
        <DashboardMockup />
      </Reveal>
      <Reveal as="div" className={styles.phone} direction="down" delay={base + 140}>
        <PhoneMockup />
      </Reveal>
      <Reveal as="div" className={styles.communication} direction="left" delay={base + 240}>
        <CommunicationCard />
      </Reveal>
    </div>
  )
}

export default AboutHeroBand
