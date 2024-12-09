import styles from './Table.module.css'

const Table = ({ data }) => {
  const columns = data.length > 0 ? Object.keys(data[0]) : []

  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <td key={colIndex}>{row[col]}</td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={columns.length}>No hay productos disponbles</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default Table
