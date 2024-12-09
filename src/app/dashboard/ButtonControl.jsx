import Plus from '@/assets/icons/Plus'
import styles from './page.module.css'
const ButtonControl = ({ handleModal, setTypeTable }) => {
  return (
    <div className={styles.button_control}>
      <div className={styles.button_products}>
        <button onClick={() => setTypeTable('products')}>Productos</button>
        <button onClick={() => setTypeTable('categories')}>Categorias</button>
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
