import { useAppContext } from '@/context/AppContext'
import styles from './PaginationStyle.module.css'

const PaginationCategorie = () => {
  const {
    itemsPerPage,
    currentCategoryPage,
    nextCategoryPage,
    prevCategoryPage,
    totalCategories,
  } = useAppContext()
  return (
    <div className={styles.content}>
      <button
        className={styles.button_prev}
        onClick={prevCategoryPage}
        disabled={currentCategoryPage === 1}
      >
        Atras
      </button>
      <button
        className={styles.button_next}
        onClick={nextCategoryPage}
        disabled={currentCategoryPage * itemsPerPage >= totalCategories}
      >
        Siguiente
      </button>
    </div>
  )
}

export default PaginationCategorie
