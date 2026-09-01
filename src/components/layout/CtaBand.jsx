import Button from '../ui/Button'
import styles from './CtaBand.module.css'

function CtaBand() {
  return (
    <section className={styles.band}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Let&rsquo;s Build a Smarter School Together</h2>
        <p className={styles.body}>
          SchoolMate has the tools your institution needs to grow, whether you need eschool software, student
          information management software, or a complete smartschool management system.
        </p>
        <p className={styles.body}>
          SchoolMate continues to help institutions modernize with scalable student database management system
          software, education administration software, and student monitoring software solutions.
        </p>
        <p className={styles.lede}>Upgrade your school with SchoolMate now.</p>
        <div className={styles.actions}>
          <Button to="/contact" className={styles.sweep}>Get a free Demo</Button>
          <Button as="a" href="tel:+918110015152" variant="secondary">Call Us!</Button>
        </div>
      </div>
    </section>
  )
}

export default CtaBand
