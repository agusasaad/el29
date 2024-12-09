import styles from './StyleForm.module.css'

const Select = ({
  id,
  name,
  options,
  disabled,
  onChange,
  defaultValue,
  title,
  optionKey,
  data,
  required = false,
}) => {
  return (
    <label htmlFor={id} className={styles.label}>
      {title}
      <select
        className={styles.select}
        name={name}
        id={id}
        disabled={disabled}
        onChange={onChange}
        defaultValue={defaultValue}
        required={required}
      >
        <option disabled value={''}>
          Elige una opción
        </option>
        {options.map((option) => (
          <option key={option[optionKey]} value={option[optionKey]}>
            {option[data]}
          </option>
        ))}
      </select>
    </label>
  )
}

export default Select
