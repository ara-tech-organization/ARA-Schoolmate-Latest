import ConnectedRoles from './ConnectedRoles'
import Reveal from '../../components/ui/Reveal'
import styles from './AboutIntro.module.css'

function AboutIntro() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className={`container ${styles.split}`}>
        <div className={styles.copy}>
          <p className={styles.lead}>
            SchoolMate is a smart schooling software for schools and colleges to simplify administration, improve
            communication, and manage academics.
          </p>
          <p className={styles.body}>
            SchoolMate was developed by Ara Discoveries to solve the everyday operational headaches schools face
            from manual attendance tracking, paperwork, slow communication, and disconnected systems.
          </p>
          <p className={styles.body}>
            Today, SchoolMate is a robust student school management system that connects administrators, teachers,
            students, and parents in a centralized cloud-based solution.
          </p>
        </div>

        <div className={styles.visual}>
          <ConnectedRoles />
        </div>
      </div>
    </Reveal>
  )
}

export default AboutIntro
