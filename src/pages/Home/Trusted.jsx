import Eyebrow from '../../components/ui/Eyebrow'
import Reveal from '../../components/ui/Reveal'
import styles from './Trusted.module.css'

function Trusted() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className={`container ${styles.content}`}>
        <Reveal as="div" direction="up">
          <Eyebrow align="center">Credibility</Eyebrow>
        </Reveal>
        <Reveal as="h2" className={styles.heading} direction="up" delay={60}>
          Trusted by Growing Educational Institutions
        </Reveal>
        <Reveal as="p" className={styles.body} direction="up" delay={140}>
          Schools and institutions choose SchoolMate for its measurable improvements in efficiency, engagement, and
          communication.
        </Reveal>
        <Reveal as="span" className={styles.rule} direction="up" delay={220} />
      </div>
    </Reveal>
  )
}

export default Trusted
