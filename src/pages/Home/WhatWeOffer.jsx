import messageIcon from '../../assets/icons/tile-message.svg'
import bookIcon from '../../assets/icons/tile-book.svg'
import userCheckIcon from '../../assets/icons/tile-user-check.svg'
import Eyebrow from '../../components/ui/Eyebrow'
import CheckItem from '../../components/ui/CheckItem'
import Reveal from '../../components/ui/Reveal'
import CommunicationPanel from './CommunicationPanel'
import AcademicsPanel from './AcademicsPanel'
import AttendancePanel from './AttendancePanel'
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
    visual: <CommunicationPanel />,
    frameClass: 'frameCommunication',
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
    visual: <AcademicsPanel />,
    frameClass: 'frameAcademics',
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
    visual: <AttendancePanel />,
    frameClass: 'frameAttendance',
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
              <Reveal as="div" className={styles.copy} direction={cap.reverse ? 'left' : 'right'}>
                <span className={styles.iconTile}>
                  <img src={cap.icon} alt="" loading="lazy" decoding="async" width={24} height={24} />
                </span>
                <h3 className={styles.title}>{cap.title}</h3>
                <ul className={styles.items}>
                  {cap.items.map((label) => (
                    <CheckItem key={label}>{label}</CheckItem>
                  ))}
                </ul>
              </Reveal>
              <Reveal as="div" className={styles.visual} direction={cap.reverse ? 'right' : 'left'} delay={120}>
                <div className={[styles.visualFrame, styles[cap.frameClass]].join(' ')}>{cap.visual}</div>
              </Reveal>
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
