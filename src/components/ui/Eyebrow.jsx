import styles from './Eyebrow.module.css'

function Eyebrow({ children, align = 'left', tone = 'brand', className = '' }) {
  return (
    <div className={[styles.eyebrow, align === 'center' ? styles.center : '', className].filter(Boolean).join(' ')}>
      <span className={styles.rule} />
      <span className={[styles.label, tone === 'inverse' ? styles.inverse : ''].filter(Boolean).join(' ')}>
        {children}
      </span>
    </div>
  )
}

export default Eyebrow
