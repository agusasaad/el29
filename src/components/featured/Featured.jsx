import { destacados } from './data'
import styles from './Featured.module.css'
import Card from '../cardsComponent/card/Card'

const Featured = () => {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h3>¡Comprá nuestros productos destacados y recibilos hoy mismo!</h3>
      </div>

      <div className={styles.products_container}>
        <div className={styles.button_container}>
          <button>Ver todos los productos</button>
        </div>
        <div className={styles.cards}>
          {destacados.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Featured
