import Reveal from '../../components/ui/Reveal'
import styles from './OurMission.module.css'

function OurMission() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className={`container ${styles.split}`}>
        <div className={styles.statement}>
          <p className={styles.kicker}>Our Mission</p>
          <h2 className={styles.heading}>Building Smarter Schools with Simpler Technology</h2>
        </div>

        <p className={styles.body}>
          Our mission is to deliver innovative, affordable digital tools to school districts that make running
          schools easier and improve communication between schools and families.
        </p>
      </div>
    </Reveal>
  )
}

export default OurMission
