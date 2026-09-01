import PhoneFrame from './PhoneFrame'
import FeesAppScreen from './FeesAppScreen'
import PhoneMockup from '../Home/PhoneMockup'
import styles from './TransformVisual.module.css'

function TransformVisual() {
  return (
    <div className={styles.visual} role="img" aria-label="SchoolMate fees screen and mobile app mockup">
      <div className={styles.fees}>
        <PhoneFrame>
          <FeesAppScreen />
        </PhoneFrame>
      </div>
      <div className={styles.main}>
        <PhoneMockup />
      </div>
    </div>
  )
}

export default TransformVisual
