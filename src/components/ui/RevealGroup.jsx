import useInView from '../../hooks/useInView'
import styles from './RevealGroup.module.css'

function RevealGroup({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, inView] = useInView()

  const classes = [styles.group, inView ? styles.inView : '', className].filter(Boolean).join(' ')

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  )
}

export default RevealGroup
