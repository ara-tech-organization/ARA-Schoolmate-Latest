import Button from '../../components/ui/Button'
import Reveal from '../../components/ui/Reveal'
import AppFan from './AppFan'
import { getHeroRevealDelay } from '../../utils/pageLoaderTiming'
import styles from './Hero.module.css'

function Hero() {
  return (
    <Reveal as="section" className={styles.hero} delay={getHeroRevealDelay()}>
      <div className={`container ${styles.row}`}>
        <div className={styles.copy}>
          <h1 className={styles.heading}>Smart School Management at Your Fingertips</h1>
          <p className={styles.lead}>
            SchoolMate Mobile App – a powerful and easy-to-use mobile solution for administrators,
            teachers, students, and parents. Stay connected with your school and institution anytime,
            anywhere.
          </p>
          <p className={styles.body}>
            SchoolMate: a single secure dashboard that allows easy communication, attendance, and
            homework tracking, fees management, and academic performance monitoring.
          </p>
          <p className={styles.body}>
            SchoolMate is a modern schooling software and smartschool management system that assists
            schools in managing daily operations effectively and keeping parents informed in real time.
          </p>
          <div className={styles.actions}>
            <Button to="/contact">
              Get a free Demo
            </Button>
            <Button as="a" href="tel:+918110015152" variant="secondary">
              Call Us!
            </Button>
          </div>
        </div>

        <div className={styles.visual}>
          <AppFan />
        </div>
      </div>
    </Reveal>
  )
}

export default Hero
