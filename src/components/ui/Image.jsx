import { useEffect, useRef, useState } from 'react'
import styles from './Image.module.css'

function Image({ className = '', onLoad, ...rest }) {
  const ref = useRef(null)
  const [loaded, setLoaded] = useState(false)

  // If the browser already had the image cached, the load event may fire
  // (or may have already fired) before this effect attaches — check
  // img.complete directly so cached images don't stay stuck invisible.
  useEffect(() => {
    if (ref.current?.complete) setLoaded(true)
  }, [])

  return (
    <img
      ref={ref}
      className={[styles.image, loaded ? styles.loaded : '', className].filter(Boolean).join(' ')}
      onLoad={(e) => {
        setLoaded(true)
        onLoad?.(e)
      }}
      {...rest}
    />
  )
}

export default Image
