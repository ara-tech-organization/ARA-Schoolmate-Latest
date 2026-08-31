import heroDesktop from '../../assets/images/about-hero-desktop.png'
import heroTablet from '../../assets/images/about-hero-tablet.png'
import heroMobile from '../../assets/images/about-hero-mobile.png'
import Reveal from '../../components/ui/Reveal'
import styles from './AboutHero.module.css'

function AboutHero() {
  return (
    <Reveal as="section" className={styles.hero}>
      <div className="container">
        <h1 className={styles.title}>About Us</h1>

        <div className={styles.band}>
          <img src={heroDesktop} alt="SchoolMate dashboard and mobile app running for a school" className={styles.imgDesktop} />
          <img src={heroTablet} alt="SchoolMate dashboard and mobile app running for a school" className={styles.imgTablet} />
          <img src={heroMobile} alt="SchoolMate mobile app for a school" className={styles.imgMobile} />
        </div>
      </div>
    </Reveal>
  )
}

export default AboutHero
