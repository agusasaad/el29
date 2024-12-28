import { useState } from 'react'
import Image from 'next/image'
import styles from './Table.module.css'
import Modal from '@/components/modal/Modal'

const Table = ({ data, deleteItem, typeTable, handleModal }) => {
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
    if (column === 'images' || column === 'image_url') {
      if (Array.isArray(value)) {
        return (
          <Image
            src={value[0]}
            alt='Image'
            width={50}
            height={50}
            style={{ objectFit: 'contain' }}
          />
        )
      } else if (typeof value === 'string') {
        return (
          <Image
            src={value}
            alt='Image'
            width={50}
            height={50}
            style={{ objectFit: 'contain' }}
          />
        )
      }
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
                  <button
                    onClick={() =>
                      handleModal(
                        typeTable === 'products'
                          ? 'product'
                          : typeTable === 'categories'
                          ? 'category'
                          : 'banner',
                        row
                      )
                    }
                  >
                    Editar
                  </button>
                  <button
                    onClick={() =>
                      deleteItem(
                        row.id,
                        typeTable === 'products'
                          ? 'product'
                          : typeTable === 'categories'
                          ? 'category'
                          : 'banner'
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
              <td colSpan={columns.length}>No hay datos disponibles</td>
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
                : typeTable === 'categories'
                ? 'Detalles de la Categoría'
                : 'Detalles del Banner'}
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
