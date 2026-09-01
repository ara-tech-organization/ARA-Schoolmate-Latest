import Eyebrow from '../../components/ui/Eyebrow'
import CheckItem from '../../components/ui/CheckItem'
import Reveal from '../../components/ui/Reveal'
import TransportTrackingPanel from './TransportTrackingPanel'
import FeeCollectionPanel from './FeeCollectionPanel'
import styles from './SmartFeatures.module.css'

const HIGHLIGHTS = [
  'Real-time notifications',
  'Mobile app integration',
  'Cloud-based security',
  'Role-based access control',
  'Paperless workflows',
  'Fast communication delivery',
]

function SmartFeatures() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className={`container ${styles.row}`}>
        <Reveal as="div" className={styles.copy} direction="right">
          <Eyebrow>Outcomes</Eyebrow>
          <h2 className={styles.heading}>Smart Features That Drive Results</h2>
          <p className={styles.body}>
            SchoolMate is one scalable platform that integrates full automation and entire communication.
          </p>
          <h4 className={styles.highlightsLabel}>Key Highlights</h4>
          <ul className={styles.highlights}>
            {HIGHLIGHTS.map((label) => (
              <CheckItem key={label}>{label}</CheckItem>
            ))}
          </ul>
          <p className={styles.closing}>
            Smartschool erp SchoolMate is a productivity booster for schools that cuts down operational complexity.
          </p>
          <p className={styles.closing}>
            The platform also comes with advanced student information management software capabilities for better
            handling of records and analytics.
          </p>
        </Reveal>
        <div className={styles.visual}>
          <Reveal as="div" className={`${styles.frame} ${styles.frameTransport}`} direction="left" delay={120}>
            <TransportTrackingPanel />
          </Reveal>
          <Reveal as="div" className={`${styles.frame} ${styles.frameFees}`} direction="left" delay={220}>
            <FeeCollectionPanel />
          </Reveal>
        </div>
      </div>
    </Reveal>
  )
}

export default SmartFeatures
