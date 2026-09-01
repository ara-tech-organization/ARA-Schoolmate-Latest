import chevronIcon from '../../assets/icons/fn-chevron-right.svg'
import bellIcon from '../../assets/icons/bell.svg'
import bellAttentionIcon from '../../assets/icons/fn-bell-attention.svg'
import styles from './CircularsAppScreen.module.css'

const FEED = [
  { title: 'Annual Day rehearsal schedule', meta: 'Circular · 2h ago', unread: true },
  { title: 'Parent-teacher meeting', meta: 'Announcement · Yesterday', unread: true },
  { title: 'Library week activities', meta: 'School news · 3 days ago', unread: false },
  { title: 'Field trip consent form', meta: 'Consent · 4 days ago', unread: false },
]

function CircularsAppScreen() {
  return (
    <>
      <div className={styles.appBar}>
        <span className={styles.back}>
          <img src={chevronIcon} alt="" className={styles.chevronBack} />
        </span>
        <p>Circulars</p>
        <span className={styles.spacer} />
        <img src={bellIcon} alt="" className={styles.bellIcon} />
      </div>

      <div className={styles.body}>
        <div className={styles.emergency}>
          <img src={bellAttentionIcon} alt="" className={styles.emergencyIcon} />
          <div className={styles.copy}>
            <p className={styles.emergencyTitle}>Emergency notification</p>
            <p className={styles.emergencyMeta}>Early dismissal today at 12:30 PM</p>
          </div>
        </div>

        <div className={styles.feed}>
          <p className={styles.feedTitle}>Circulars &amp; announcements</p>
          <div className={styles.list}>
            {FEED.map((item) => (
              <div key={item.title} className={styles.item}>
                <span className={`${styles.dot} ${item.unread ? styles.dotUnread : styles.dotRead}`} aria-hidden="true" />
                <div className={styles.copy}>
                  <p className={item.unread ? styles.itemTitleUnread : styles.itemTitleRead}>{item.title}</p>
                  <p className={styles.itemMeta}>{item.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default CircularsAppScreen
