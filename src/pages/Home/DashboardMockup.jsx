import brandMark from '../../assets/images/brand-mark.png'
import dashboardIcon from '../../assets/icons/stat-dashboard.svg'
import attendanceIcon from '../../assets/icons/fn-user-check.svg'
import homeworkIcon from '../../assets/icons/tile-book.svg'
import feesIcon from '../../assets/icons/fee-management.svg'
import timetableIcon from '../../assets/icons/fn-calendar.svg'
import examsIcon from '../../assets/icons/fn-clipboard-check.svg'
import transportIcon from '../../assets/icons/transport-management.svg'
import reportsIcon from '../../assets/icons/monitor.svg'
import communicationIcon from '../../assets/icons/tile-message.svg'
import searchIcon from '../../assets/icons/search.svg'
import bellIcon from '../../assets/icons/bell.svg'
import styles from './DashboardMockup.module.css'

const NAV_ITEMS = [
  { label: 'Dashboard', icon: dashboardIcon },
  { label: 'Attendance', icon: attendanceIcon, active: true },
  { label: 'Homework', icon: homeworkIcon },
  { label: 'Fees', icon: feesIcon },
  { label: 'Timetable', icon: timetableIcon },
  { label: 'Exams', icon: examsIcon },
  { label: 'Transport', icon: transportIcon },
  { label: 'Reports', icon: reportsIcon },
  { label: 'Communication', icon: communicationIcon },
]

const KPIS = [
  { label: 'Present today', value: '1,182', delta: '+2.1%', tone: 'success' },
  { label: 'Absent', value: '47', delta: '-0.4%', tone: 'attention' },
  { label: 'On leave', value: '12' },
  { label: 'Parent alerts sent', value: '1,229' },
]

const CHART_POINTS = [
  { day: 'Mon', y: 46 },
  { day: 'Tue', y: 62 },
  { day: 'Wed', y: 34 },
  { day: 'Thu', y: 70 },
  { day: 'Fri', y: 52 },
]

const ROWS = [
  { cls: 'Class VI-A', present: 42, absent: 3, rate: '93.3%', status: 'Good' },
  { cls: 'Class VI-B', present: 39, absent: 1, rate: '97.5%', status: 'Good' },
  { cls: 'Class VII-A', present: 36, absent: 6, rate: '85.7%', status: 'Low' },
  { cls: 'Class VII-B', present: 41, absent: 2, rate: '95.3%', status: 'Good' },
]

function DashboardMockup() {
  return (
    <div className={styles.card}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <img src={brandMark} alt="" width={12} height={12} />
          <span>SchoolMate</span>
        </div>
        <nav className={styles.nav}>
          {NAV_ITEMS.map((item) => (
            <span key={item.label} className={[styles.navItem, item.active ? styles.navItemActive : ''].join(' ')}>
              <img src={item.icon} alt="" width={9} height={9} />
              {item.label}
            </span>
          ))}
        </nav>
        <span className={styles.support}>Support</span>
      </aside>

      <div className={styles.main}>
        <div className={styles.topbar}>
          <div className={styles.topbarTitle}>
            <p>Attendance</p>
            <span>Live attendance updates</span>
          </div>
          <div className={styles.search}>
            <img src={searchIcon} alt="" width={8} height={8} />
            <span>Search students</span>
          </div>
          <img src={bellIcon} alt="" width={9} height={9} />
          <span className={styles.avatar}>A</span>
        </div>

        <div className={styles.content}>
          <div className={styles.kpiRow}>
            {KPIS.map((kpi) => (
              <div key={kpi.label} className={styles.kpi}>
                <p className={styles.kpiLabel}>{kpi.label}</p>
                <div className={styles.kpiValueRow}>
                  <span className={styles.kpiValue}>{kpi.value}</span>
                  {kpi.delta && (
                    <span className={[styles.delta, kpi.tone === 'attention' ? styles.deltaDown : ''].join(' ')}>
                      {kpi.delta}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.chartCard}>
            <p className={styles.cardTitle}>Attendance rate · this week</p>
            <span className={styles.cardSubtitle}>Last 5 school days</span>
            <svg className={styles.chart} viewBox="0 0 200 60" preserveAspectRatio="none">
              <polyline
                points={CHART_POINTS.map((p, i) => `${i * 50},${60 - p.y * 0.7}`).join(' ')}
                fill="none"
                stroke="var(--bg-brand)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className={styles.chartAxis}>
              {CHART_POINTS.map((p) => (
                <span key={p.day}>{p.day}</span>
              ))}
            </div>
          </div>

          <div className={styles.tableCard}>
            <p className={styles.cardTitle}>Class-wise attendance · today</p>
            <div className={styles.tableHead}>
              <span>Class</span>
              <span>Present</span>
              <span>Absent</span>
              <span>Rate</span>
              <span>Status</span>
            </div>
            {ROWS.map((row) => (
              <div key={row.cls} className={styles.tableRow}>
                <span>{row.cls}</span>
                <span>{row.present}</span>
                <span>{row.absent}</span>
                <span>{row.rate}</span>
                <span className={[styles.chip, row.status === 'Low' ? styles.chipLow : styles.chipGood].join(' ')}>
                  {row.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardMockup
