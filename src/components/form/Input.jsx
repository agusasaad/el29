import styles from './StyleForm.module.css'

const Input = ({
  type,
  title,
  placeholder,
  defaultValue,
  onChange,
  required,
  name,
  id,
  readOnly,
  disabled,
  list,
  minDate,
}) => {
  return (
    <label htmlFor={id} className={styles.label}>
      {title}
      <input
        name={name}
        id={id}
        list={list}
        disabled={disabled}
        readOnly={readOnly}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        maxLength={100}
        min={minDate}
        defaultValue={defaultValue}
        onChange={onChange}
        required={required}
      />
    </label>
  )
}

export default Input
