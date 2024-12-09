import styles from './StyleForm.module.css'

const TextArea = ({
  placeholder,
  onChange,
  required,
  name,
  id,
  defaultValue,
}) => {
  return (
    <label htmlFor={id} className={styles.label}>
      <textarea
        name={name}
        id={id}
        className={styles.textArea}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
        required={required}
      />
    </label>
  )
}

export default TextArea
