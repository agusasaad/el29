'use client'
import styles from './Featured.module.css'
import Card from '../cardsComponent/card/Card'
import { useAppContext } from '@/context/AppContext'
import Link from 'next/link'

const Featured = ({ text, data }) => {
  const { products } = useAppContext()
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h3>{text}</h3>
      </div>

      <div className={styles.products_container}>
        <div className={styles.button_container}>
          <Link href={'/productos'}>Ver todos los productos</Link>
        </div>
        <div className={styles.cards}>
          {products.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Featured
