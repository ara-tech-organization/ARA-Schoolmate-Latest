import feeIcon from '../../assets/icons/fee-management.svg'
import RevealGroup from '../../components/ui/RevealGroup'
import styles from './FeeCollectionPanel.module.css'

const COLLECTED = '₹ 38,42,500'
const PENDING = '₹ 6,17,500'
const PERCENT_COLLECTED = 86.2

const ROWS = [
  { cls: 'Class VI', amount: '₹ 9,80,000', status: 'Paid', tone: 'success' },
  { cls: 'Class VII', amount: '₹ 9,45,000', status: 'Paid', tone: 'success' },
  { cls: 'Class VIII', amount: '₹ 8,12,500', status: 'Partial', tone: 'attention' },
]

function FeeCollectionPanel() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={feeIcon} alt="" className={styles.icon} aria-hidden="true" />
        <div className={styles.headerText}>
          <p className={styles.title}>Fee Collection</p>
          <p className={styles.subtitle}>Term II · online fee collection</p>
        </div>
      </div>

      <div className={styles.body}>
        <RevealGroup className={styles.amounts}>
          <div className={styles.collected}>
            <p className={styles.amountLabel}>Collected this term</p>
            <p className={styles.collectedValue}>{COLLECTED}</p>
          </div>
          <div className={styles.pending}>
            <p className={styles.amountLabel}>Pending</p>
            <p className={styles.pendingValue}>{PENDING}</p>
          </div>
        </RevealGroup>

        <div className={styles.progressTrack}>
          <div className={styles.progressFill} style={{ width: `${PERCENT_COLLECTED}%` }} />
        </div>

        <div className={styles.meta}>
          <span className={styles.metaPct}>{PERCENT_COLLECTED}% collected</span>
          <span className={styles.metaReminders}>Reminders sent to 138 parents</span>
        </div>

        <RevealGroup className={styles.rows}>
          {ROWS.map((row) => (
            <div key={row.cls} className={styles.row}>
              <p className={styles.rowClass}>{row.cls}</p>
              <p className={styles.rowAmount}>{row.amount}</p>
              <span
                className={[styles.chip, row.tone === 'attention' ? styles.chipAttention : styles.chipSuccess].join(
                  ' ',
                )}
              >
                <span
                  className={[styles.dot, row.tone === 'attention' ? styles.dotAttention : styles.dotSuccess].join(
                    ' ',
                  )}
                  aria-hidden="true"
                />
                {row.status}
              </span>
            </div>
          ))}
        </RevealGroup>
      </div>
    </div>
  )
}

export default FeeCollectionPanel
