import chevronIcon from '../../assets/icons/fn-chevron-right.svg'
import bellIcon from '../../assets/icons/bell.svg'
import fileTextIcon from '../../assets/icons/file-text.svg'
import RevealGroup from '../../components/ui/RevealGroup'
import styles from './TimetableAppScreen.module.css'

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']

const PERIODS = [
  { time: '08:45', subject: 'Mathematics' },
  { time: '09:40', subject: 'Science' },
  { time: '10:35', subject: 'English' },
  { time: '11:50', subject: 'Social Studies' },
]

const EVENTS = [
  { name: 'Annual Day', date: '24 Sep' },
  { name: 'Mid-term break', date: '01–05 Oct' },
]

function TimetableAppScreen() {
  return (
    <>
      <div className={styles.appBar}>
        <span className={styles.back}>
          <img src={chevronIcon} alt="" className={styles.chevronBack} />
        </span>
        <p>Timetable</p>
        <span className={styles.spacer} />
        <img src={bellIcon} alt="" className={styles.bellIcon} />
      </div>

      <RevealGroup className={styles.body}>
        <RevealGroup className={styles.days}>
          {DAYS.map((day, i) => (
            <span key={day} className={i === 0 ? styles.dayActive : styles.day}>
              {day}
            </span>
          ))}
        </RevealGroup>

        <div className={styles.schedule}>
          <p className={styles.scheduleTitle}>Class VI-A · Monday</p>
          <RevealGroup as="div">
            {PERIODS.map((period) => (
              <div key={period.time} className={styles.period}>
                <p className={styles.periodTime}>{period.time}</p>
                <p className={styles.periodSubject}>{period.subject}</p>
              </div>
            ))}
          </RevealGroup>
        </div>

        <div className={styles.examBanner}>
          <img src={fileTextIcon} alt="" className={styles.examIcon} />
          <div className={styles.examCopy}>
            <p className={styles.examTitle}>Exam timetable published</p>
            <p className={styles.examMeta}>Half-yearly · begins 12 Oct</p>
          </div>
        </div>

        <div className={styles.calendar}>
          <p className={styles.calendarTitle}>Academic calendar</p>
          <RevealGroup as="div">
            {EVENTS.map((event) => (
              <div key={event.name} className={styles.event}>
                <span className={styles.eventDot} aria-hidden="true" />
                <p className={styles.eventName}>{event.name}</p>
                <p className={styles.eventDate}>{event.date}</p>
              </div>
            ))}
          </RevealGroup>
        </div>
      </RevealGroup>
    </>
  )
}

export default TimetableAppScreen
