import { useState, useEffect } from 'react'
import Plus from '@/assets/icons/Plus'
import styles from './page.module.css'

const ButtonControl = ({ handleModal, setTypeTable }) => {
  const [selectedButton, setSelectedButton] = useState('products') // Establece 'products' como valor inicial

  useEffect(() => {
    setTypeTable('products') // Al cargar el componente, selecciona 'products' por defecto
  }, [setTypeTable])

  const handleButtonClick = (type) => {
    setSelectedButton(type) // Actualiza el botón seleccionado
    setTypeTable(type) // Cambia el tipo de tabla
  }

  return (
    <div className={styles.button_control}>
      <div className={styles.button_products}>
        <button
          onClick={() => handleButtonClick('products')}
          className={selectedButton === 'products' ? styles.selected : ''}
        >
          Productos
        </button>
        <button
          onClick={() => handleButtonClick('categories')}
          className={selectedButton === 'categories' ? styles.selected : ''}
        >
          Categorias
        </button>
      </div>
      <div className={styles.button_create}>
        <button onClick={() => handleModal('product')}>
          <i>
            <Plus color='var(--red)' />
          </i>
          <span>Crear producto</span>
        </button>

        <button onClick={() => handleModal('category')}>
          <i>
            <Plus color='var(--red)' />
          </i>
          <span>Crear categoria</span>
        </button>
      </div>
    </div>
  )
}

export default ButtonControl
