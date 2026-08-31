import Eyebrow from '../../components/ui/Eyebrow'
import Button from '../../components/ui/Button'
import CheckItem from '../../components/ui/CheckItem'
import Reveal from '../../components/ui/Reveal'
import styles from './SchoolMateModules.module.css'

const PLANS = [
  {
    name: 'SchoolMate Lite',
    tagline: 'Smart Communication for Schools Beginning Their Digital Journey',
    price: '₹10,000',
    includesLabel: null,
    features: [
      'Real-time parent communication',
      'Circulars and announcements',
      'Attendance notifications',
      'Homework alerts',
      'Academic calendar setup',
      'Limited role-based permissions',
    ],
    blurb:
      'SchoolMate Lite is perfect for schools looking for a budget e-school software package that includes the basic communication and attendance features.',
    cta: 'Get Started Today with SchoolMate',
  },
  {
    name: 'SchoolMate PRO',
    tagline: 'Advanced Administration & ERP Management',
    price: 'Get a free Quote',
    featured: true,
    includesLabel: 'Includes everything in Lite, plus:',
    features: [
      'Student and staff profile management',
      'Online fee collection',
      'Payroll and leave tracking',
      'Inventory management',
      'Document management',
      'Approval workflows',
    ],
    blurb:
      'SchoolMate PRO is a full featured education management ERP that aims at simplifying operations and automating administrative tasks.',
    cta: 'Get a free Quote',
  },
  {
    name: 'SchoolMate PLUS',
    tagline: 'Smart Transport & Student Safety Management',
    price: 'Get a free Quote',
    includesLabel: 'Includes everything in PRO, plus:',
    features: [
      'GPS live bus tracking',
      'Pickup and drop alerts',
      'Route management',
      'Emergency notifications',
      'Transport-linked attendance',
    ],
    blurb:
      'The module enhances the profile of SchoolMate as a strong online student attendance management software system for institutions that manage transportation and student safety.',
    cta: 'Get a free Quote',
  },
  {
    name: 'SchoolMate 360',
    tagline: 'Complete Academic & Operational Excellence',
    price: 'Get a free Quote',
    includesLabel: 'Includes everything from Lite, PRO, and PLUS, plus:',
    features: [
      'Auto-generated report cards',
      'Syllabus tracking',
      'Lesson progress monitoring',
      'Staff task management',
      'Performance dashboards',
      'Academic analytics',
    ],
    blurb:
      'SchoolMate 360 is designed for schools that demand advanced educational administration software and centralized operational intelligence.',
    cta: 'Get a free Quote',
  },
]

function SchoolMateModules() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className="container">
        <Eyebrow align="center">Modules</Eyebrow>
        <h2 className={styles.heading}>SchoolMate Modules</h2>

        <div className={styles.grid}>
          {PLANS.map((plan) => (
            <div key={plan.name} className={[styles.card, plan.featured ? styles.featured : ''].join(' ')}>
              <h3 className={styles.name}>{plan.name}</h3>
              <p className={styles.tagline}>{plan.tagline}</p>
              <p className={[styles.price, plan.featured || plan.price.startsWith('Get') ? styles.priceBrand : ''].join(' ')}>
                {plan.price}
              </p>
              <div className={styles.divider} />
              {plan.includesLabel && <p className={styles.includes}>{plan.includesLabel}</p>}
              <ul className={styles.features}>
                {plan.features.map((label) => (
                  <CheckItem key={label} className={styles.feature}>
                    {label}
                  </CheckItem>
                ))}
              </ul>
              <p className={styles.blurb}>{plan.blurb}</p>
              <Button as="a" href="/contact" variant="secondary" size="md" className={styles.cta}>
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          <Button as="a" href="/contact">Get a free Demo</Button>
        </div>
      </div>
    </Reveal>
  )
}

export default SchoolMateModules
