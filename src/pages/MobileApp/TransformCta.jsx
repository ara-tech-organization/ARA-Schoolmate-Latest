import Button from '../../components/ui/Button'
import Reveal from '../../components/ui/Reveal'
import TransformVisual from './TransformVisual'
import styles from './TransformCta.module.css'

function TransformCta() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className={`container ${styles.row}`}>
        <Reveal as="div" className={styles.copy} direction="right">
          <h2 className={styles.heading}>Transform Your School Digitally</h2>
          <p className={styles.lead}>
            SchoolMate Mobile App helps schools to streamline administration, improve communication,
            and deliver smarter educational experiences.
          </p>
          <p className={styles.body}>
            SchoolMate is the one powerful mobile platform containing all the tools your institution
            needs, from attendance tracking and communications tools to fee management and academic
            monitoring.
          </p>
          <div className={styles.actions}>
            <Button to="/contact" onDark>
              Get a free Demo
            </Button>
            <Button as="a" href="tel:+918110015152" variant="secondary" onDark>
              Call Us!
            </Button>
          </div>
        </Reveal>

        <Reveal as="div" className={styles.visual} direction="left" delay={120}>
          <TransformVisual />
        </Reveal>
      </div>
    </Reveal>
  )
}

export default TransformCta
