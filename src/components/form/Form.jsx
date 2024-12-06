'use client'
import styles from './StyleForm.module.css'

const Form = ({ onSubmit, children }) => {
  if (!onSubmit) {
    onSubmit = function (e) {
      e.preventDefault()
      const formData = new FormData(e.target)
      const data = Object.fromEntries(formData)
      console.log(data)
    }
  }
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
    </form>
  )
}

export default Form
