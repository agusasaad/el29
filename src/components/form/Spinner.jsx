import styles from './StyleForm.module.css'

const Spinner = ({ color }) => {
  return <span className={styles.loader} style={{ border: { color } }}></span>
}

export default Spinner
