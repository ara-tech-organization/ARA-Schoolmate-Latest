import Reveal from '../../components/ui/Reveal'
import AboutHeroBand from './AboutHeroBand'
import styles from './AboutHero.module.css'

function AboutHero() {
  return (
    <Reveal as="section" className={styles.hero}>
      <div className="container">
        <h1 className={styles.title}>About Us</h1>
        <AboutHeroBand />
      </div>
    </Reveal>
  )
}

export default AboutHero
