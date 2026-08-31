import { useState } from 'react'
import plusIcon from '../../assets/icons/faq-plus.svg'
import Eyebrow from '../../components/ui/Eyebrow'
import Reveal from '../../components/ui/Reveal'
import styles from './FAQs.module.css'

const FAQS = [
  {
    question: 'What is schooling software?',
    answer:
      'Schooling software is a digital platform that enables schools to manage attendance, communication, academics, fees, and administration all from one system. SchoolMate is a modern schooling software that automates and updates daily school activities in real-time.',
  },
  {
    question: 'Why is SchoolMate the best student management system software?',
    answer:
      'SchoolMate is a complete student management system software that helps schools manage student records, attendance, exams, homework, and communication in an efficient manner with a centralized dashboard.',
  },
  {
    question: 'How does a school management system help schools?',
    answer:
      'School management system easily simplifies school procedures like student attendance, fee tracking, timetables, and communication. Paperless and productive. SchoolMate gives you cloud-based management tools.',
  },
  {
    question: 'What is the SchoolMate smartschool management system?',
    answer:
      'SchoolMate is a smart school management system because it combines academics, communication, ERP, attendance, and transport management in a single smart platform that can be accessed from web and mobile apps.',
  },
  {
    question: 'How does the student attendance management system work?',
    answer:
      'SchoolMate’s student attendance management system allows teachers to take attendance electronically and notify parents immediately. Real-time attendance records are also available to schools.',
  },
  {
    question: 'Is SchoolMate school management system software suitable for all types of schools?',
    answer:
      'Yes, SchoolMate is a complete education management system software that is designed for schools and institutions to manage academics, administration, attendance, and communication from one dashboard.',
  },
  {
    question: 'Does SchoolMate offer an online attendance system for students & teachers?',
    answer:
      'Yes, SchoolMate provides an online attendance system for students & teachers with instant attendance updates, class-wise reports, and mobile notifications for parents & staff.',
  },
  {
    question: 'Why is SchoolMate considered the best campus management software?',
    answer:
      'SchoolMate is the best campus management software that integrates attendance, communication, ERP, finance and transport management on one secure platform.',
  },
  {
    question: 'How does SchoolMate work as a student database management system software?',
    answer:
      'SchoolMate provides a secure, centralized cloud-based student database management system software for storing student database management system software, attendance, academic records and fee details.',
  },
  {
    question: 'Can I use SchoolMate as a student information management software?',
    answer:
      'Yes, SchoolMate is student information management software and student monitoring software in helping schools manage student data, also supports education administration software and class attendance management system features for complete operational control.',
  },
]

function FAQs() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <Reveal as="section" className={styles.section}>
      <div className="container">
        <Eyebrow align="center">Questions</Eyebrow>
        <h2 className={styles.heading}>Frequently Asked Questions (FAQs)</h2>

        <div className={styles.list}>
          {FAQS.map((faq, index) => {
            const isOpen = index === openIndex
            return (
              <div key={faq.question} className={styles.item}>
                <button
                  type="button"
                  className={styles.question}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{faq.question}</span>
                  <span className={[styles.indicator, isOpen ? styles.indicatorOpen : ''].join(' ')}>
                    <img src={plusIcon} alt="" width={18} height={18} />
                  </span>
                </button>
                {isOpen && <p className={styles.answer}>{faq.answer}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </Reveal>
  )
}

export default FAQs
