import brandMark from '../../assets/images/brand-mark.png'
import dashboardIcon from '../../assets/icons/stat-dashboard.svg'
import usersIcon from '../../assets/icons/users.svg'
import userCheckIcon from '../../assets/icons/fn-user-check.svg'
import bookIcon from '../../assets/icons/fn-book.svg'
import calendarIcon from '../../assets/icons/fn-calendar.svg'
import fileTextIcon from '../../assets/icons/file-text.svg'
import messageIcon from '../../assets/icons/tile-message.svg'
import feeIcon from '../../assets/icons/fee-management.svg'
import briefcaseIcon from '../../assets/icons/fn-briefcase.svg'
import clipboardCheckIcon from '../../assets/icons/fn-clipboard-check.svg'
import packageIcon from '../../assets/icons/fn-package.svg'
import checkCircleIcon from '../../assets/icons/check-circle.svg'
import busIcon from '../../assets/icons/fn-bus.svg'
import chartIcon from '../../assets/icons/fn-chart.svg'
import trendingUpIcon from '../../assets/icons/fn-trending-up.svg'
import supportIcon from '../../assets/icons/fn-support.svg'
import searchIcon from '../../assets/icons/search.svg'
import bellIcon from '../../assets/icons/bell.svg'
import styles from './ContactDashboardMockup.module.css'

const NAV_GROUPS = [
  {
    label: 'MAIN',
    items: [
      { label: 'Dashboard', icon: dashboardIcon, active: true },
      { label: 'Students', icon: usersIcon },
      { label: 'Attendance', icon: userCheckIcon },
      { label: 'Academics', icon: bookIcon },
      { label: 'Timetable', icon: calendarIcon },
      { label: 'Exams', icon: fileTextIcon },
      { label: 'Communication', icon: messageIcon },
    ],
  },
  {
    label: 'OPERATIONS',
    items: [
      { label: 'Fees', icon: feeIcon },
      { label: 'Payroll', icon: briefcaseIcon },
      { label: 'Leave', icon: clipboardCheckIcon },
      { label: 'Inventory', icon: packageIcon },
      { label: 'Documents', icon: fileTextIcon },
      { label: 'Approvals', icon: checkCircleIcon },
      { label: 'Transport', icon: busIcon },
    ],
  },
  {
    label: 'INSIGHTS',
    items: [
      { label: 'Reports', icon: chartIcon },
      { label: 'Analytics', icon: trendingUpIcon },
    ],
  },
]

const KPIS = [
  { label: 'Students enrolled', value: '1,241', delta: '+18', tone: 'success' },
  { label: 'Present today', value: '1,182', delta: '95.2%', tone: 'success' },
  { label: 'Fees collected', value: '₹ 38.4L', delta: '86.2%', tone: 'success' },
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
const CHART_VIEW_W = 708
const CHART_VIEW_H = 112
const CHART_GRID_W = 674
const CHART_LABEL_X = 682
const CHART_LABEL_OFFSET = 7
const CHART_DATA_LEFT = 4
const CHART_DATA_RIGHT = 661

const chartX = (i) =>
  CHART_DATA_LEFT + (i / (CHART_POINTS.length - 1)) * (CHART_DATA_RIGHT - CHART_DATA_LEFT)
const chartY = (value) => ((CHART_MAX - value) / (CHART_MAX - CHART_MIN)) * CHART_VIEW_H

const ROWS = [
  { cls: 'Class VI-A', present: 42, absent: 3, rate: '93.3%', status: 'Good' },
  { cls: 'Class VI-B', present: 39, absent: 1, rate: '97.5%', status: 'Good' },
  { cls: 'Class VII-A', present: 36, absent: 6, rate: '85.7%', status: 'Low' },
  { cls: 'Class VII-B', present: 41, absent: 2, rate: '95.3%', status: 'Good' },
]

function ContactDashboardMockup() {
  return (
    <div className={styles.cardWrap}>
      <div className={styles.card}>
        <aside className={styles.sidebar}>
          <div className={styles.brand}>
            <img src={brandMark} alt="" className={styles.brandIcon} />
            <span>SchoolMate</span>
          </div>

          {NAV_GROUPS.map((group) => (
            <div key={group.label} className={styles.navGroup}>
              <p className={styles.navGroupLabel}>{group.label}</p>
              <nav className={styles.nav}>
                {group.items.map((item) => (
                  <span
                    key={item.label}
                    className={[styles.navItem, item.active ? styles.navItemActive : ''].join(' ')}
                  >
                    <img src={item.icon} alt="" className={styles.navIcon} />
                    {item.label}
                  </span>
                ))}
              </nav>
            </div>
          ))}

          <span className={styles.spacer} />
          <span className={styles.support}>
            <img src={supportIcon} alt="" className={styles.navIcon} />
            Support
          </span>
        </aside>

        <div className={styles.main}>
          <div className={styles.topbar}>
            <div className={styles.topbarTitle}>
              <p>Dashboard</p>
              <span>School overview · today</span>
            </div>
            <div className={styles.search}>
              <img src={searchIcon} alt="" className={styles.searchIcon} />
              <span>Search</span>
            </div>
            <span className={styles.bellWrap}>
              <img src={bellIcon} alt="" className={styles.bellIcon} />
            </span>
            <span className={styles.avatar}>A</span>
          </div>

          <div className={styles.content}>
            <div className={styles.kpiRow}>
              {KPIS.map((kpi) => (
                <div key={kpi.label} className={styles.kpi}>
                  <p className={styles.kpiLabel}>{kpi.label}</p>
                  <div className={styles.kpiValueRow}>
                    <span className={styles.kpiValue}>{kpi.value}</span>
                    {kpi.delta && <span className={styles.delta}>{kpi.delta}</span>}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.chartCard}>
              <div className={styles.cardHead}>
                <div className={styles.cardHeadTitles}>
                  <p className={styles.cardTitle}>Attendance rate</p>
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
                    r={p.current ? 5 : 4}
                    className={p.current ? styles.chartDotCurrent : styles.chartDot}
                  />
                ))}
                <text
                  x={620}
                  y={chartY(CHART_POINTS[CHART_POINTS.length - 1].value) - 20}
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
              <div className={styles.cardHead}>
                <div className={styles.cardHeadTitles}>
                  <p className={styles.cardTitle}>Class-wise attendance</p>
                  <span className={styles.cardSubtitle}>Today</span>
                </div>
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

export default ContactDashboardMockup
