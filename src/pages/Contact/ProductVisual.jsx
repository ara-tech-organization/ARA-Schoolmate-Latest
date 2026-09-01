import Reveal from '../../components/ui/Reveal'
import ContactDashboardMockup from './ContactDashboardMockup'
import styles from './ProductVisual.module.css'

function ProductVisual() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className="container">
        <div
          className={styles.frame}
          role="img"
          aria-label="SchoolMate admin dashboard showing attendance rate, class-wise attendance, and school KPIs"
        >
          <ContactDashboardMockup />
        </div>
      </div>
    </Reveal>
  )
}

export default ProductVisual
