import bookIcon from '../../assets/icons/tile-book.svg'
import fileTextIcon from '../../assets/icons/file-text.svg'
import RevealGroup from '../../components/ui/RevealGroup'
import styles from './AcademicsPanel.module.css'

const TABS = ['Homework', 'Exams', 'Results']

const HOMEWORK = [
  { title: 'Mathematics', meta: 'Class VI-A · Ch. 7 exercises', status: 'Due today', tone: 'attention' },
  { title: 'Science', meta: 'Class VII-B · Lab worksheet', status: 'Due tomorrow', tone: 'muted' },
  { title: 'English', meta: 'Class VI-A · Reading log', status: 'Submitted 38/42', tone: 'success' },
]

const CHIP_TONE = {
  attention: styles.chipAttention,
  muted: styles.chipMuted,
  success: styles.chipSuccess,
}

const DOT_TONE = {
  attention: styles.dotAttention,
  muted: styles.dotMuted,
  success: styles.dotSuccess,
}

function AcademicsPanel() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={bookIcon} alt="" className={styles.icon} aria-hidden="true" />
        <div className={styles.headerText}>
          <p className={styles.title}>Academics</p>
          <p className={styles.subtitle}>Homework · exams · results</p>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.tabs}>
          {TABS.map((tab, i) => (
            <span key={tab} className={[styles.tab, i === 0 ? styles.tabActive : ''].join(' ')}>
              {tab}
            </span>
          ))}
        </div>

        <RevealGroup className={styles.rows}>
          {HOMEWORK.map((hw) => (
            <div key={hw.title} className={styles.row}>
              <div className={styles.copy}>
                <p className={styles.rowTitle}>{hw.title}</p>
                <span className={styles.rowMeta}>{hw.meta}</span>
              </div>
              <span className={[styles.chip, CHIP_TONE[hw.tone]].join(' ')}>
                <span className={[styles.dot, DOT_TONE[hw.tone]].join(' ')} aria-hidden="true" />
                {hw.status}
              </span>
            </div>
          ))}
        </RevealGroup>

        <div className={styles.studyMaterial}>
          <img src={fileTextIcon} alt="" className={styles.studyIcon} aria-hidden="true" />
          <div className={styles.studyCopy}>
            <p className={styles.studyTitle}>Study material shared</p>
            <span className={styles.studyMeta}>3 documents · Class VI-A</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AcademicsPanel
