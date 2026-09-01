import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/images/logo-header.png'
import Button from '../ui/Button'
import Image from '../ui/Image'
import Reveal from '../ui/Reveal'
import RevealGroup from '../ui/RevealGroup'
import { getHeroRevealDelay } from '../../utils/pageLoaderTiming'
import styles from './Header.module.css'

const NAV_ITEMS = [
  { label: 'Home', to: '/', end: true },
  { label: 'About', to: '/about' },
  { label: 'Mobile App', to: '/mobile-app' },
  { label: 'Contact', to: '/contact' },
]

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <Reveal as="header" className={styles.header} direction="down" delay={getHeroRevealDelay()}>
      <div className={styles.bar}>
        <Link to="/" className={styles.logo}>
          <Image src={logo} alt="SchoolMate" />
        </Link>

        <RevealGroup as="nav" className={[styles.nav, open ? styles.navOpen : ''].filter(Boolean).join(' ')}>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                [styles.navItem, isActive ? styles.navItemActive : ''].filter(Boolean).join(' ')
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Button to="/contact" size="md" className={styles.navCta}>
            Get a free Demo
          </Button>
        </RevealGroup>

        <button
          type="button"
          className={styles.toggle}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </Reveal>
  )
}

export default Header
