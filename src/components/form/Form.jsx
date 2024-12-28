'use client'
import styles from './StyleForm.module.css'

const Form = ({ onSubmit, children, maxWidth }) => {
  if (!onSubmit) {
    onSubmit = function (e) {
      e.preventDefault()
      const formData = new FormData(e.target)
      const data = Object.fromEntries(formData)
      console.log(data)
    }
  }
  return (
    <form
      className={styles.form}
      onSubmit={onSubmit}
      style={{ maxWidth: maxWidth }}
    >
      {children}
    </form>
  )
}

export default Form
