import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import styles from './CtaBand.module.css'

function CtaBand() {
  return (
    <Reveal as="section" className={styles.band} direction="up">
      <div className={styles.content}>
        <Reveal as="h2" className={styles.heading} direction="down">
          Let&rsquo;s Build a Smarter School Together
        </Reveal>
        <Reveal as="p" className={styles.body} direction="up" delay={80}>
          SchoolMate has the tools your institution needs to grow, whether you need eschool software, student
          information management software, or a complete smartschool management system.
        </Reveal>
        <Reveal as="p" className={styles.body} direction="up" delay={160}>
          SchoolMate continues to help institutions modernize with scalable student database management system
          software, education administration software, and student monitoring software solutions.
        </Reveal>
        <Reveal as="p" className={styles.lede} direction="right" delay={220}>
          Upgrade your school with SchoolMate now.
        </Reveal>
        <Reveal as="div" className={styles.actions} direction="left" delay={280}>
          <Button to="/contact">Get a free Demo</Button>
          <Button as="a" href="tel:+918110015152" variant="secondary">Call Us!</Button>
        </Reveal>
      </div>
    </Reveal>
  )
}

export default CtaBand
