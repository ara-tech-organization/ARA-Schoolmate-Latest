import chevronIcon from '../../assets/icons/fn-chevron-right.svg'
import bellIcon from '../../assets/icons/bell.svg'
import styles from './AttendanceAppScreen.module.css'

const WEEK = [
  { day: 'M', present: true },
  { day: 'T', present: true },
  { day: 'W', present: false },
  { day: 'T', present: true },
  { day: 'F', present: true },
]

const HISTORY = [
  { date: 'Wed 18 Sep', meta: 'Absent · parent alerted', status: 'Absent', tone: 'attention' },
  { date: 'Tue 17 Sep', meta: 'Marked 08:39 AM', status: 'Present', tone: 'success' },
  { date: 'Mon 16 Sep', meta: 'Marked 08:44 AM', status: 'Present', tone: 'success' },
]

function AttendanceAppScreen() {
  return (
    <>
      <div className={styles.appBar}>
        <span className={styles.back}>
          <img src={chevronIcon} alt="" className={styles.chevronBack} />
        </span>
        <p>Attendance</p>
        <span className={styles.spacer} />
        <img src={bellIcon} alt="" className={styles.bellIcon} />
      </div>

      <div className={styles.body}>
        <div className={styles.card}>
          <div className={styles.row}>
            <div className={styles.copy}>
              <p className={styles.label}>Today</p>
              <p className={styles.value}>Present</p>
            </div>
            <span className={styles.chipSuccess}>
              <span className={`${styles.dot} ${styles.dotSuccess}`} aria-hidden="true" />
              Marked 08:42
            </span>
          </div>
          <div className={styles.week}>
            {WEEK.map((item, i) => (
              <div key={i} className={styles.day}>
                <span>{item.day}</span>
                <span className={`${styles.dayDot} ${item.present ? styles.dotSuccess : styles.dotAttention}`} />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <p className={styles.statLabel}>Present</p>
            <p className={styles.statValue}>21</p>
          </div>
          <div className={styles.stat}>
            <p className={styles.statLabel}>Absent</p>
            <p className={styles.statValue}>2</p>
          </div>
        </div>

        <div className={styles.history}>
          <p className={styles.historyTitle}>This month</p>
          <div className={styles.list}>
            {HISTORY.map((item) => (
              <div key={item.date} className={styles.historyRow}>
                <div className={styles.copy}>
                  <p className={styles.historyDate}>{item.date}</p>
                  <p className={styles.historyMeta}>{item.meta}</p>
                </div>
                <span className={item.tone === 'attention' ? styles.chipAttention : styles.chipSuccess}>
                  <span
                    className={`${styles.dot} ${item.tone === 'attention' ? styles.dotAttention : styles.dotSuccess}`}
                    aria-hidden="true"
                  />
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default AttendanceAppScreen
