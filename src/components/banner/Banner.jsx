import styles from './Banner.module.css'

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>¡Encuentra lo que necesitas!</p>
          <button>Ver productos</button>
        </div>
      </div>
    </div>
  )
}

export default Banner
