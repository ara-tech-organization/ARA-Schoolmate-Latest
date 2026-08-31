import heroDesktop from '../../assets/images/about-hero-desktop.png'
import heroTablet from '../../assets/images/about-hero-tablet.png'
import heroMobile from '../../assets/images/about-hero-mobile.png'
import Reveal from '../../components/ui/Reveal'
import Image from '../../components/ui/Image'
import { getHeroRevealDelay } from '../../utils/pageLoaderTiming'
import styles from './AboutHero.module.css'

function AboutHero() {
  return (
    <Reveal as="section" className={styles.hero} delay={getHeroRevealDelay()}>
      <div className="container">
        <h1 className={styles.title}>About Us</h1>

        <div className={styles.band}>
          <Image src={heroDesktop} alt="SchoolMate dashboard and mobile app running for a school" className={styles.imgDesktop} />
          <Image src={heroTablet} alt="SchoolMate dashboard and mobile app running for a school" className={styles.imgTablet} />
          <Image src={heroMobile} alt="SchoolMate mobile app for a school" className={styles.imgMobile} />
        </div>
      </div>
    </Reveal>
  )
}

export default AboutHero
