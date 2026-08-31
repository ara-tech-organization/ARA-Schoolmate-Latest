import heroVisual from '../../assets/images/hero-ecosystem.png'
import Button from '../../components/ui/Button'
import CheckItem from '../../components/ui/CheckItem'
import Reveal from '../../components/ui/Reveal'
import Image from '../../components/ui/Image'
import { getHeroRevealDelay } from '../../utils/pageLoaderTiming'
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
    <Reveal as="section" className={styles.hero} delay={getHeroRevealDelay()}>
      <div className={`container ${styles.row}`}>
        <div className={styles.copy}>
          <div className={styles.context}>
            <span className={styles.rule} />
            <p>SchoolMate – Smart Digital Solution for Modern Schools</p>
          </div>

          <h1 className={styles.heading}>Transform Your School with Smart Digital Management</h1>

          <p className={styles.body}>
            Build a connected, efficient, future-ready institution with SchoolMate, the complete solution for
            communication, academics, attendance, transport, and administration. SchoolMate replaces the outdated
            paperwork and manual tracking used by schools with a comprehensive ecosystem that promotes collaboration
            between administrators, teachers, students, and parents. Whether you&rsquo;re looking for complete
            schooling software or smartschool management system, SchoolMate has got you covered on one secure
            platform.
          </p>

          <ul className={styles.bullets}>
            {BULLETS.map((label) => (
              <CheckItem key={label}>{label}</CheckItem>
            ))}
          </ul>

          <Button as="a" href="/contact">Get Started Today with SchoolMate</Button>
        </div>

        <div className={styles.visual}>
          <Image src={heroVisual} alt="SchoolMate dashboard and mobile app showing attendance, communication, and fee management" />
        </div>
      </div>
    </Reveal>
  )
}

export default Hero
