import styles from './PhoneFrame.module.css'

function PhoneFrame({ children }) {
  return (
    <div className={styles.phoneWrap}>
      <div className={styles.phone}>
        <div className={styles.screen}>
          <div className={styles.statusBar}>
            <span>9:41</span>
            <span className={styles.statusIcons} aria-hidden="true">
              <span />
              <span />
              <span />
              <span className={styles.battery} />
            </span>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default PhoneFrame
