'use client'
import { useAppContext } from '@/context/AppContext'
import { useState } from 'react'
import styles from './page.module.css'
import Card from '@/components/cardsComponent/card/Card'

const Productos = () => {
  const { categories, products } = useAppContext()
  const [selectedCategory, setSelectedCategory] = useState(null)

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.button_control}>
          <h2>Categorías</h2>
          <div className={styles.buttons}>
            <button onClick={() => setSelectedCategory(null)}>
              Todas las categorías
            </button>
            {categories.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedCategory(item.name)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.cards}>
          {filteredProducts.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Productos
