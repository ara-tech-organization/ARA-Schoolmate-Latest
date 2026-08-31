import Button from '../../components/ui/Button'
import visual from '../../assets/images/transform-cta-visual.png'
import Reveal from '../../components/ui/Reveal'
import Image from '../../components/ui/Image'
import styles from './TransformCta.module.css'

function TransformCta() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className={`container ${styles.row}`}>
        <div className={styles.copy}>
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
            <Button as="a" href="/contact" onDark>
              Get a free Demo
            </Button>
            <Button as="a" href="tel:+918110015152" variant="secondary" onDark>
              Call Us!
            </Button>
          </div>
        </div>

        <div className={styles.visual}>
          <Image src={visual} alt="SchoolMate fees screen and mobile app mockup" loading="lazy" decoding="async" />
        </div>
      </div>
    </Reveal>
  )
}

export default TransformCta
