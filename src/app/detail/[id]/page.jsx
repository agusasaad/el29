'use client'
import styles from './page.module.css'
import { useParams } from 'next/navigation'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Link from 'next/link'
import Whatsapp from '@/assets/icons/Whatsapp'
import MiniCard from '@/components/cardsComponent/miniCard/MiniCard'
import { useAppContext } from '@/context/AppContext'
import ShoppingCard from '@/assets/icons/ShoppingCard'
const Detail = () => {
  const { id } = useParams()
  const productId = Number(id)
  const { getAllProducts, cart, addToCart, removeFromCart } = useAppContext()

  const detail = getAllProducts?.find((product) => product.id === productId)
  const isInCart = cart.some((cartItem) => cartItem.id === productId)

  const handleToggleCart = () => {
    if (isInCart) {
      removeFromCart(productId)
    } else {
      addToCart(detail)
    }
  }

  const carouselSettings = {
    autoPlay: true,
    showArrows: false,
    showThumbs: true,
    showStatus: false,
    infiniteLoop: true,
    showIndicators: true,
    interval: 4000,
    thumbWidth: 60,
  }

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <Link href={'/'}>Volver al menu principal</Link>
      </div>

      <div className={styles.detail_container}>
        <div className={styles.container_carrucel}>
          <Carousel {...carouselSettings} className={styles.carrucel}>
            {detail?.images?.map((image, index) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className={styles.img}
                key={index}
                src={image}
                alt={image}
                width={400}
                height={400}
                loading='lazy'
              ></img>
            ))}
          </Carousel>
        </div>

        <div className={styles.info}>
          <span>{detail?.category}</span>
          <h2>{detail?.name}</h2>
          <h3>${detail?.price}</h3>
          <p>{detail?.description}</p>
          <div className={styles.buttonWhatsapp}>
            <button onClick={handleToggleCart}>
              {isInCart ? (
                ''
              ) : (
                <i>
                  <ShoppingCard width='25px' height='25px' color='var(--red)' />
                </i>
              )}
              {isInCart ? (
                <span style={{ color: 'var(--red)' }}>
                  Eliminar del carrito
                </span>
              ) : (
                <span>Agregar al carrito</span>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={styles.similars}>
        <div className={styles.title}>
          <h2>Productos similares</h2>
        </div>
        <div className={styles.similars_container}>
          {getAllProducts?.map((item, index) => (
            <MiniCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Detail
