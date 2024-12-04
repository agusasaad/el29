'use client'
import Image from 'next/image'
import styles from './Carrucel.module.css'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import one from '@/assets/images/carrucel/image_1.jpg'
import two from '@/assets/images/carrucel/image_2.jpg'
import three from '@/assets/images/carrucel/image_3.jpg'

const Carrucel = () => {
  const images = [one, two, three]

  const carouselSettings = {
    autoPlay: true,
    showArrows: false,
    showThumbs: false,
    showStatus: false,
    infiniteLoop: true,
    showIndicators: true,
    interval: 4000,
  }
  return (
    <section className={styles.container}>
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
    </section>
  )
}

export default Carrucel
