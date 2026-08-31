import Button from '../../components/ui/Button'
import heroDesktop from '../../assets/images/hero-app-fan-desktop.png'
import heroTablet from '../../assets/images/hero-app-fan-tablet.png'
import heroMobile from '../../assets/images/hero-app-fan-mobile.png'
import Reveal from '../../components/ui/Reveal'
import Image from '../../components/ui/Image'
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
            <Button as="a" href="/contact">
              Get a free Demo
            </Button>
            <Button as="a" href="tel:+918110015152" variant="secondary">
              Call Us!
            </Button>
          </div>
        </div>

        <div className={styles.visual}>
          <picture>
            <source media="(min-width: 1280px)" srcSet={heroDesktop} />
            <source media="(min-width: 768px)" srcSet={heroTablet} />
            <Image src={heroMobile} alt="SchoolMate app screens showing attendance, circulars and the parent dashboard" />
          </picture>
        </div>
      </div>
    </Reveal>
  )
}

export default Hero
