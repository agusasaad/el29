'use client'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styles from './CarrucelPago.module.css'
import { data } from '../data'

const CarrucelPago = () => {
  const carouselSettings = {
    autoPlay: true,
    showArrows: false,
    showThumbs: false,
    showStatus: false,
    infiniteLoop: true,
    showIndicators: false,
    interval: 4000,
  }

  return (
    <div className={styles.container}>
      <Carousel {...carouselSettings} className={styles.carousel}>
        {data.map((item, index) => (
          <div className={styles.metodo} key={index}>
            <i>{item.icon}</i>
            <div className={styles.text}>
              <h3>{item.title}</h3>
              <p>{item.offert}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default CarrucelPago
