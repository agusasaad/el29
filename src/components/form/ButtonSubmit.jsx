import styles from './StyleForm.module.css'

const ButtonSubmit = ({
  type,
  text,
  onClick,
  disabled,
  backgroundColor,
  color,
  isLoading,
}) => {
  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        color: color,
      }}
      type={type}
      className={styles.button}
      aria-label='Submit'
      onClick={onClick}
      disabled={disabled}
    >
      {isLoading ? <span className={styles.loader}></span> : text}
    </button>
  )
}

export default ButtonSubmit
