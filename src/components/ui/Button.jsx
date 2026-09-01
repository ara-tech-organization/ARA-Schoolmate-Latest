import { Link } from 'react-router-dom'
import styles from './Button.module.css'

function Button({
  children,
  variant = 'primary',
  size = 'lg',
  onDark = false,
  as = 'button',
  href,
  to,
  disabled = false,
  className = '',
  ...rest
}) {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    onDark ? styles.onDark : '',
    disabled ? styles.disabled : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (!disabled && to) {
    return (
      <Link to={to} className={classes} {...rest}>
        <span className={styles.label}>{children}</span>
      </Link>
    )
  }

  if (!disabled && (as === 'a' || href)) {
    return (
      <a href={href} className={classes} {...rest}>
        <span className={styles.label}>{children}</span>
      </a>
    )
  }

  return (
    <button type="button" className={classes} disabled={disabled} {...rest}>
      <span className={styles.label}>{children}</span>
    </button>
  )
}

export default Button
