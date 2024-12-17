'use client'
import { useAppContext } from '@/context/AppContext'
import { useState, useEffect } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Close from '@/assets/icons/Close'
import { supabase } from '@/supabase'

const Productos = () => {
  const { getAllCategorias, cart, addToCart, removeFromCart } = useAppContext()
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [showMenu, setShowMenu] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 5
  const [totalProducts, setTotalProducts] = useState(0)

  const fetchProducts = async () => {
    const start = (currentPage - 1) * productsPerPage
    const end = start + productsPerPage - 1

    let query = supabase.from('products').select('*', { count: 'exact' })

    if (selectedCategory) {
      query = query.eq('category', selectedCategory)
    }

    if (searchTerm) {
      query = query.ilike('name', `%${searchTerm}%`)
    }

    query = query.range(start, end)

    const { data, count, error } = await query
    if (error) {
      console.error('Error fetching products:', error)
    } else {
      setProducts(data)
      setTotalProducts(count || 0)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [selectedCategory, searchTerm, currentPage])

  const isInCart = (productId) =>
    cart.some((cartItem) => cartItem.id === productId)

  const toggleCartItem = (item) => {
    if (isInCart(item.id)) {
      removeFromCart(item.id)
    } else {
      addToCart(item)
    }
  }

  const totalPages = Math.ceil(totalProducts / productsPerPage)

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Botón para mostrar categorías */}
        <button
          className={styles.categorias_button}
          onClick={() => setShowMenu(!showMenu)}
        >
          Ver Categorías
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
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setCurrentPage(1)
              }}
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
            {getAllCategorias?.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedCategory(item.name)
                  setCurrentPage(1)
                  setShowMenu(false)
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Tarjetas de productos */}
        <div className={styles.container_cards}>
          <div className={styles.cards}>
            {products.map((item, index) => (
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
                    <button
                      onClick={() => toggleCartItem(item)}
                      style={
                        isInCart(item.id)
                          ? { color: 'var(--red)' }
                          : { color: 'green' }
                      }
                    >
                      {isInCart(item.id)
                        ? 'Eliminar del carrito'
                        : 'Agregar al carrito'}
                    </button>
                    <Link href={`/detail/${item.id}`}>
                      <button>Ver detalles</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Paginación */}
          <div className={styles.pagination}>
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Anterior
            </button>
            <span>
              Página {currentPage} de {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productos
