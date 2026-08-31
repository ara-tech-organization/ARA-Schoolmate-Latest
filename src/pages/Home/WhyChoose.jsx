import closeIcon from '../../assets/icons/close.svg'
import minusIcon from '../../assets/icons/minus.svg'
import arrowIcon from '../../assets/icons/arrow-right.svg'
import checkWhiteIcon from '../../assets/icons/check-circle-white.svg'
import Eyebrow from '../../components/ui/Eyebrow'
import CheckItem from '../../components/ui/CheckItem'
import Reveal from '../../components/ui/Reveal'
import styles from './WhyChoose.module.css'

const BEFORE_ITEMS = [
  'Manual attendance registers',
  'Delayed report sharing',
  'Poor parent communication',
  'Complicated fee management',
  'Time-consuming paperwork',
  'No centralized insights',
]

const AFTER_ITEMS = [
  'Digital attendance with instant alerts',
  'Automated report generation',
  'Real-time homework and circular updates',
  'Smart fee reminders and payment tracking',
  'Centralized dashboards for admins',
  'Faster communication workflows',
]

function WhyChoose() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className={`container ${styles.content}`}>
        <Eyebrow align="center">The transformation</Eyebrow>
        <h2 className={styles.heading}>Why Choose SchoolMate?</h2>
        <p className={styles.intro}>
          Traditional systems are slow, fragmented, and difficult to manage. SchoolMate brings all operations into
          one centralized dashboard. SchoolMate is a trusted smartschool management system that helps schools
          manage all, from academics to transportation, with ease.
        </p>

        <div className={styles.comparison}>
          <div className={styles.panelBefore}>
            <span className={styles.badgeBefore}>
              <img src={closeIcon} alt="" width={15} height={15} />
              Before SchoolMate
            </span>
            <ul className={styles.plainList}>
              {BEFORE_ITEMS.map((label) => (
                <li key={label}>
                  <img src={minusIcon} alt="" width={18} height={18} />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.transform}>
            <span className={styles.arrow}>
              <img src={arrowIcon} alt="" width={22} height={22} />
            </span>
          </div>

          <div className={styles.panelAfter}>
            <span className={styles.badgeAfter}>
              <img src={checkWhiteIcon} alt="" width={15} height={15} />
              After SchoolMate
            </span>
            <ul className={styles.checkList}>
              {AFTER_ITEMS.map((label) => (
                <CheckItem key={label}>{label}</CheckItem>
              ))}
            </ul>
          </div>
        </div>

        <p className={styles.closing}>
          SchoolMate is an all-in-one student attendance management system for schools that integrates academic and
          administrative features.
        </p>
      </div>
    </Reveal>
  )
}

export default WhyChoose
