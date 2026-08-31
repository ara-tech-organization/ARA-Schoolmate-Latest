import logo from '../../assets/images/footer-logo-white.png'
import Reveal from '../../components/ui/Reveal'
import styles from './ClosingStatement.module.css'

function ClosingStatement() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className="container">
        <img src={logo} alt="SchoolMate — Smarter School | Happier Parents" loading="lazy" decoding="async" className={styles.logo} />
        <p className={styles.statement}>
          SchoolMate is not just software, but a complete digital ecosystem for modern education.
        </p>
      </div>
    </Reveal>
  )
}

export default ClosingStatement
