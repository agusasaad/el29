import Image from 'next/image'
import styles from './Table.module.css'

const Table = ({ data }) => {
  const columns = data.length > 0 ? Object.keys(data[0]) : []

  const renderCell = (value, column) => {
    if (
      column === 'images' &&
      Array.isArray(value) &&
      value[0]?.endsWith('.webp')
    ) {
      return (
        <Image
          src={value[0]}
          alt='Product Image'
          width={50}
          height={50}
          style={{ objectFit: 'contain' }}
        />
      )
    }
    return value
  }

  return (
    <div className={styles.table_wrapper}>
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
                  <td key={colIndex}>{renderCell(row[col], col)}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length}>No hay productos disponibles</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Table
