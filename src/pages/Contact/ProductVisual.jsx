import Reveal from '../../components/ui/Reveal'
import ContactDashboardMockup from './ContactDashboardMockup'
import styles from './ProductVisual.module.css'

function ProductVisual() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className="container">
        <Reveal
          as="div"
          className={styles.frame}
          direction="up"
          role="img"
          aria-label="SchoolMate admin dashboard showing attendance rate, class-wise attendance, and school KPIs"
        >
          <ContactDashboardMockup />
        </Reveal>
      </div>
    </Reveal>
  )
}

export default ProductVisual
