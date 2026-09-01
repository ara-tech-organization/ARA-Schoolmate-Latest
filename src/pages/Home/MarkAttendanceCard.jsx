import userCheckIcon from '../../assets/icons/fn-user-check.svg'
import styles from './MarkAttendanceCard.module.css'

const TOTAL_STUDENTS = 45
const MARKED_COUNT = 42
const ABSENT_DAYS = [7, 19, 28]
const DAYS = Array.from({ length: 30 }, (_, i) => i + 1)

function MarkAttendanceCard() {
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
            <span className={`${styles.dot} ${styles.dotPresent}`} aria-hidden="true" />
            Present
          </span>
          <span className={styles.legendItem}>
            <span className={`${styles.dot} ${styles.dotAbsent}`} aria-hidden="true" />
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
              <span
                key={day}
                className={`${styles.pill} ${isAbsent ? styles.pillAbsent : styles.pillPresent}`}
              >
                {day}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MarkAttendanceCard
