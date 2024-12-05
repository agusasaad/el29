import Image from 'next/image'
import { destacados } from './data'
import styles from './Featured.module.css'
import Link from 'next/link'

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
            <Link
              href={`/detail/${item.id}`}
              key={index}
              className={styles.product}
            >
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={500}
              />
              <div className={styles.info}>
                <span>${item.price}</span>
                <p>{item.name}</p>
                <button>Ver producto</button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Featured
