import messageIcon from '../../assets/icons/tile-message.svg'
import styles from './CommunicationCard.module.css'

const KPIS = [
  { label: 'Delivered today', value: '1,229' },
  { label: 'Read', value: '87%' },
  { label: 'Consent signed', value: '312' },
]

const MESSAGES = [
  { title: 'Annual Day rehearsal schedule', meta: 'Circular · All parents', status: 'Delivered' },
  { title: 'Fee reminder — Term II', meta: 'Notification · 946 parents', status: 'Delivered' },
  { title: 'Field trip consent form', meta: 'Consent · Class VII', status: 'Awaiting 42' },
]

function CommunicationCard() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={messageIcon} alt="" className={styles.icon} />
        <div>
          <p className={styles.title}>Communication</p>
          <span className={styles.subtitle}>Circulars · notifications · consent forms</span>
        </div>
      </div>

      <div className={styles.kpiRow}>
        {KPIS.map((kpi) => (
          <div key={kpi.label} className={styles.kpi}>
            <p className={styles.kpiLabel}>{kpi.label}</p>
            <p className={styles.kpiValue}>{kpi.value}</p>
          </div>
        ))}
      </div>

      <ul className={styles.messages}>
        {MESSAGES.map((msg) => (
          <li key={msg.title} className={styles.message}>
            <div className={styles.copy}>
              <p className={styles.msgTitle}>{msg.title}</p>
              <span className={styles.msgMeta}>{msg.meta}</span>
            </div>
            <span className={[styles.chip, msg.status.startsWith('Awaiting') ? styles.chipWaiting : ''].join(' ')}>
              {msg.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CommunicationCard
