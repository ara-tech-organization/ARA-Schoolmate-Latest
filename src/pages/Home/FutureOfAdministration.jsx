import Eyebrow from '../../components/ui/Eyebrow'
import Reveal from '../../components/ui/Reveal'
import DashboardMockup from './DashboardMockup'
import styles from './FutureOfAdministration.module.css'

function FutureOfAdministration() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className={`container ${styles.row}`}>
        <Reveal as="div" className={styles.copy} direction="right">
          <Eyebrow>One smart dashboard</Eyebrow>
          <h2 className={styles.heading}>The Future of Digital School Administration Starts Here</h2>
          <p className={styles.body}>
            SchoolMate is modern student management software designed to help educational institutions streamline
            academic and administrative workflows.
          </p>
          <p className={styles.body}>
            Our software removes paperwork, reduces manual work, and allows schools to run their day-to-day
            activities through a single smart dashboard.
          </p>
        </Reveal>
        <Reveal as="div" className={styles.visual} direction="left" delay={120}>
          <DashboardMockup />
        </Reveal>
      </div>
    </Reveal>
  )
}

export default FutureOfAdministration
