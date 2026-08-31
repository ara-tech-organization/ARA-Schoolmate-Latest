import dashboard from '../../assets/images/contact-dashboard.png'
import Reveal from '../../components/ui/Reveal'
import styles from './ProductVisual.module.css'

function ProductVisual() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className="container">
        <div className={styles.frame}>
          <img
            src={dashboard}
            alt="SchoolMate admin dashboard showing attendance rate, class-wise attendance, and school KPIs"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </Reveal>
  )
}

export default ProductVisual
