import messageIcon from '../../assets/icons/tile-message.svg'
import RevealGroup from '../../components/ui/RevealGroup'
import styles from './CommunicationPanel.module.css'

const KPIS = [
  { label: 'Delivered today', value: '1,229' },
  { label: 'Read', value: '87%' },
  { label: 'Consent signed', value: '312' },
]

const MESSAGES = [
  { title: 'Annual Day rehearsal schedule', meta: 'Circular · All parents', status: 'Delivered', tone: 'success' },
  { title: 'Fee reminder — Term II', meta: 'Notification · 946 parents', status: 'Delivered', tone: 'success' },
  { title: 'Field trip consent form', meta: 'Consent · Class VII', status: 'Awaiting 42', tone: 'attention' },
]

function CommunicationPanel() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={messageIcon} alt="" className={styles.icon} aria-hidden="true" />
        <div className={styles.headerText}>
          <p className={styles.title}>Communication</p>
          <p className={styles.subtitle}>Circulars · notifications · consent forms</p>
        </div>
      </div>

      <div className={styles.body}>
        <RevealGroup className={styles.kpiRow}>
          {KPIS.map((kpi) => (
            <div key={kpi.label} className={styles.kpi}>
              <p className={styles.kpiLabel}>{kpi.label}</p>
              <p className={styles.kpiValue}>{kpi.value}</p>
            </div>
          ))}
        </RevealGroup>

        <RevealGroup className={styles.rows}>
          {MESSAGES.map((msg) => (
            <div key={msg.title} className={styles.row}>
              <div className={styles.copy}>
                <p className={styles.rowTitle}>{msg.title}</p>
                <span className={styles.rowMeta}>{msg.meta}</span>
              </div>
              <span
                className={[styles.chip, msg.tone === 'attention' ? styles.chipAttention : styles.chipSuccess].join(
                  ' ',
                )}
              >
                <span
                  className={[styles.dot, msg.tone === 'attention' ? styles.dotAttention : styles.dotSuccess].join(
                    ' ',
                  )}
                  aria-hidden="true"
                />
                {msg.status}
              </span>
            </div>
          ))}
        </RevealGroup>
      </div>
    </div>
  )
}

export default CommunicationPanel
