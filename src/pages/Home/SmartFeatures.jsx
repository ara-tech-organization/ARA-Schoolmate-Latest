import panelTransport from '../../assets/images/panel-transport.png'
import panelFees from '../../assets/images/panel-fees.png'
import Eyebrow from '../../components/ui/Eyebrow'
import CheckItem from '../../components/ui/CheckItem'
import Reveal from '../../components/ui/Reveal'
import Image from '../../components/ui/Image'
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
        <div className={styles.copy}>
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
        </div>
        <div className={styles.visual}>
          <Image src={panelTransport} alt="Transport tracking panel showing live bus routes" loading="lazy" decoding="async" />
          <Image src={panelFees} alt="Fee collection panel showing payment status" loading="lazy" decoding="async" />
        </div>
      </div>
    </Reveal>
  )
}

export default SmartFeatures
