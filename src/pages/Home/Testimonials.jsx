import Eyebrow from '../../components/ui/Eyebrow'
import Reveal from '../../components/ui/Reveal'
import RevealGroup from '../../components/ui/RevealGroup'
import styles from './Testimonials.module.css'

const FEATURED = {
  quote: 'Communication with parents was faster and more structured.',
  name: 'Divya Nair',
}

const TESTIMONIALS = [
  { quote: 'Tracking attendance is now flawless.', name: 'Karthik Srinivasan' },
  {
    quote: 'The real-time alerts and reporting tools enhanced transparency throughout our institution.',
    name: 'Pooja Menon',
  },
  { quote: 'SchoolMate made our management so easy, from fees to academics and transport.', name: 'Harish Kumar' },
  {
    quote: 'Many institutions prefer SchoolMate as their preferred choice of schooling software because it is reliable, flexible, and easy to use.',
    name: 'Arjun Kumar',
  },
]

function Testimonials() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className="container">
        <Eyebrow align="center">In their words</Eyebrow>
        <h2 className={styles.heading}>Testimonials</h2>

        <div className={styles.layout}>
          <Reveal as="div" className={styles.featured} direction="right">
            <span className={styles.featuredRule} />
            <p className={styles.featuredQuote}>{FEATURED.quote}</p>
            <div className={styles.attribution}>
              <span className={styles.monogramDark}>{FEATURED.name.charAt(0)}</span>
              <p className={styles.nameDark}>{FEATURED.name}</p>
            </div>
          </Reveal>

          <RevealGroup className={styles.grid}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className={styles.card}>
                <span className={styles.rule} />
                <p className={styles.quote}>{t.quote}</p>
                <div className={styles.attribution}>
                  <span className={styles.monogram}>{t.name.charAt(0)}</span>
                  <p className={styles.name}>{t.name}</p>
                </div>
              </div>
            ))}
          </RevealGroup>
        </div>
      </div>
    </Reveal>
  )
}

export default Testimonials
