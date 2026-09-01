import CheckItem from '../../components/ui/CheckItem'
import Reveal from '../../components/ui/Reveal'
import WhyChooseVisual from './WhyChooseVisual'
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
          <Reveal as="h2" className={styles.heading} direction="down">
            Why Choose the SchoolMate Mobile App?
          </Reveal>
          <Reveal as="p" className={styles.subtitle} direction="up" delay={60}>
            Real-Time Communication Made Simple
          </Reveal>
          <Reveal as="p" className={styles.lead} direction="up" delay={120}>
            The schoolmate mobile app enables schools to create better relationships with parents,
            teachers, and students through instant communication and real-time alerts.
          </Reveal>
          <Reveal as="p" className={styles.benefitsLabel} direction="right" delay={180}>
            Key Benefits
          </Reveal>
          <Reveal as="ul" className={styles.benefits} direction="up" delay={220}>
            {BENEFITS.map((benefit) => (
              <CheckItem key={benefit}>{benefit}</CheckItem>
            ))}
          </Reveal>
          <Reveal as="p" className={styles.closing} direction="left" delay={280}>
            The SchoolMate app is an advanced student school management system that improves
            engagement while reducing manual administrative work.
          </Reveal>
        </div>

        <Reveal as="div" className={styles.visual} direction="left" delay={120}>
          <WhyChooseVisual />
        </Reveal>
      </div>
    </Reveal>
  )
}

export default WhyChoose
