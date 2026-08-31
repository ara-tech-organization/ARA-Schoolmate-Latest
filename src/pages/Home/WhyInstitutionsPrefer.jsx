import visual from '../../assets/images/mobile-app-institutions.png'
import Eyebrow from '../../components/ui/Eyebrow'
import CheckItem from '../../components/ui/CheckItem'
import Reveal from '../../components/ui/Reveal'
import styles from './WhyInstitutionsPrefer.module.css'

const ITEMS = [
  'Secure cloud infrastructure',
  'Easy-to-use dashboard',
  'Fast implementation process',
  'Mobile-first accessibility',
  'Reliable support and onboarding',
]

function WhyInstitutionsPrefer() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className={`container ${styles.row}`}>
        <div className={styles.visual}>
          <img src={visual} alt="SchoolMate mobile app on a phone" />
        </div>
        <div className={styles.copy}>
          <Eyebrow>Why they choose it</Eyebrow>
          <h3 className={styles.heading}>Why Institutions Prefer SchoolMate?</h3>
          <ul className={styles.items}>
            {ITEMS.map((label) => (
              <CheckItem key={label}>{label}</CheckItem>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  )
}

export default WhyInstitutionsPrefer
