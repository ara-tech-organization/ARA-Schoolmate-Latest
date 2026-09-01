import brandMark from '../../assets/images/brand-mark.png'
import bellIcon from '../../assets/icons/bell.svg'
import attendanceIcon from '../../assets/icons/fn-user-check.svg'
import homeworkIcon from '../../assets/icons/tile-book.svg'
import feesIcon from '../../assets/icons/fee-management.svg'
import messageIcon from '../../assets/icons/tile-message.svg'
import homeIcon from '../../assets/icons/stat-dashboard.svg'
import styles from './PhoneMockup.module.css'

const TABS = [
  { label: 'Home', icon: homeIcon, active: true },
  { label: 'Attendance', icon: attendanceIcon },
  { label: 'Homework', icon: homeworkIcon },
  { label: 'Fees', icon: feesIcon },
]

function PhoneMockup() {
  return (
    <div className={styles.phone}>
      <div className={styles.screen}>
        <div className={styles.statusBar}>
          <span>9:41</span>
          <span className={styles.statusIcons} aria-hidden="true">
            <span />
            <span />
            <span className={styles.battery} />
          </span>
        </div>

        <div className={styles.appBar}>
          <img src={brandMark} alt="" width={12} height={12} />
          <span>SchoolMate</span>
          <img src={bellIcon} alt="" width={10} height={10} className={styles.appBarBell} />
        </div>

        <div className={styles.body}>
          <div className={styles.card}>
            <div className={styles.cardHead}>
              <img src={attendanceIcon} alt="" width={10} height={10} />
              <p>Today&rsquo;s Attendance</p>
            </div>
            <div className={styles.attendanceRow}>
              <span className={styles.chipPresent}>Present</span>
              <span className={styles.muted}>Marked 08:42 AM</span>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHead}>
              <img src={homeworkIcon} alt="" width={10} height={10} />
              <p>Homework</p>
            </div>
            <div className={styles.item}>
              <span>Mathematics</span>
              <span className={styles.due}>Due today</span>
            </div>
            <div className={styles.item}>
              <span>Science</span>
              <span className={styles.muted}>Due tomorrow</span>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHead}>
              <img src={feesIcon} alt="" width={10} height={10} />
              <p>Fees</p>
            </div>
            <div className={styles.feeRow}>
              <div>
                <p className={styles.feeAmount}>₹ 12,500</p>
                <span className={styles.muted}>Term II · due 30 Sep</span>
              </div>
              <span className={styles.payButton}>Pay now</span>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHead}>
              <img src={messageIcon} alt="" width={10} height={10} />
              <p>Circulars</p>
            </div>
            <p className={styles.circularText}>Annual Day rehearsal schedule shared with all parents.</p>
          </div>
        </div>

        <div className={styles.tabBar}>
          {TABS.map((tab) => (
            <span key={tab.label} className={[styles.tab, tab.active ? styles.tabActive : ''].join(' ')}>
              <img src={tab.icon} alt="" width={10} height={10} />
              {tab.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PhoneMockup
