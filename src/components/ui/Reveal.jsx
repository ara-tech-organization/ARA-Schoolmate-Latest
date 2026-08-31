import useInView from '../../hooks/useInView'
import styles from './Reveal.module.css'

function Reveal({ as: Tag = 'div', className = '', delay = 0, style, children, ...rest }) {
  const [ref, inView] = useInView()

  const classes = [styles.reveal, inView ? styles.inView : '', className].filter(Boolean).join(' ')
  const mergedStyle = delay ? { ...style, '--reveal-delay': `${delay}ms` } : style

  return (
    <Tag ref={ref} className={classes} style={mergedStyle} {...rest}>
      {children}
    </Tag>
  )
}

export default Reveal
