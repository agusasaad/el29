'use client'
import Image from 'next/image'
import styles from './Carrucel.module.css'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useAppContext } from '@/context/AppContext'
import sinBanner from '@/assets/images/sinBanner.svg'

const Carrucel = () => {
  const { banner } = useAppContext()

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
        {banner?.length > 0 ? (
          banner.map((image, index) => (
            <Image
              key={index}
              src={image.image_url}
              alt={image.name}
              width={2000}
              height={2000}
              priority
            />
          ))
        ) : (
          <div className={styles.container_spinner}>
            <span className={styles.loader}></span>
          </div>
        )}
      </Carousel>
    </section>
  )
}

export default Carrucel
