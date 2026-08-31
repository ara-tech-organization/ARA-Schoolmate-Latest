import ecosystemDesktop from '../../assets/images/module-ecosystem-desktop.png'
import ecosystemMobile from '../../assets/images/module-ecosystem-mobile.png'
import Eyebrow from '../../components/ui/Eyebrow'
import Reveal from '../../components/ui/Reveal'
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

        <picture className={styles.ecosystem}>
          <source media="(min-width: 768px)" srcSet={ecosystemDesktop} />
          <img src={ecosystemMobile} alt="SchoolMate module ecosystem connecting attendance, fees, payroll, homework, transport, notifications and reports around the platform hub" loading="lazy" decoding="async" />
        </picture>

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
