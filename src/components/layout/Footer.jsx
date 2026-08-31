import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo-footer.png'
import Image from '../ui/Image'
import styles from './Footer.module.css'

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Mobile App', to: '/mobile-app' },
  { label: 'Contact', to: '/contact' },
]

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <Image src={logo} alt="SchoolMate — Smarter School | Happier Parents" loading="lazy" decoding="async" className={styles.logo} />
        <nav className={styles.nav}>
          {NAV_ITEMS.map((item) => (
            <Link key={item.label} to={item.to}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className={styles.divider} />
      <p className={styles.caption}>SchoolMate was developed by Ara Discoveries.</p>
    </footer>
  )
}

export default Footer
