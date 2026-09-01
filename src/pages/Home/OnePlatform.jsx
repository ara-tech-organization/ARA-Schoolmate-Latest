import Eyebrow from '../../components/ui/Eyebrow'
import Reveal from '../../components/ui/Reveal'
import ModuleEcosystem from './ModuleEcosystem'
import styles from './OnePlatform.module.css'

function OnePlatform() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className={`container ${styles.content}`}>
        <Eyebrow align="center">Integrated ecosystem</Eyebrow>
        <h2 className={styles.heading}>Everything Your School Needs in One Platform</h2>
        <p className={styles.body}>
          SchoolMate is an intelligent ecosystem that connects communication, administration, attendance, finance,
          academics, and transport.
        </p>

        <h4 className={styles.modulesLabel}>Integrated Modules Include:</h4>

        <div className={styles.ecosystemWrap}>
          <ModuleEcosystem />
        </div>

        <p className={styles.closing}>
          The integrated architecture and scalable modules of SchoolMate provide benefits for schools looking for an
          all-in-one student management system software.
        </p>
        <p className={styles.closing}>
          Our platform is also known as the best campus management software, as it helps institutions to reduce
          operational gaps while improving collaboration.
        </p>
      </div>
    </Reveal>
  )
}

export default OnePlatform
