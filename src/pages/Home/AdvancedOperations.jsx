import dashboardVisual from '../../assets/images/dashboard-operations.png'
import chartIcon from '../../assets/icons/fn-chart.svg'
import bookIcon from '../../assets/icons/fn-book.svg'
import userCheckIcon from '../../assets/icons/fn-user-check.svg'
import clipboardIcon from '../../assets/icons/fn-clipboard-check.svg'
import busIcon from '../../assets/icons/fn-bus.svg'
import calendarIcon from '../../assets/icons/fn-calendar.svg'
import Eyebrow from '../../components/ui/Eyebrow'
import Reveal from '../../components/ui/Reveal'
import styles from './AdvancedOperations.module.css'

const FUNCTIONS = [
  { icon: chartIcon, label: 'Finance and billing dashboards' },
  { icon: bookIcon, label: 'Homework and assignment workflows' },
  { icon: userCheckIcon, label: 'Attendance and leave automation' },
  { icon: clipboardIcon, label: 'Circular approvals and notifications' },
  { icon: busIcon, label: 'Transport management' },
  { icon: calendarIcon, label: 'Event and calendar planning' },
]

function AdvancedOperations() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className={`container ${styles.content}`}>
        <Eyebrow align="center">Advanced operations</Eyebrow>
        <h2 className={styles.heading}>Advanced Digital School Operations</h2>
        <p className={styles.body}>
          SchoolMate automates routine tasks for schools, increases accountability, and transparency.
        </p>

        <div className={styles.visual}>
          <img src={dashboardVisual} alt="SchoolMate operations dashboard with attendance, homework and circular modules" />
        </div>

        <h3 className={styles.functionsLabel}>Advanced Functionalities</h3>
        <ul className={styles.functions}>
          {FUNCTIONS.map((fn) => (
            <li key={fn.label} className={styles.function}>
              <img src={fn.icon} alt="" width={22} height={22} />
              <p>{fn.label}</p>
            </li>
          ))}
        </ul>

        <p className={styles.closing}>
          SchoolMate is a powerful online student attendance management software system that allows institutions
          using it to communicate, report, and administer from a single dashboard.
        </p>
        <p className={styles.closing}>
          SchoolMate is one of the best campus management software for schools, institutions, and colleges to
          modernize operations and improve efficiency.
        </p>
      </div>
    </Reveal>
  )
}

export default AdvancedOperations
