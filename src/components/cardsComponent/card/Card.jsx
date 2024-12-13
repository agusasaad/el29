'use client'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Card.module.css'
import { useAppContext } from '@/context/AppContext'

const Card = ({ item }) => {
  const { cart, addToCart, removeFromCart } = useAppContext()

  const isInCart = cart.some((cartItem) => cartItem.id === item.id)

  const handleToggleCart = () => {
    if (isInCart) {
      removeFromCart(item.id)
    } else {
      addToCart(item)
    }
  }

  return (
    <div className={styles.product}>
      <Link href={`/detail/${item.id}`} className={styles.container_img}>
        <Image src={item.images[0]} alt={item.name} width={500} height={500} />
      </Link>
      <div className={styles.info}>
        <span>${item.price}</span>
        <p>{item.name}</p>
        <button
          onClick={handleToggleCart}
          style={isInCart ? { color: 'var(--red)' } : { color: 'black' }}
        >
          {isInCart ? 'Eliminar del carrito' : 'Agregar al carrito'}
        </button>
      </div>
    </div>
  )
}

export default Card
