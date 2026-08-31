import useInView from '../../hooks/useInView'
import styles from './Reveal.module.css'

function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, inView] = useInView()

  const classes = [styles.reveal, inView ? styles.inView : '', className].filter(Boolean).join(' ')

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  )
}

export default Reveal
