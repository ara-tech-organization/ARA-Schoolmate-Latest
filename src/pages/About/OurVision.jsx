import Reveal from '../../components/ui/Reveal'
import DashboardMockup from '../Home/DashboardMockup'
import AcademicsPanel from '../Home/AcademicsPanel'
import styles from './OurVision.module.css'

function OurVision() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className={`container ${styles.split}`}>
        <Reveal as="div" className={styles.copy} direction="up">
          <p className={styles.kicker}>Our Vision</p>
          <h2 className={styles.heading}>Transforming Education Through Smart Digital Innovation</h2>
          <p className={styles.body}>
            Our vision is to refine how schools and institutions operate by creating a future-ready smartschool
            management system that promotes academic excellence, operational transparency, and better
            parent-school collaboration.
          </p>
          <p className={`${styles.body} ${styles.bodyTight}`}>
            At Ara Discoveries, we believe SchoolMate will become a trusted student school management system
            worldwide, enabling educational institutions to confidently embark on digital transformation.
          </p>
        </Reveal>

        <Reveal as="div" className={styles.visual} direction="up" delay={120}>
          <div className={styles.dashboard}>
            <DashboardMockup />
          </div>
          <div className={styles.academics}>
            <AcademicsPanel />
          </div>
        </Reveal>
      </div>
    </Reveal>
  )
}

export default OurVision
