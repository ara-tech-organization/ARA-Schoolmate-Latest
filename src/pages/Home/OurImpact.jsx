import Eyebrow from '../../components/ui/Eyebrow'
import Reveal from '../../components/ui/Reveal'
import RevealGroup from '../../components/ui/RevealGroup'
import styles from './OurImpact.module.css'

const IMPACTS = [
  'Faster communication between schools and parents',
  'Reduced manual workload for teachers and staff',
  'Improved attendance visibility and reporting',
  'Real-time updates and centralized school management',
  'Increased parent engagement through mobile notifications',
  'Paperless workflows for smarter administration',
]

function OurImpact() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className="container">
        <Eyebrow>Outcomes</Eyebrow>
        <h2 className={styles.heading}>Our Impact</h2>
        <RevealGroup as="ul" className={styles.grid}>
          {IMPACTS.map((label, i) => (
            <li key={label} className={styles.item}>
              <span className={styles.index}>{String(i + 1).padStart(2, '0')}</span>
              <p>{label}</p>
            </li>
          ))}
        </RevealGroup>
      </div>
    </Reveal>
  )
}

export default OurImpact
