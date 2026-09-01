import Reveal from '../../components/ui/Reveal'
import RevealGroup from '../../components/ui/RevealGroup'
import styles from './VisionPrinciples.module.css'

const PRINCIPLES = [
  { index: '01', label: 'Smart and scalable' },
  { index: '02', label: 'User-friendly and secure' },
  { index: '03', label: 'Accessible for every institution' },
  { index: '04', label: 'Focused on improving educational outcomes' },
]

function VisionPrinciples() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className="container">
        <p className={styles.lead}>We strive to build technology that is:</p>

        <RevealGroup as="ul" className={styles.grid}>
          {PRINCIPLES.map((item) => (
            <li key={item.index} className={styles.item}>
              <span className={styles.index}>{item.index}</span>
              <span className={styles.label}>{item.label}</span>
            </li>
          ))}
        </RevealGroup>
      </div>
    </Reveal>
  )
}

export default VisionPrinciples
