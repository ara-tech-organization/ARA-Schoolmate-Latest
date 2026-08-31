import { useState } from 'react'
import plusIcon from '../../assets/icons/plus.svg'
import Reveal from '../../components/ui/Reveal'
import styles from './Faq.module.css'

const FAQS = [
  {
    question: 'What is the SchoolMate Mobile App?',
    answer:
      'SchoolMate Mobile App is a smart schooling software for schools, teachers, students, and parents to have attendance, communication, homework, fees & academics on a single platform.',
  },
  {
    question: 'How does the SchoolMate app work as a smart school management system?',
    answer:
      'SchoolMate is an intelligent school management system that provides Live attendance updates, instant notifications, access to timetable, fee management and easy communication between parents and school using mobile devices.',
  },
  {
    question: 'Does the SchoolMate app provide student attendance management system functionality?',
    answer:
      'Yes, there is a student attendance management system in the SchoolMate app where teachers can mark attendance digitally, and parents get immediate attendance alerts and updates.',
  },
  {
    question: 'How is SchoolMate better than traditional school management system apps?',
    answer:
      'SchoolMate is not like a traditional school management system app. It provides cloud-based access, unlimited app notifications, real-time communication, digital consent forms, homework tracking, and integrated ERP features, all in one dashboard.',
  },
  {
    question: 'Is SchoolMate a student school management system software for teachers and parents?',
    answer:
      'SchoolMate is a complete student school management system software. SchoolMate helps parents to track student activities. Teachers handle attendance, homework, exams, and communication efficiently through the mobile app.',
  },
]

function Faq() {
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <Reveal as="section" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Frequently Asked Questions</h2>

        <div className={styles.list}>
          {FAQS.map((item, index) => {
            const open = openIndex === index
            return (
              <div key={item.question} className={styles.item}>
                <button
                  type="button"
                  className={styles.row}
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                >
                  <span className={styles.question}>{item.question}</span>
                  <span className={`${styles.indicator} ${open ? styles.indicatorOpen : ''}`}>
                    <img src={plusIcon} alt="" loading="lazy" decoding="async" aria-hidden="true" />
                  </span>
                </button>
                <div className={`${styles.answerWrap} ${open ? styles.answerWrapOpen : ''}`}>
                  <div className={styles.answerInner}>
                    <p className={styles.answer}>{item.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Reveal>
  )
}

export default Faq
