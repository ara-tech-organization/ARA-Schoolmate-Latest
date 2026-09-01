import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo-footer.png'
import Image from '../ui/Image'
import Reveal from '../ui/Reveal'
import RevealGroup from '../ui/RevealGroup'
import styles from './Footer.module.css'

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Mobile App', to: '/mobile-app' },
  { label: 'Contact', to: '/contact' },
]

function Footer() {
  return (
    <Reveal as="footer" className={styles.footer} direction="up">
      <div className={styles.top}>
        <Image src={logo} alt="SchoolMate — Smarter School | Happier Parents" loading="lazy" decoding="async" className={styles.logo} />
        <RevealGroup as="nav" className={styles.nav}>
          {NAV_ITEMS.map((item) => (
            <Link key={item.label} to={item.to}>
              {item.label}
            </Link>
          ))}
        </RevealGroup>
      </div>
      <div className={styles.divider} />
      <p className={styles.caption}>SchoolMate was developed by Ara Discoveries.</p>
    </Reveal>
  )
}

export default Footer
