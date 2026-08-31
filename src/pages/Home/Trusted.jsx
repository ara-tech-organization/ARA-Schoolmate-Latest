import Eyebrow from '../../components/ui/Eyebrow'
import Reveal from '../../components/ui/Reveal'
import styles from './Trusted.module.css'

function Trusted() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className={`container ${styles.content}`}>
        <Eyebrow align="center">Credibility</Eyebrow>
        <h2 className={styles.heading}>Trusted by Growing Educational Institutions</h2>
        <p className={styles.body}>
          Schools and institutions choose SchoolMate for its measurable improvements in efficiency, engagement, and
          communication.
        </p>
        <span className={styles.rule} />
      </div>
    </Reveal>
  )
}

export default Trusted
