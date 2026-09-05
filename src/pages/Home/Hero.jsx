import Button from '../../components/ui/Button'
import CheckItem from '../../components/ui/CheckItem'
import Reveal from '../../components/ui/Reveal'
import HeroEcosystem from './HeroEcosystem'
import styles from './Hero.module.css'

const BULLETS = [
  'Real-time parent communication',
  'Attendance and homework tracking',
  'Online fee management',
  'Timetable and exam scheduling',
  'Cloud-based secure platform',
  'Mobile app + web application support',
]

function Hero() {
  return (
    <Reveal as="section" className={styles.hero}>
      <div className={`container ${styles.row}`}>
        <div className={styles.copy}>
          <Reveal as="div" className={styles.context} direction="up">
            <span className={styles.rule} />
            <p>SchoolMate – Smart Digital Solution for Modern Schools</p>
          </Reveal>

          <Reveal as="h1" className={styles.heading} direction="up" delay={60}>
            Transform Your School with Smart Digital Management
          </Reveal>

          <Reveal as="p" className={styles.body} direction="up" delay={120}>
            Build a connected, efficient, future-ready institution with SchoolMate, the complete solution for
            communication, academics, attendance, transport, and administration. SchoolMate replaces the outdated
            paperwork and manual tracking used by schools with a comprehensive ecosystem that promotes collaboration
            between administrators, teachers, students, and parents. Whether you&rsquo;re looking for complete
            schooling software or smartschool management system, SchoolMate has got you covered on one secure
            platform.
          </Reveal>

          <Reveal as="ul" className={styles.bullets} direction="up" delay={180}>
            {BULLETS.map((label) => (
              <CheckItem key={label}>{label}</CheckItem>
            ))}
          </Reveal>

          <Reveal as="div" direction="up" delay={240}>
            <Button to="/contact">Get Started Today with SchoolMate</Button>
          </Reveal>
        </div>

        <Reveal as="div" className={styles.visual} direction="up" delay={120}>
          <HeroEcosystem />
        </Reveal>
      </div>
    </Reveal>
  )
}

export default Hero
