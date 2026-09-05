import ConnectedRoles from './ConnectedRoles'
import Reveal from '../../components/ui/Reveal'
import styles from './AboutIntro.module.css'

function AboutIntro() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className={`container ${styles.split}`}>
        <Reveal as="div" className={styles.copy} direction="up">
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
        </Reveal>

        <Reveal as="div" className={styles.visual} direction="up" delay={120}>
          <ConnectedRoles />
        </Reveal>
      </div>
    </Reveal>
  )
}

export default AboutIntro
