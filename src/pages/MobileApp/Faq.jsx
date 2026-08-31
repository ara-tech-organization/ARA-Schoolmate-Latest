import { useState } from 'react'
import plusIcon from '../../assets/icons/plus.svg'
import minusIcon from '../../assets/icons/minus.svg'
import Reveal from '../../components/ui/Reveal'
import styles from './Faq.module.css'

const FAQS = [
  {
    question: 'What is the SchoolMate Mobile App?',
    answer:
      'SchoolMate Mobile App is a powerful and easy-to-use mobile solution for administrators, teachers, students, and parents. It brings communication, attendance, homework, fees, and academic performance into a single secure dashboard.',
  },
  {
    question: 'How does the SchoolMate app work as a smart school management system?',
    answer:
      'It digitizes core school operations — attendance, homework, fee collection, timetables, and circulars — so schools can manage daily activities from one dashboard while keeping parents and students updated in real time.',
  },
  {
    question: 'Does the SchoolMate app provide student attendance management system functionality?',
    answer:
      'Yes. Teachers can mark attendance digitally and parents receive instant alerts the moment attendance is recorded, along with a full monthly history inside the app.',
  },
  {
    question: 'How is SchoolMate better than traditional school management system apps?',
    answer:
      'SchoolMate combines communication, attendance, fees, homework, and timetables in one app, with unlimited real-time notifications, a simple dashboard, and dedicated views for parents, teachers, and administrators.',
  },
  {
    question: 'Is SchoolMate a student school management system software for teachers and parents?',
    answer:
      'Yes — SchoolMate is built for every stakeholder in a school. Parents track attendance and fees, teachers manage homework and records, and administrators oversee communication and reporting, all from the same app.',
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
                    <img src={open ? minusIcon : plusIcon} alt="" aria-hidden="true" />
                  </span>
                </button>
                {open && <p className={styles.answer}>{item.answer}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </Reveal>
  )
}

export default Faq
