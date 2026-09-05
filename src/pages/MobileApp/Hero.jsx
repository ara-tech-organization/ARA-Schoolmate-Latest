import Button from '../../components/ui/Button'
import Reveal from '../../components/ui/Reveal'
import AppFan from './AppFan'
import styles from './Hero.module.css'

function Hero() {
  return (
    <Reveal as="section" className={styles.hero}>
      <div className={`container ${styles.row}`}>
        <div className={styles.copy}>
          <Reveal as="h1" className={styles.heading} direction="up">
            Smart School Management at Your Fingertips
          </Reveal>
          <Reveal as="p" className={styles.lead} direction="up" delay={60}>
            SchoolMate Mobile App – a powerful and easy-to-use mobile solution for administrators,
            teachers, students, and parents. Stay connected with your school and institution anytime,
            anywhere.
          </Reveal>
          <Reveal as="p" className={styles.body} direction="up" delay={120}>
            SchoolMate: a single secure dashboard that allows easy communication, attendance, and
            homework tracking, fees management, and academic performance monitoring.
          </Reveal>
          <Reveal as="p" className={styles.body} direction="up" delay={180}>
            SchoolMate is a modern schooling software and smartschool management system that assists
            schools in managing daily operations effectively and keeping parents informed in real time.
          </Reveal>
          <Reveal as="div" className={styles.actions} direction="up" delay={240}>
            <Button to="/contact">
              Get a free Demo
            </Button>
            <Button as="a" href="tel:+918110015152" variant="secondary">
              Call Us!
            </Button>
          </Reveal>
        </div>

        <Reveal as="div" className={styles.visual} direction="up" delay={120}>
          <AppFan />
        </Reveal>
      </div>
    </Reveal>
  )
}

export default Hero
