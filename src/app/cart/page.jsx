'use client'
import { useAppContext } from '@/context/AppContext'
import styles from './page.module.css'
import Image from 'next/image'
import Whatsapp from '@/assets/icons/Whatsapp'
import Link from 'next/link'
import CartEmpty from '@/assets/icons/CartEmpty'

const Cart = () => {
  const { cart, removeFromCart } = useAppContext()
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {cart.length === 0 ? (
          <div className={styles.content_empty}>
            <i>
              <CartEmpty width={'150px'} height={'auto'} />
            </i>
            <div className={styles.text}>
              <span>
                ¡Aún no hay productos en tu carrito! Comienza a agregar tus
                favoritos ahora.
              </span>

              <button>Ver productos</button>
            </div>
          </div>
        ) : (
          <div className={styles.content_cart}>
            <div className={styles.content_cart_item}>
              {cart.map((item, index) => (
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
                    <button onClick={() => removeFromCart(item.id)}>
                      Eliminar del carrito
                    </button>
                  </div>

                  <div className={styles.price_item}>
                    <span>${item.price}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.content_cart_total}>
              <h4>Resumen de la compra</h4>
              <div className={styles.infoCompra}>
                <div className={styles.total_product}>
                  <p>Productos ({cart.length})</p>
                  <span>
                    ${cart.reduce((acc, item) => acc + item.price, 0)}
                  </span>
                </div>
                <div className={styles.total}>
                  <h5>Total</h5>
                  <span>
                    ${cart.reduce((acc, item) => acc + item.price, 0)}
                  </span>
                </div>
                <div className={styles.buttonWhatsapp}>
                  <button>
                    <i>
                      <Whatsapp width='30px' height='30px' />
                    </i>
                    <span>Hacer mi pedido</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
