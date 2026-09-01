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
import Reveal from '../../components/ui/Reveal'
import RevealGroup from '../../components/ui/RevealGroup'
import styles from './AdminDashboardCard.module.css'

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
  { day: 'Mon', x: 1.34, y: 21.65 },
  { day: 'Tue', x: 56.62, y: 14.12 },
  { day: 'Wed', x: 111.89, y: 27.2 },
  { day: 'Thu', x: 167.16, y: 10.55 },
  { day: 'Fri', x: 222.1, y: 16.56 },
]
const CHART_LINE = CHART_POINTS.map((p) => `${p.x},${p.y}`).join(' ')
const CHART_FILL = `1.34,39.65 ${CHART_LINE} 222.1,39.65`

const ROWS = [
  { cls: 'Class VI-A', present: 42, absent: 3, rate: '93.3%', status: 'Good' },
  { cls: 'Class VI-B', present: 39, absent: 1, rate: '97.5%', status: 'Good' },
  { cls: 'Class VII-A', present: 36, absent: 6, rate: '85.7%', status: 'Low' },
  { cls: 'Class VII-B', present: 41, absent: 2, rate: '95.3%', status: 'Good' },
]

function AdminDashboardCard() {
  return (
    <div className={styles.card}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <img src={brandMark} alt="" />
          <span className={styles.brandName}>SchoolMate</span>
        </div>
        <nav className={styles.nav}>
          {NAV_ITEMS.map((item) => (
            <span key={item.label} className={`${styles.navItem} ${item.active ? styles.navItemActive : ''}`}>
              <img src={item.icon} alt="" />
              <span className={styles.navLabel}>{item.label}</span>
            </span>
          ))}
        </nav>
        <span className={styles.spacer} />
        <span className={styles.support}>Support</span>
      </aside>

      <div className={styles.main}>
        <div className={styles.topbar}>
          <div className={styles.topbarTitle}>
            <p>Attendance</p>
            <span>Live attendance updates</span>
          </div>
          <span className={styles.topbarSpacer} />
          <div className={styles.search}>
            <img src={searchIcon} alt="" />
            <span>Search students</span>
          </div>
          <span className={styles.bellWrap}>
            <img src={bellIcon} alt="" />
          </span>
          <span className={styles.avatar}>A</span>
        </div>

        <div className={styles.content}>
          <RevealGroup className={styles.kpiRow}>
            {KPIS.map((kpi) => (
              <div key={kpi.label} className={styles.kpi}>
                <p className={styles.kpiLabel}>{kpi.label}</p>
                <div className={styles.kpiValueRow}>
                  <span className={styles.kpiValue}>{kpi.value}</span>
                  {kpi.delta && (
                    <span className={`${styles.delta} ${kpi.tone === 'attention' ? styles.deltaDown : ''}`}>
                      {kpi.delta}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </RevealGroup>

          <Reveal as="div" className={styles.chartCard} direction="up" delay={100}>
            <div className={styles.cardHead}>
              <div>
                <p className={styles.cardTitle}>Attendance rate · this week</p>
                <p className={styles.cardSubtitle}>Last 5 school days</p>
              </div>
              <span className={styles.headSpacer} />
            </div>
            <div className={styles.plot}>
              <svg className={styles.chart} viewBox="0 0 226.46 39.65" preserveAspectRatio="none">
                <line x1="0" y1="0" x2="226.46" y2="0" stroke="var(--border-subtle)" strokeWidth="0.34" />
                <line x1="0" y1="19.82" x2="226.46" y2="19.82" stroke="var(--border-subtle)" strokeWidth="0.34" />
                <line x1="0" y1="39.65" x2="226.46" y2="39.65" stroke="var(--border-subtle)" strokeWidth="0.34" />
                <polygon points={CHART_FILL} fill="var(--bg-brand)" fillOpacity="0.08" />
                <polyline
                  points={CHART_LINE}
                  fill="none"
                  stroke="var(--bg-brand)"
                  strokeWidth="0.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
                {CHART_POINTS.map((p, i) => (
                  <circle
                    key={p.day}
                    cx={p.x}
                    cy={p.y}
                    r={i === CHART_POINTS.length - 1 ? 1.68 : 1.34}
                    fill={i === CHART_POINTS.length - 1 ? 'var(--bg-brand)' : 'var(--bg-surface)'}
                    stroke="var(--bg-brand)"
                    strokeWidth="0.67"
                  />
                ))}
              </svg>
              <span className={styles.chartLabel} style={{ top: '-2.35cqw' }}>
                100%
              </span>
              <span className={styles.chartLabel} style={{ top: '17.47cqw' }}>
                95%
              </span>
              <span className={styles.chartLabel} style={{ top: '37.3cqw' }}>
                90%
              </span>
              <span className={styles.chartValue} style={{ left: '92.02%', top: '25.65%' }}>
                95.4%
              </span>
            </div>
            <div className={styles.axis}>
              {CHART_POINTS.map((p) => (
                <span key={p.day} className={styles.axisTick}>
                  {p.day}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal as="div" className={styles.tableCard} direction="up" delay={180}>
            <div className={styles.cardHead}>
              <p className={styles.cardTitle}>Class-wise attendance · today</p>
              <span className={styles.headSpacer} />
            </div>
            <div className={styles.tableHead}>
              <span className={styles.colClass}>Class</span>
              <span className={styles.colValue}>Present</span>
              <span className={styles.colValue}>Absent</span>
              <span className={styles.colValue}>Rate</span>
              <span className={styles.colStatus}>Status</span>
            </div>
            <RevealGroup as="div">
              {ROWS.map((row) => (
                <div key={row.cls} className={styles.tableRow}>
                  <span className={styles.colClass}>{row.cls}</span>
                  <span className={styles.colValue}>{row.present}</span>
                  <span className={styles.colValue}>{row.absent}</span>
                  <span className={styles.colValue}>{row.rate}</span>
                  <span className={styles.colStatus}>
                    <span className={`${styles.chip} ${row.status === 'Low' ? styles.chipLow : styles.chipGood}`}>
                      <span className={styles.chipDot} />
                      {row.status}
                    </span>
                  </span>
                </div>
              ))}
            </RevealGroup>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboardCard
