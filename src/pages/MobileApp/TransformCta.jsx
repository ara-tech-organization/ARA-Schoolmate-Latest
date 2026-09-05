import Button from '../../components/ui/Button'
import Reveal from '../../components/ui/Reveal'
import TransformVisual from './TransformVisual'
import styles from './TransformCta.module.css'

function TransformCta() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className={`container ${styles.row}`}>
        <div className={styles.copy}>
          <Reveal as="h2" className={styles.heading} direction="up">
            Transform Your School Digitally
          </Reveal>
          <Reveal as="p" className={styles.lead} direction="up" delay={60}>
            SchoolMate Mobile App helps schools to streamline administration, improve communication,
            and deliver smarter educational experiences.
          </Reveal>
          <Reveal as="p" className={styles.body} direction="up" delay={120}>
            SchoolMate is the one powerful mobile platform containing all the tools your institution
            needs, from attendance tracking and communications tools to fee management and academic
            monitoring.
          </Reveal>
          <Reveal as="div" className={styles.actions} direction="up" delay={180}>
            <Button to="/contact" onDark>
              Get a free Demo
            </Button>
            <Button as="a" href="tel:+918110015152" variant="secondary" onDark>
              Call Us!
            </Button>
          </Reveal>
        </div>

        <Reveal as="div" className={styles.visual} direction="up" delay={120}>
          <TransformVisual />
        </Reveal>
      </div>
    </Reveal>
  )
}

export default TransformCta
