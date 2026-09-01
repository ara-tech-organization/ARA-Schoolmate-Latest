import chevronIcon from '../../assets/icons/fn-chevron-right.svg'
import bellIcon from '../../assets/icons/bell.svg'
import fileTextIcon from '../../assets/icons/file-text.svg'
import downloadIcon from '../../assets/icons/fn-download.svg'
import RevealGroup from '../../components/ui/RevealGroup'
import styles from './HomeworkAppScreen.module.css'

const FILTERS = ['All', 'Due today', 'Submitted']

const ASSIGNMENTS = [
  { title: 'Mathematics', meta: 'Ch. 7 exercises · Class VI-A', status: 'Due today', tone: 'attention' },
  { title: 'Science', meta: 'Lab worksheet · Class VI-A', status: 'Tomorrow', tone: 'muted' },
  { title: 'English', meta: 'Reading log · Class VI-A', status: 'Submitted', tone: 'success' },
]

const FILES = [
  { name: 'Algebra notes.pdf', size: '2.1 MB' },
  { name: 'Science lab guide.pdf', size: '1.4 MB' },
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

function HomeworkAppScreen() {
  return (
    <>
      <div className={styles.appBar}>
        <span className={styles.back}>
          <img src={chevronIcon} alt="" className={styles.chevronBack} />
        </span>
        <p>Homework</p>
        <span className={styles.spacer} />
        <img src={bellIcon} alt="" className={styles.bellIcon} />
      </div>

      <RevealGroup className={styles.body}>
        <div className={styles.filters}>
          {FILTERS.map((filter, i) => (
            <span key={filter} className={i === 0 ? styles.filterActive : styles.filter}>
              {filter}
            </span>
          ))}
        </div>

        <RevealGroup className={styles.assignments}>
          {ASSIGNMENTS.map((item) => (
            <div key={item.title} className={styles.row}>
              <div className={styles.copy}>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.meta}>{item.meta}</p>
              </div>
              <span className={CHIP_TONE[item.tone]}>
                <span className={DOT_TONE[item.tone]} aria-hidden="true" />
                {item.status}
              </span>
            </div>
          ))}
        </RevealGroup>

        <div className={styles.studyMaterial}>
          <p className={styles.studyTitle}>Study material</p>
          <RevealGroup as="div">
            {FILES.map((file) => (
              <div key={file.name} className={styles.file}>
                <img src={fileTextIcon} alt="" className={styles.fileIcon} />
                <div className={styles.fileCopy}>
                  <p className={styles.fileName}>{file.name}</p>
                  <p className={styles.fileSize}>{file.size}</p>
                </div>
                <img src={downloadIcon} alt="" className={styles.downloadIcon} />
              </div>
            ))}
          </RevealGroup>
        </div>
      </RevealGroup>
    </>
  )
}

export default HomeworkAppScreen
