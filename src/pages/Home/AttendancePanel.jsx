import userCheckIcon from '../../assets/icons/tile-user-check.svg'
import styles from './AttendancePanel.module.css'

const TOTAL_STUDENTS = 45
const MARKED_COUNT = 42
const ABSENT_DAYS = [7, 19, 28]
const DAYS = Array.from({ length: 30 }, (_, i) => i + 1)

function AttendancePanel() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={userCheckIcon} alt="" className={styles.icon} aria-hidden="true" />
        <div className={styles.headerText}>
          <p className={styles.title}>Mark Attendance</p>
          <p className={styles.subtitle}>Class VI-A · {TOTAL_STUDENTS} students</p>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.legend}>
          <span className={styles.legendItem}>
            <span className={[styles.dot, styles.dotPresent].join(' ')} aria-hidden="true" />
            Present
          </span>
          <span className={styles.legendItem}>
            <span className={[styles.dot, styles.dotAbsent].join(' ')} aria-hidden="true" />
            Absent
          </span>
          <span className={styles.spacer} />
          <span className={styles.marked}>
            {MARKED_COUNT} / {TOTAL_STUDENTS} marked
          </span>
        </div>

        <div className={styles.grid}>
          {DAYS.map((day) => {
            const isAbsent = ABSENT_DAYS.includes(day)
            return (
              <span key={day} className={[styles.pill, isAbsent ? styles.pillAbsent : styles.pillPresent].join(' ')}>
                {day}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AttendancePanel
