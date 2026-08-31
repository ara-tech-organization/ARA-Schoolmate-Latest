import CheckItem from '../../components/ui/CheckItem'
import visualDesktop from '../../assets/images/why-choose-visual-desktop.png'
import visualTablet from '../../assets/images/why-choose-visual-tablet.png'
import visualMobile from '../../assets/images/why-choose-visual-mobile.png'
import Reveal from '../../components/ui/Reveal'
import styles from './WhyChoose.module.css'

const BENEFITS = [
  'Instant attendance alerts',
  'Homework and assignment updates',
  'Real-time circulars and announcements',
  'Exam timetable notifications',
  'Fee payment reminders',
  'Secure parent-teacher communication',
]

function WhyChoose() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className={`container ${styles.row}`}>
        <div className={styles.copy}>
          <h2 className={styles.heading}>Why Choose the SchoolMate Mobile App?</h2>
          <p className={styles.subtitle}>Real-Time Communication Made Simple</p>
          <p className={styles.lead}>
            The schoolmate mobile app enables schools to create better relationships with parents,
            teachers, and students through instant communication and real-time alerts.
          </p>
          <p className={styles.benefitsLabel}>Key Benefits</p>
          <ul className={styles.benefits}>
            {BENEFITS.map((benefit) => (
              <CheckItem key={benefit}>{benefit}</CheckItem>
            ))}
          </ul>
          <p className={styles.closing}>
            The SchoolMate app is an advanced student school management system that improves
            engagement while reducing manual administrative work.
          </p>
        </div>

        <div className={styles.visual}>
          <picture>
            <source media="(min-width: 1280px)" srcSet={visualDesktop} />
            <source media="(min-width: 768px)" srcSet={visualTablet} />
            <img src={visualMobile} alt="SchoolMate circulars screen with live push notifications" />
          </picture>
        </div>
      </div>
    </Reveal>
  )
}

export default WhyChoose
