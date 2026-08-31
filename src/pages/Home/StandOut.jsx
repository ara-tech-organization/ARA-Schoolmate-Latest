import Eyebrow from '../../components/ui/Eyebrow'
import CheckItem from '../../components/ui/CheckItem'
import Reveal from '../../components/ui/Reveal'
import styles from './StandOut.module.css'

const PANEL_ITEMS = [
  'Faster communication',
  'Better attendance visibility',
  'Secure cloud-based access',
  'Simplified fee management',
  'Real-time academic tracking',
  'Improved parent engagement',
]

function StandOut() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className={`container ${styles.row}`}>
        <div className={styles.copy}>
          <Eyebrow>What sets it apart</Eyebrow>
          <h2 className={styles.heading}>Why Does SchoolMate Stand Out?</h2>
          <h3 className={styles.subheading}>Designed for Modern Educational Institutions</h3>
          <p className={styles.bodyLg}>
            SchoolMate is not just a school management system, but a complete digital ecosystem for schools looking
            for operational excellence.
          </p>
          <p className={styles.body}>
            For schools that want better academic visibility and more advanced student monitoring software,
            SchoolMate is the software of choice.
          </p>
          <p className={styles.body}>
            Our platform is also a scalable education management system software for educational institutions of
            all sizes.
          </p>
        </div>
        <div className={styles.panel}>
          <h3 className={styles.panelHeading}>Why Schools Prefer SchoolMate?</h3>
          <ul className={styles.items}>
            {PANEL_ITEMS.map((label) => (
              <CheckItem key={label}>{label}</CheckItem>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  )
}

export default StandOut
