import checkIcon from '../../assets/icons/check-circle.svg'
import styles from './CheckItem.module.css'

function CheckItem({ children, className = '' }) {
  return (
    <li className={[styles.item, className].filter(Boolean).join(' ')}>
      <img src={checkIcon} alt="" loading="lazy" decoding="async" className={styles.icon} width={20} height={20} />
      <span>{children}</span>
    </li>
  )
}

export default CheckItem
