import { useEffect, useState } from 'react'
import styles from './PageLoader.module.css'

const BRAND = 'SchoolMate'.split('')

function PageLoader() {
  const [hiding, setHiding] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setHiding(true), 2800)
    const t2 = setTimeout(() => setGone(true), 3400)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  if (gone) return null

  return (
    <div className={[styles.wrap, hiding ? styles.hide : ''].filter(Boolean).join(' ')}>
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />

      <div className={styles.orbit}>
        {[...Array(6)].map((_, i) => (
          <span key={i} className={styles.particle} style={{ '--pi': i }} />
        ))}
      </div>

      <div className={styles.center}>
        <div className={styles.iconWrap}>
          <span className={`${styles.pulse} ${styles.pulse1}`} />
          <span className={`${styles.pulse} ${styles.pulse2}`} />

          <svg className={styles.arcSvg} viewBox="0 0 110 110" fill="none">
            <circle
              cx="55"
              cy="55"
              r="48"
              stroke="url(#plG2)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="72 230"
              className={styles.arcSpin}
            />
            <defs>
              <linearGradient id="plG2" x1="0" y1="0" x2="110" y2="110" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#d1131b" />
                <stop offset="100%" stopColor="#ed1f27" />
              </linearGradient>
            </defs>
          </svg>

          <div className={styles.iconBox}>
            <svg viewBox="0 0 48 48" fill="none" className={styles.capSvg}>
              <path d="M24 10L4 20l20 10 20-10-20-10z" fill="white" opacity=".95" />
              <path
                d="M10 24.5v10c0 0 5 5 14 5s14-5 14-5v-10"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                opacity=".85"
              />
              <line x1="40" y1="20" x2="40" y2="33" stroke="white" strokeWidth="2" strokeLinecap="round" opacity=".8" />
              <circle cx="40" cy="35" r="2.5" fill="white" opacity=".8" />
            </svg>
          </div>
        </div>

        <div className={styles.brandRow}>
          {BRAND.map((ch, i) => (
            <span key={i} className={styles.char} style={{ animationDelay: `${0.05 * i + 0.3}s` }}>
              {ch}
            </span>
          ))}
        </div>

        <p className={styles.tagline}>Smart Digital Solution for Modern Schools</p>

        <div className={styles.waveRow}>
          {[...Array(5)].map((_, i) => (
            <span key={i} className={styles.waveBar} style={{ '--wi': i }} />
          ))}
        </div>
      </div>

      <div className={styles.progress}>
        <div className={styles.progressFill} />
      </div>
    </div>
  )
}

export default PageLoader
