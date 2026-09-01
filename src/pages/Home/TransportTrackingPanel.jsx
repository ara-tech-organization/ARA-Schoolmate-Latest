import transportIcon from '../../assets/icons/transport-management.svg'
import busIcon from '../../assets/icons/fn-bus.svg'
import RevealGroup from '../../components/ui/RevealGroup'
import styles from './TransportTrackingPanel.module.css'

const MAP_W = 444
const MAP_H = 150

const STOPS = [
  { x: 26, y: 128 },
  { x: 92, y: 66 },
  { x: 206, y: 100 },
  { x: 330, y: 34 },
]

const BUS_MARKER = { x: 418, y: 34, size: 30 }

const routePath = STOPS.map((p, i) => (i === 0 ? `M${p.x},${p.y}` : `L${p.x},${STOPS[i - 1].y} L${p.x},${p.y}`))
  .concat(`L${BUS_MARKER.x},${STOPS[STOPS.length - 1].y} L${BUS_MARKER.x},${BUS_MARKER.y}`)
  .join(' ')

const ROWS = [
  { stop: 'Stop 3 · Giri Road', time: 'Departed 07:42', tone: 'past' },
  { stop: 'Stop 4 · Balaganapathy Nagar', time: 'ETA 07:55', tone: 'current' },
  { stop: 'School Campus', time: 'ETA 08:10', tone: 'upcoming' },
]

const DOT_TONE = {
  past: styles.dotPast,
  current: styles.dotCurrent,
  upcoming: styles.dotUpcoming,
}

function TransportTrackingPanel() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={transportIcon} alt="" className={styles.icon} aria-hidden="true" />
        <div className={styles.headerText}>
          <p className={styles.title}>Live Bus Tracking</p>
          <p className={styles.subtitle}>Route 04 · GPS enabled</p>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.map}>
          <svg
            className={styles.route}
            viewBox={`0 0 ${MAP_W} ${MAP_H}`}
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <rect x="0.5" y="0.5" width={MAP_W - 1} height={MAP_H - 1} className={styles.mapFrame} />
            <path d={routePath} className={styles.routeLine} />
            {STOPS.map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r="4.5" className={styles.stopDot} />
            ))}
          </svg>
          <div
            className={styles.busMarker}
            style={{
              left: `${(BUS_MARKER.x / MAP_W) * 100}%`,
              top: `${(BUS_MARKER.y / MAP_H) * 100}%`,
              width: `${(BUS_MARKER.size / MAP_W) * 100}%`,
              height: `${(BUS_MARKER.size / MAP_H) * 100}%`,
            }}
          >
            <img src={busIcon} alt="" className={styles.busIcon} aria-hidden="true" />
          </div>
        </div>

        <RevealGroup className={styles.rows}>
          {ROWS.map((row) => (
            <div key={row.stop} className={styles.row}>
              <span className={[styles.dot, DOT_TONE[row.tone]].join(' ')} aria-hidden="true" />
              <p className={[styles.rowStop, row.tone === 'current' ? styles.rowStopCurrent : ''].join(' ')}>
                {row.stop}
              </p>
              <span className={[styles.rowTime, row.tone === 'current' ? styles.rowTimeCurrent : ''].join(' ')}>
                {row.time}
              </span>
            </div>
          ))}
        </RevealGroup>
      </div>
    </div>
  )
}

export default TransportTrackingPanel
