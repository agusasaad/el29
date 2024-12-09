'use client'
import { useState } from 'react'
import styles from './Featured.module.css'
import Card from '../cardsComponent/card/Card'
import { supabase } from '@/supabase'
import { useEffect } from 'react'

const Featured = () => {
  const [productos, setProductos] = useState([])
  const getProductos = async () => {
    try {
      let { data: productos, error } = await supabase
        .from('products')
        .select('*')

      if (error) {
        console.error('Error al obtener productos:', error)
        return null
      }

      console.log(productos)

      setProductos(productos)
    } catch (error) {
      console.error('Error al obtener productos:', error)
    }
  }

  useEffect(() => {
    getProductos()
  }, [])

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
          {productos.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Featured
