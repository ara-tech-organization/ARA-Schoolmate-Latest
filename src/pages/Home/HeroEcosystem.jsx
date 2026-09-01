import DashboardMockup from './DashboardMockup'
import CommunicationCard from './CommunicationCard'
import MiniAttendanceCard from './MiniAttendanceCard'
import PhoneMockup from './PhoneMockup'
import Reveal from '../../components/ui/Reveal'
import { getHeroRevealDelay } from '../../utils/pageLoaderTiming'
import styles from './HeroEcosystem.module.css'

function HeroEcosystem() {
  const base = getHeroRevealDelay()

  return (
    <div
      className={styles.ecosystem}
      role="img"
      aria-label="SchoolMate dashboard and mobile app showing attendance, communication, and fee management"
    >
      <Reveal as="div" className={styles.dashboard} direction="up" delay={base}>
        <DashboardMockup />
      </Reveal>
      <Reveal as="div" className={styles.communication} direction="down" delay={base + 140}>
        <CommunicationCard />
      </Reveal>
      <Reveal as="div" className={styles.attendance} direction="up" delay={base + 220}>
        <MiniAttendanceCard />
      </Reveal>
      <Reveal as="div" className={styles.phone} direction="left" delay={base + 320}>
        <PhoneMockup />
      </Reveal>
    </div>
  )
}

export default HeroEcosystem
