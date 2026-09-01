import attendanceIcon from '../../assets/icons/fn-user-check.svg'
import styles from './MiniAttendanceCard.module.css'

const TOTAL_STUDENTS = 45
const MARKED_COUNT = 42
const ABSENT_ROLLS = [7, 19, 28]
const ROLLS = Array.from({ length: 30 }, (_, i) => i + 1)

function MiniAttendanceCard() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={attendanceIcon} alt="" className={styles.icon} />
        <div>
          <p className={styles.title}>Mark Attendance</p>
          <span className={styles.subtitle}>Class VI-A · {TOTAL_STUDENTS} students</span>
        </div>
      </div>

      <div className={styles.legend}>
        <span className={styles.legendItem}>
          <span className={`${styles.dot} ${styles.dotPresent}`} />
          Present
        </span>
        <span className={styles.legendItem}>
          <span className={`${styles.dot} ${styles.dotAbsent}`} />
          Absent
        </span>
        <span className={styles.marked}>
          {MARKED_COUNT} / {TOTAL_STUDENTS} marked
        </span>
      </div>

      <div className={styles.grid}>
        {ROLLS.map((roll) => (
          <span
            key={roll}
            className={[styles.pill, ABSENT_ROLLS.includes(roll) ? styles.pillAbsent : styles.pillPresent].join(' ')}
          >
            {roll}
          </span>
        ))}
      </div>
    </div>
  )
}

export default MiniAttendanceCard
