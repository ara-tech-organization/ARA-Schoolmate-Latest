import whatsapp from '../../assets/icons/whatsapp.svg'
import phone from '../../assets/icons/phone.svg'
import instagram from '../../assets/icons/instagram.svg'
import facebook from '../../assets/icons/facebook.svg'
import styles from './FloatingContactActions.module.css'

const ACTIONS = [
  { icon: whatsapp, label: 'Chat on WhatsApp', href: 'https://wa.me/' },
  { icon: phone, label: 'Call us', href: 'tel:' },
  { icon: instagram, label: 'Follow on Instagram', href: '#' },
  { icon: facebook, label: 'Follow on Facebook', href: '#' },
]

function FloatingContactActions() {
  return (
    <div className={styles.rail}>
      {ACTIONS.map((action) => (
        <a key={action.label} href={action.href} className={styles.action} aria-label={action.label}>
          <img src={action.icon} alt="" width={21} height={21} />
        </a>
      ))}
    </div>
  )
}

export default FloatingContactActions
