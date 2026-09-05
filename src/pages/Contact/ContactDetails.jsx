import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import phoneIcon from '../../assets/icons/phone.svg'
import mailIcon from '../../assets/icons/mail.svg'
import whatsappIcon from '../../assets/icons/whatsapp.svg'
import buildingIcon from '../../assets/icons/building.svg'
import mapPinIcon from '../../assets/icons/map-pin.svg'
import Button from '../../components/ui/Button'
import Reveal from '../../components/ui/Reveal'
import RevealGroup from '../../components/ui/RevealGroup'
import styles from './ContactDetails.module.css'

const CONTACT_FORM_ENDPOINT = 'https://araschoolmate.com/api/email.php'

const CONTACT_ITEMS = [
  {
    icon: phoneIcon,
    label: 'Phone',
    value: '+91 81100 15152',
    meta: 'Monday – Saturday, 9 AM – 7 PM',
    href: 'tel:+918110015152',
  },
  {
    icon: mailIcon,
    label: 'Email',
    value: 'support@schoolmate.in',
    href: 'mailto:support@schoolmate.in',
  },
  {
    icon: whatsappIcon,
    label: 'WhatsApp',
    value: '8110015152',
    href: 'https://wa.me/918110015152',
  },
  {
    icon: buildingIcon,
    label: 'Company',
    value: 'ARA Discover Technologies Pvt. Ltd.',
  },
  {
    icon: mapPinIcon,
    label: 'Address',
    value: '67A, Giri Rd, Srinivasapuram, Balaganapathy Nagar, Thanjavur, Tamil Nadu 613009',
  },
]

const FIELDS = [
  { name: 'name', label: 'Name*', placeholder: 'Your name', type: 'text', required: true },
  { name: 'email', label: 'Email', placeholder: 'you@school.in', type: 'email' },
  { name: 'phone', label: 'Phone*', placeholder: '+91', type: 'tel', required: true },
  {
    name: 'institution',
    label: 'Institution / School Name*',
    placeholder: 'Your school or institution',
    type: 'text',
    required: true,
  },
  { name: 'city', label: 'City*', placeholder: 'Your city', type: 'text', required: true },
]

function ContactDetails() {
  const navigate = useNavigate()
  const [status, setStatus] = useState('idle') // idle | submitting | error
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const payload = Object.fromEntries(new FormData(form).entries())
    payload.source = 'Website Contact Form'

    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Something went wrong. Please try again.')
      }

      form.reset()
      navigate('/thank-you')
    } catch (err) {
      setStatus('error')
      setErrorMessage(err.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <Reveal as="section" className={styles.section}>
      <div className="container">
        <div className={styles.split}>
          <Reveal as="ul" className={styles.list} direction="up">
            {CONTACT_ITEMS.map((item) => {
              const Tag = item.href ? 'a' : 'div'
              return (
                <li key={item.label}>
                  <Tag className={styles.item} href={item.href} target={item.href ? '_blank' : undefined} rel={item.href ? 'noreferrer' : undefined}>
                    <span className={styles.labelRow}>
                      <img src={item.icon} alt="" loading="lazy" decoding="async" width={20} height={20} />
                      <span className={styles.labelText}>{item.label}</span>
                    </span>
                    <span className={styles.value}>{item.value}</span>
                    {item.meta && <span className={styles.meta}>{item.meta}</span>}
                  </Tag>
                </li>
              )
            })}
          </Reveal>

          <Reveal as="form" className={styles.form} onSubmit={handleSubmit} direction="up" delay={120}>
            <h3 className={styles.formTitle}>Get Started Today with SchoolMate</h3>
            <RevealGroup className={styles.fields}>
              {FIELDS.map((field) => (
                <label key={field.name} className={styles.field}>
                  <span className={styles.fieldLabel}>{field.label}</span>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                    disabled={status === 'submitting'}
                    className={styles.input}
                  />
                </label>
              ))}
              <label className={styles.field}>
                <span className={styles.fieldLabel}>Message</span>
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows={3}
                  disabled={status === 'submitting'}
                  className={styles.textarea}
                />
              </label>
            </RevealGroup>

            {status === 'error' && (
              <p className={styles.formError} role="alert">
                {errorMessage}
              </p>
            )}

            <Button type="submit" className={styles.submit} disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending…' : 'Get a free Demo'}
            </Button>
          </Reveal>
        </div>
      </div>
    </Reveal>
  )
}

export default ContactDetails
