import checkIcon from '../../assets/icons/check-circle-white.svg'
import clipboardIcon from '../../assets/icons/fn-clipboard-check.svg'
import userCheckIcon from '../../assets/icons/fn-user-check.svg'
import calendarIcon from '../../assets/icons/fn-calendar.svg'
import phoneIcon from '../../assets/icons/phone.svg'
import whatsappIcon from '../../assets/icons/whatsapp.svg'
import Button from '../../components/ui/Button'
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
    <section className={styles.section}>
      <div className={`container ${styles.content}`}>
        <div className={styles.hero}>
          <span className={styles.iconTile}>
            <img src={checkIcon} alt="" loading="lazy" decoding="async" width={32} height={32} />
          </span>
          <p className={styles.eyebrow}>Enquiry received</p>
          <h1 className={styles.title}>Thank You!</h1>
          <p className={styles.body}>
            We&rsquo;ve received your enquiry and a member of the SchoolMate team will get back to you shortly.
          </p>

          <div className={styles.actions}>
            <Button to="/">Back to Home</Button>
            <Button to="/about" variant="secondary">
              Learn About SchoolMate
            </Button>
          </div>
        </div>

        <div className={styles.steps}>
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
        </div>

        <div className={styles.quickContact}>
          <p className={styles.quickContactLabel}>Need us sooner?</p>
          <div className={styles.quickContactLinks}>
            {QUICK_CONTACT.map((item) => (
              <a key={item.label} href={item.href} className={styles.quickContactLink} target="_blank" rel="noreferrer">
                <img src={item.icon} alt="" loading="lazy" decoding="async" width={18} height={18} />
                <span>{item.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThankYou
