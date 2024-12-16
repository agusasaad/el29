'use client'
import styles from './Featured.module.css'
import Card from '../cardsComponent/card/Card'
import { useAppContext } from '@/context/AppContext'
import Link from 'next/link'
import ArrowLeft from '@/assets/icons/ArrowLeft'
import ArrowRight from '@/assets/icons/ArrowRight'
import { useRef } from 'react'

const Featured = ({ text, data }) => {
  const { products } = useAppContext()
  const carrucelRef = useRef(null)
  const handleleftClick = () => {
    carrucelRef.current.scrollLeft -= 355
  }

  const handleRightClick = () => {
    carrucelRef.current.scrollLeft += 355
  }
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h3>{text}</h3>
      </div>

      <div className={styles.products_container}>
        <div className={styles.button_container}>
          <Link href={'/productos'}>Ver todos los productos</Link>
        </div>
        <div className={styles.cards} ref={carrucelRef}>
          <button
            className={`${styles.arrow} ${styles.arrow_left}`}
            onClick={handleleftClick}
          >
            <i>
              <ArrowLeft width='20px' height='20px' color='#515151' />
            </i>
          </button>
          {products.map((item, index) => (
            <Card key={index} item={item} />
          ))}
          <button
            className={`${styles.arrow} ${styles.arrow_right}`}
            onClick={handleRightClick}
          >
            <i>
              <ArrowRight width='20px' height='20px' color='#515151' />
            </i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Featured
