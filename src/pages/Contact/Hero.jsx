import Eyebrow from '../../components/ui/Eyebrow'
import Reveal from '../../components/ui/Reveal'
import { getHeroRevealDelay } from '../../utils/pageLoaderTiming'
import styles from './Hero.module.css'

function Hero() {
  return (
    <Reveal as="section" className={styles.hero} delay={getHeroRevealDelay()}>
      <div className="container">
        <div className={styles.copy}>
          <Eyebrow>Get in touch</Eyebrow>
          <h1 className={styles.heading}>Get Started Today with SchoolMate</h1>
          <p className={styles.body}>
            SchoolMate has the tools your institution needs to grow, whether you need eschool software, student
            information management software, or a complete smartschool management system.
          </p>
        </div>
      </div>
    </Reveal>
  )
}

export default Hero
