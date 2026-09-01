import Reveal from '../../components/ui/Reveal'
import styles from './OurMission.module.css'

function OurMission() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className={`container ${styles.split}`}>
        <Reveal as="div" className={styles.statement} direction="right">
          <p className={styles.kicker}>Our Mission</p>
          <h2 className={styles.heading}>Building Smarter Schools with Simpler Technology</h2>
        </Reveal>

        <Reveal as="p" className={styles.body} direction="left" delay={120}>
          Our mission is to deliver innovative, affordable digital tools to school districts that make running
          schools easier and improve communication between schools and families.
        </Reveal>
      </div>
    </Reveal>
  )
}

export default OurMission
