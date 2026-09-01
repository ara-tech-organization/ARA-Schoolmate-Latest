import chevronIcon from '../../assets/icons/fn-chevron-right.svg'
import bellIcon from '../../assets/icons/bell.svg'
import bellAttentionIcon from '../../assets/icons/fn-bell-attention.svg'
import RevealGroup from '../../components/ui/RevealGroup'
import styles from './FeesAppScreen.module.css'

const HISTORY = [
  { title: 'Term I', meta: '₹ 12,500 · 12 Jun' },
  { title: 'Transport — Q1', meta: '₹ 4,200 · 12 Jun' },
  { title: 'Admission fee', meta: '₹ 8,000 · 02 Apr' },
]

function FeesAppScreen() {
  return (
    <>
      <div className={styles.appBar}>
        <span className={styles.back}>
          <img src={chevronIcon} alt="" className={styles.chevronBack} />
        </span>
        <p>Fees</p>
        <span className={styles.spacer} />
        <img src={bellIcon} alt="" className={styles.bellIcon} />
      </div>

      <RevealGroup className={styles.body}>
        <div className={styles.due}>
          <p className={styles.dueLabel}>Amount due</p>
          <p className={styles.dueValue}>₹ 12,500</p>
          <div className={styles.dueRow}>
            <p className={styles.dueMeta}>Term II · due 30 Sep</p>
            <span className={styles.spacer} />
            <span className={styles.payButton}>Pay now</span>
          </div>
        </div>

        <div className={styles.reminder}>
          <img src={bellAttentionIcon} alt="" className={styles.reminderIcon} />
          <p className={styles.reminderText}>Reminder sent 3 days before due date</p>
        </div>

        <div className={styles.history}>
          <p className={styles.historyTitle}>Payment history</p>
          <RevealGroup className={styles.list}>
            {HISTORY.map((item) => (
              <div key={item.title} className={styles.row}>
                <div className={styles.copy}>
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.meta}>{item.meta}</p>
                </div>
                <span className={styles.chip}>
                  <span className={styles.dot} aria-hidden="true" />
                  Paid
                </span>
              </div>
            ))}
          </RevealGroup>
        </div>
      </RevealGroup>
    </>
  )
}

export default FeesAppScreen
