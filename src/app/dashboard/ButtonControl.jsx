import { useState, useEffect } from 'react'
import Plus from '@/assets/icons/Plus'
import styles from './page.module.css'

const ButtonControl = ({
  handleModal,
  setTypeTable,
  searchText,
  setSearchText,
}) => {
  const [selectedButton, setSelectedButton] = useState('products')

  useEffect(() => {
    setTypeTable('products')
  }, [setTypeTable])

  const handleButtonClick = (type) => {
    setSelectedButton(type)
    setTypeTable(type)
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
        <button
          onClick={() => handleButtonClick('banner')}
          className={selectedButton === 'banner' ? styles.selected : ''}
        >
          Banners
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
        <button onClick={() => handleModal('banner')}>
          <i>
            <Plus color='var(--red)' />
          </i>
          <span>Cargar banner</span>
        </button>
        <input
          type='text'
          placeholder='Buscar por nombre...'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className={styles.searchInput}
        />
      </div>
    </div>
  )
}

export default ButtonControl
