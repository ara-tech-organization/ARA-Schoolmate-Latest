import Eyebrow from '../../components/ui/Eyebrow'
import CheckItem from '../../components/ui/CheckItem'
import Reveal from '../../components/ui/Reveal'
import PhoneMockup from './PhoneMockup'
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
        <Reveal
          as="div"
          className={styles.visual}
          direction="up"
          role="img"
          aria-label="SchoolMate mobile app showing today's attendance, homework, fees, and circulars"
        >
          <PhoneMockup />
        </Reveal>
        <Reveal as="div" className={styles.copy} direction="up" delay={120}>
          <Eyebrow>Why they choose it</Eyebrow>
          <h3 className={styles.heading}>Why Institutions Prefer SchoolMate?</h3>
          <ul className={styles.items}>
            {ITEMS.map((label) => (
              <CheckItem key={label}>{label}</CheckItem>
            ))}
          </ul>
        </Reveal>
      </div>
    </Reveal>
  )
}

export default WhyInstitutionsPrefer
