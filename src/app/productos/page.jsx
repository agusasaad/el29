'use client'
import { useAppContext } from '@/context/AppContext'
import { useState } from 'react'
import styles from './page.module.css'
import PaginationProduct from '@/components/pagination/PaginationProduct'
import Image from 'next/image'
import Link from 'next/link'
import Close from '@/assets/icons/Close'

const Productos = () => {
  const { categories, products } = useAppContext()
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [showMenu, setShowMenu] = useState(false)
  const [searchTerm, setSearchTerm] = useState('') // Estado para el filtro por nombre

  // Filtra los productos por categoría y nombre
  const filteredProducts = products.filter((product) => {
    const isCategoryMatch = selectedCategory
      ? product.category === selectedCategory
      : true
    const isSearchMatch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) // Filtra por nombre
    return isCategoryMatch && isSearchMatch
  })

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <button
          className={styles.categorias_button}
          onClick={() => setShowMenu(!showMenu)}
        >
          Ver Categorias
        </button>
        <div
          className={`${styles.button_control} ${showMenu ? styles.show : ''}`}
        >
          <div className={styles.close}>
            <button onClick={() => setShowMenu(false)}>
              <Close />
            </button>
          </div>
          <div className={styles.search}>
            <input
              type='text'
              placeholder='Buscar por nombre'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <h2>Categorías</h2>
          <div className={styles.buttons}>
            <button
              onClick={() => {
                setSelectedCategory(null)
                setShowMenu(false)
              }}
            >
              Todas las categorías
            </button>
            {categories.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedCategory(item.name)
                  setShowMenu(false)
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.container_cards}>
          <div className={styles.cards}>
            {filteredProducts.map((item, index) => (
              <div key={index} className={styles.card_item}>
                <Link
                  href={`/detail/${item.id}`}
                  className={styles.container_img}
                >
                  <Image
                    src={item.images[0]}
                    alt={item.name}
                    width={100}
                    height={100}
                  />
                </Link>
                <div className={styles.title_cart}>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span>${item.price}</span>
                  <div className={styles.button}>
                    <button>Agregar al carrito</button>
                    <Link href={`/detail/${item.id}`}>
                      <button>Ver detalles</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <PaginationProduct />
        </div>
      </div>
    </div>
  )
}

export default Productos
