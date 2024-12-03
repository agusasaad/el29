'use client'
import Image from 'next/image'
import styles from './Carrucel.module.css'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import one from '@/assets/images/carrucel/auto.webp'
import two from '@/assets/images/carrucel/filtro_aceite.webp'
import three from '@/assets/images/carrucel/porche.webp'
import four from '@/assets/images/carrucel/lamparas.webp'

const Carrucel = () => {
  const images = [one, two, three, four]

  const carouselSettings = {
    autoPlay: true,
    showArrows: true,
    showThumbs: false,
    showStatus: false,
    infiniteLoop: true,
    showIndicators: true,
    interval: 4000,
  }
  return (
    <div className={styles.container}>
      <Carousel {...carouselSettings} className={styles.carousel}>
        {images?.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={image}
            width={2000}
            height={2000}
          ></Image>
        ))}
      </Carousel>
    </div>
  )
}

export default Carrucel
