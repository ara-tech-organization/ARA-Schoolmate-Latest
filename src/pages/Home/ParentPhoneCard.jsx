import brandMark from '../../assets/images/brand-mark.png'
import bellIcon from '../../assets/icons/bell.svg'
import attendanceIcon from '../../assets/icons/fn-user-check.svg'
import homeworkIcon from '../../assets/icons/tile-book.svg'
import feesIcon from '../../assets/icons/fee-management.svg'
import messageIcon from '../../assets/icons/tile-message.svg'
import homeIcon from '../../assets/icons/stat-dashboard.svg'
import RevealGroup from '../../components/ui/RevealGroup'
import styles from './ParentPhoneCard.module.css'

const TABS = [
  { label: 'Home', icon: homeIcon, active: true },
  { label: 'Attendance', icon: attendanceIcon },
  { label: 'Homework', icon: homeworkIcon },
  { label: 'Fees', icon: feesIcon },
]

function ParentPhoneCard() {
  return (
    <div className={styles.phone}>
      <div className={styles.screen}>
        <div className={styles.statusBar}>
          <span className={styles.statusTime}>9:41</span>
          <span className={styles.statusSpacer} />
          <span className={styles.statusSignal} style={{ height: '0.457cqw' }} />
          <span className={styles.statusSignal} style={{ height: '0.7617cqw' }} />
          <span className={styles.statusSignal} style={{ height: '1.0661cqw' }} />
          <span className={styles.statusBattery} />
        </div>

        <div className={styles.appBar}>
          <img src={brandMark} alt="" />
          <span className={styles.appBarName}>SchoolMate</span>
          <span className={styles.appBarSpacer} />
          <span className={styles.appBarBell}>
            <img src={bellIcon} alt="" />
          </span>
        </div>

        <RevealGroup className={styles.body}>
          <div className={styles.card}>
            <div className={styles.cardHead}>
              <img src={attendanceIcon} alt="" />
              <p>Today&rsquo;s Attendance</p>
            </div>
            <div className={styles.row}>
              <span className={styles.chipPresent}>
                <span className={styles.chipDot} />
                <span>Present</span>
              </span>
              <span className={styles.muted}>Marked 08:42 AM</span>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHead}>
              <img src={homeworkIcon} alt="" />
              <p>Homework</p>
            </div>
            <div className={styles.row}>
              <span className={styles.itemDot} />
              <span className={styles.itemLabel}>Mathematics</span>
              <span className={styles.due}>Due today</span>
            </div>
            <div className={styles.row}>
              <span className={styles.itemDot} />
              <span className={styles.itemLabel}>Science</span>
              <span className={styles.dueMuted}>Due tomorrow</span>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHead}>
              <img src={feesIcon} alt="" />
              <p>Fees</p>
            </div>
            <div className={styles.row}>
              <div className={styles.feeAmount}>
                <p>₹ 12,500</p>
                <span>Term II · due 30 Sep</span>
              </div>
              <span className={styles.payButton}>Pay now</span>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHead}>
              <img src={messageIcon} alt="" />
              <p>Circulars</p>
            </div>
            <p className={styles.circularText}>Annual Day rehearsal schedule shared with all parents.</p>
          </div>
        </RevealGroup>

        <div className={styles.tabBar}>
          {TABS.map((tab) => (
            <span key={tab.label} className={`${styles.tab} ${tab.active ? styles.tabActive : ''}`}>
              <img src={tab.icon} alt="" />
              <span>{tab.label}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ParentPhoneCard
