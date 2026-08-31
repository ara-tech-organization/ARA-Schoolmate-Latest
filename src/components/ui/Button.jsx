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
        {children}
      </Link>
    )
  }

  if (!disabled && (as === 'a' || href)) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} disabled={disabled} {...rest}>
      {children}
    </button>
  )
}

export default Button
