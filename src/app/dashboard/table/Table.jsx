import { useState } from 'react'
import Image from 'next/image'
import styles from './Table.module.css'
import Modal from '@/components/modal/Modal'

const Table = ({ data, deleteItem, typeTable }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalData, setModalData] = useState(null)

  const openModalWithData = (data) => {
    setModalData(data)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalData(null)
  }

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
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className={styles.table_row}>
                {columns.map((col, colIndex) => (
                  <td key={colIndex} onClick={() => openModalWithData(row)}>
                    {renderCell(row[col], col)}
                  </td>
                ))}
                <td className={styles.table_options}>
                  <button>Editar</button>
                  <button
                    onClick={() =>
                      deleteItem(
                        row.id,
                        typeTable === 'products' ? 'product' : 'category'
                      )
                    }
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length}>No hay productos disponibles</td>
            </tr>
          )}
        </tbody>
      </table>

      <Modal isModalOpen={isModalOpen} onClose={closeModal}>
        {modalData && (
          <div className={styles.modal_content}>
            <h2>
              {typeTable === 'products'
                ? 'Detalles del Producto'
                : 'Detalles de la Categoría'}
            </h2>
            <ul>
              {Object.entries(modalData).map(([key, value]) => (
                <li key={key}>
                  {key !== 'images' && key !== 'id' && (
                    <p>
                      <strong>{key}:</strong> {value}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default Table
