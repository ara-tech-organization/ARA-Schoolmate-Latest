import messageIcon from '../../assets/icons/tile-message.svg'
import bookIcon from '../../assets/icons/tile-book.svg'
import userCheckIcon from '../../assets/icons/tile-user-check.svg'
import panelCommunication from '../../assets/images/panel-communication.png'
import panelAcademics from '../../assets/images/panel-academics.png'
import panelAttendance from '../../assets/images/panel-attendance.png'
import Eyebrow from '../../components/ui/Eyebrow'
import CheckItem from '../../components/ui/CheckItem'
import Reveal from '../../components/ui/Reveal'
import Image from '../../components/ui/Image'
import styles from './WhatWeOffer.module.css'

const CAPABILITIES = [
  {
    icon: messageIcon,
    title: 'Communication & Engagement',
    items: [
      'Circulars and announcements',
      'Instant notifications',
      'Secure messaging',
      'Digital consent forms',
      'School news and updates',
    ],
    visual: panelCommunication,
    alt: 'Communication panel showing delivered circulars and consent forms',
  },
  {
    icon: bookIcon,
    title: 'Academic Management',
    items: [
      'Homework tracking',
      'Study material sharing',
      'Exam timetables',
      'Marks and result management',
      'Academic calendars',
    ],
    visual: panelAcademics,
    alt: 'Academics panel showing homework and exam timetable',
    reverse: true,
  },
  {
    icon: userCheckIcon,
    title: 'Attendance & Monitoring',
    items: [
      'Live attendance updates',
      'Staff attendance tracking',
      'Parent notifications',
      'Performance analytics',
      'Daily activity tracking',
    ],
    visual: panelAttendance,
    alt: 'Attendance panel showing a class mark-attendance grid',
  },
]

function WhatWeOffer() {
  return (
    <Reveal as="section" className={styles.section}>
      <div className="container">
        <Eyebrow>What we offer</Eyebrow>
        <h2 className={styles.heading}>What We Offer?</h2>

        <div className={styles.list}>
          {CAPABILITIES.map((cap) => (
            <div key={cap.title} className={[styles.capability, cap.reverse ? styles.reverse : ''].join(' ')}>
              <div className={styles.copy}>
                <span className={styles.iconTile}>
                  <img src={cap.icon} alt="" loading="lazy" decoding="async" width={24} height={24} />
                </span>
                <h3 className={styles.title}>{cap.title}</h3>
                <ul className={styles.items}>
                  {cap.items.map((label) => (
                    <CheckItem key={label}>{label}</CheckItem>
                  ))}
                </ul>
              </div>
              <div className={styles.visual}>
                <Image src={cap.visual} alt={cap.alt} loading="lazy" decoding="async" />
              </div>
            </div>
          ))}
        </div>

        <p className={styles.closing}>
          SchoolMate offers a complete online attendance system for students &amp; teachers by helping schools,
          colleges and institutions manage attendance, alerts, and communication in real time.
        </p>
      </div>
    </Reveal>
  )
}

export default WhatWeOffer
