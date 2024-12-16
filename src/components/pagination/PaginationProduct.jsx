import { useAppContext } from '@/context/AppContext'
import styles from './PaginationStyle.module.css'

const PaginationProduct = () => {
  const { nextPage, prevPage, currentPage, totalProducts, itemsPerPage } =
    useAppContext()
  return (
    <div className={styles.content}>
      <button
        className={styles.button_prev}
        onClick={prevPage}
        disabled={currentPage === 1}
      >
        Atras
      </button>
      <button
        className={styles.button_next}
        onClick={nextPage}
        disabled={currentPage * itemsPerPage >= totalProducts}
      >
        Siguiente
      </button>
    </div>
  )
}

export default PaginationProduct
