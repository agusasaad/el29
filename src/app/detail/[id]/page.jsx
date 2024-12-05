'use client'
import styles from './page.module.css'
import { useParams } from 'next/navigation'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { destacados } from '@/components/featured/data'
import Link from 'next/link'
import Whatsapp from '@/assets/icons/Whatsapp'
import MiniCard from '@/components/cardsComponent/miniCard/MiniCard'
const Detail = () => {
  const { id } = useParams()
  const detail = destacados.find((product) => product.id === id)

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
            {detail?.carrucel?.map((image, index) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className={styles.img}
                key={index}
                src={image.src}
                alt={image}
                width={1000}
                height={1000}
              ></img>
            ))}
          </Carousel>
        </div>

        <div className={styles.info}>
          <span>{detail?.category}</span>
          <h2>{detail?.name}</h2>
          <h3>${detail?.price}</h3>
          <p>{detail?.description}</p>
          <ul className={styles.productHighlights}>
            {detail?.productHighlights?.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
          <div className={styles.buttonWhatsapp}>
            <button>
              <i>
                <Whatsapp width='35px' height='35px' />
              </i>
              <span>Hacer mi pedido</span>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.similars}>
        <div className={styles.title}>
          <h2>Productos similares</h2>
        </div>
        <div className={styles.similars_container}>
          {destacados.map((item, index) => (
            <MiniCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Detail
