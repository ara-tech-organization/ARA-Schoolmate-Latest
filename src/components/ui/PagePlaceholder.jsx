import styles from './PagePlaceholder.module.css'

function PagePlaceholder({ title }) {
  return (
    <section className={styles.placeholder}>
      <div className="container">
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.body}>This page&rsquo;s design hasn&rsquo;t been shared yet — send its Figma link to build it out.</p>
      </div>
    </section>
  )
}

export default PagePlaceholder
