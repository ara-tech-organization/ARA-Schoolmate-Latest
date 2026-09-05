import checkIcon from '../../assets/icons/check-circle-white.svg'
import clipboardIcon from '../../assets/icons/fn-clipboard-check.svg'
import userCheckIcon from '../../assets/icons/fn-user-check.svg'
import calendarIcon from '../../assets/icons/fn-calendar.svg'
import phoneIcon from '../../assets/icons/phone.svg'
import whatsappIcon from '../../assets/icons/whatsapp.svg'
import Button from '../../components/ui/Button'
import Reveal from '../../components/ui/Reveal'
import RevealGroup from '../../components/ui/RevealGroup'
import styles from './ThankYou.module.css'

const NEXT_STEPS = [
  {
    icon: clipboardIcon,
    index: '01',
    title: 'We review your enquiry',
    body: 'Our team looks over the details you shared so the conversation starts on the right foot.',
  },
  {
    icon: userCheckIcon,
    index: '02',
    title: "We'll reach out within 24 hours",
    body: 'Expect a call or email from SchoolMate to understand your institution’s needs.',
  },
  {
    icon: calendarIcon,
    index: '03',
    title: 'Get your personalized demo',
    body: 'See SchoolMate configured around your school, ready for a walkthrough.',
  },
]

const QUICK_CONTACT = [
  { icon: phoneIcon, label: 'Call us', value: '+91 81100 15152', href: 'tel:+918110015152' },
  { icon: whatsappIcon, label: 'WhatsApp', value: '8110015152', href: 'https://wa.me/918110015152' },
]

function ThankYou() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className={`container ${styles.content}`}>
        <div className={styles.hero}>
          <Reveal as="span" className={styles.iconTile} direction="up">
            <img src={checkIcon} alt="" loading="lazy" decoding="async" width={32} height={32} />
          </Reveal>
          <Reveal as="p" className={styles.eyebrow} direction="up" delay={60}>
            Enquiry received
          </Reveal>
          <Reveal as="h1" className={styles.title} direction="up" delay={100}>
            Thank You!
          </Reveal>
          <Reveal as="p" className={styles.body} direction="up" delay={160}>
            We&rsquo;ve received your enquiry and a member of the SchoolMate team will get back to you shortly.
          </Reveal>

          <Reveal as="div" className={styles.actions} direction="up" delay={220}>
            <Button to="/">Back to Home</Button>
            <Button to="/about" variant="secondary">
              Learn About SchoolMate
            </Button>
          </Reveal>
        </div>

        <RevealGroup className={styles.steps}>
          {NEXT_STEPS.map((step) => (
            <div key={step.index} className={styles.step}>
              <span className={styles.stepIconTile}>
                <img src={step.icon} alt="" loading="lazy" decoding="async" width={20} height={20} />
              </span>
              <span className={styles.stepIndex}>{step.index}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepBody}>{step.body}</p>
            </div>
          ))}
        </RevealGroup>

        <div className={styles.quickContact}>
          <p className={styles.quickContactLabel}>Need us sooner?</p>
          <RevealGroup className={styles.quickContactLinks}>
            {QUICK_CONTACT.map((item) => (
              <a key={item.label} href={item.href} className={styles.quickContactLink} target="_blank" rel="noreferrer">
                <img src={item.icon} alt="" loading="lazy" decoding="async" width={18} height={18} />
                <span>{item.value}</span>
              </a>
            ))}
          </RevealGroup>
        </div>
      </div>
    </Reveal>
  )
}

export default ThankYou
