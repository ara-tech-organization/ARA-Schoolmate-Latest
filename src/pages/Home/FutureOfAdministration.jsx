import visual from '../../assets/images/dashboard-admin.png'
import Eyebrow from '../../components/ui/Eyebrow'
import Reveal from '../../components/ui/Reveal'
import styles from './FutureOfAdministration.module.css'

function FutureOfAdministration() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className={`container ${styles.row}`}>
        <div className={styles.copy}>
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
        </div>
        <div className={styles.visual}>
          <img src={visual} alt="SchoolMate attendance dashboard" loading="lazy" decoding="async" />
        </div>
      </div>
    </Reveal>
  )
}

export default FutureOfAdministration
