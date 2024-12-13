import Spinner from './Spinner'
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
      {isLoading ? <Spinner color={'#fff'} /> : text}
    </button>
  )
}

export default ButtonSubmit
