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
  { day: 'Mon', value: 94.2 },
  { day: 'Tue', value: 96.1 },
  { day: 'Wed', value: 92.8 },
  { day: 'Thu', value: 97.0 },
  { day: 'Fri', value: 95.4, current: true },
]

const CHART_GRID = [100, 95, 90]
const CHART_MIN = 90
const CHART_MAX = 100
// Plot geometry lifted straight from the Figma "Chart card" export (640px-wide reference frame).
const CHART_VIEW_W = 453.12
const CHART_VIEW_H = 75.52
const CHART_GRID_W = 431.36
const CHART_LABEL_X = 436.48
const CHART_LABEL_OFFSET = 4.48
const CHART_DATA_LEFT = 5.12
const CHART_DATA_RIGHT = 426.24

const chartX = (i) =>
  CHART_DATA_LEFT + (i / (CHART_POINTS.length - 1)) * (CHART_DATA_RIGHT - CHART_DATA_LEFT)
const chartY = (value) => ((CHART_MAX - value) / (CHART_MAX - CHART_MIN)) * CHART_VIEW_H

const ROWS = [
  { cls: 'Class VI-A', present: 42, absent: 3, rate: '93.3%', status: 'Good' },
  { cls: 'Class VI-B', present: 39, absent: 1, rate: '97.5%', status: 'Good' },
  { cls: 'Class VII-A', present: 36, absent: 6, rate: '85.7%', status: 'Low' },
  { cls: 'Class VII-B', present: 41, absent: 2, rate: '95.3%', status: 'Good' },
]

function DashboardMockup() {
  return (
    <div className={styles.cardWrap}>
    <div className={styles.card}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <img src={brandMark} alt="" className={styles.brandIcon} />
          <span>SchoolMate</span>
        </div>
        <nav className={styles.nav}>
          {NAV_ITEMS.map((item) => (
            <span key={item.label} className={[styles.navItem, item.active ? styles.navItemActive : ''].join(' ')}>
              <img src={item.icon} alt="" className={styles.navIcon} />
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
            <img src={searchIcon} alt="" className={styles.searchIcon} />
            <span>Search students</span>
          </div>
          <img src={bellIcon} alt="" className={styles.bellIcon} />
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
            <div className={styles.cardHead}>
              <div className={styles.cardHeadTitles}>
                <p className={styles.cardTitle}>Attendance rate · this week</p>
                <span className={styles.cardSubtitle}>Last 5 school days</span>
              </div>
            </div>
            <svg
              className={styles.chart}
              viewBox={`0 0 ${CHART_VIEW_W} ${CHART_VIEW_H}`}
              preserveAspectRatio="none"
            >
              {CHART_GRID.map((pct) => {
                const y = chartY(pct)
                return (
                  <g key={pct}>
                    <line x1="0" y1={y} x2={CHART_GRID_W} y2={y} className={styles.gridLine} />
                    <text
                      x={CHART_LABEL_X}
                      y={y - CHART_LABEL_OFFSET}
                      dominantBaseline="hanging"
                      className={styles.gridLabel}
                    >
                      {pct}%
                    </text>
                  </g>
                )
              })}
              <path
                d={`M ${chartX(0)} ${CHART_VIEW_H} L ${CHART_POINTS.map((p, i) => `${chartX(i)} ${chartY(p.value)}`).join(' L ')} L ${chartX(CHART_POINTS.length - 1)} ${CHART_VIEW_H} Z`}
                className={styles.chartArea}
              />
              <polyline
                points={CHART_POINTS.map((p, i) => `${chartX(i)},${chartY(p.value)}`).join(' ')}
                className={styles.chartLine}
              />
              {CHART_POINTS.map((p, i) => (
                <circle
                  key={p.day}
                  cx={chartX(i)}
                  cy={chartY(p.value)}
                  r={p.current ? 3.2 : 2.56}
                  className={p.current ? styles.chartDotCurrent : styles.chartDot}
                />
              ))}
              <text
                x={396.8}
                y={19.38}
                dominantBaseline="hanging"
                className={styles.chartValueLabel}
              >
                {CHART_POINTS[CHART_POINTS.length - 1].value}%
              </text>
            </svg>
            <div className={styles.chartAxis}>
              {CHART_POINTS.map((p) => (
                <span key={p.day} className={p.current ? styles.chartAxisCurrent : undefined}>
                  {p.day}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.tableCard}>
            <div className={styles.tableCardHead}>
              <p className={styles.cardTitle}>Class-wise attendance · today</p>
            </div>
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
    </div>
  )
}

export default DashboardMockup
