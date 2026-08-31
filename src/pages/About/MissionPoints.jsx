import Reveal from '../../components/ui/Reveal'
import styles from './MissionPoints.module.css'

const STEPS = [
  { index: '01', label: 'Better academic management' },
  { index: '02', label: 'Efficient administration' },
  { index: '03', label: 'Real-time communication' },
  { index: '04', label: 'Secure cloud-based access' },
  { index: '05', label: 'Smarter student engagement' },
]

function MissionPoints() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className="container">
        <p className={styles.lead}>SchoolMate is the schooling software of choice for institutions looking for:</p>

        <ol className={styles.timeline}>
          {STEPS.map((step) => (
            <li key={step.index} className={styles.step}>
              <span className={styles.index}>{step.index}</span>
              <span className={styles.dot} aria-hidden="true" />
              <span className={styles.stepLabel}>{step.label}</span>
            </li>
          ))}
        </ol>

        <p className={styles.closing}>
          We believe schools should focus less on paperwork and more on building student success.
        </p>
      </div>
    </Reveal>
  )
}

export default MissionPoints
