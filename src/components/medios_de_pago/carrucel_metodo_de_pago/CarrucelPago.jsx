'use client'
import BankTranfer from '@/assets/icons/BankTranfer'
import CreditCard from '@/assets/icons/CreditCard'
import Money from '@/assets/icons/Money'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styles from './CarrucelPago.module.css'

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
        <div className={styles.metodo}>
          <i>
            <CreditCard color='var(--red)' />
          </i>
          <div className={styles.text}>
            <h3>Pagá en cuotas</h3>
            <p>Hasta X cuotas sin interés</p>
          </div>
        </div>

        <div className={styles.metodo}>
          <i>
            <BankTranfer color='var(--red)' />
          </i>
          <div className={styles.text}>
            <h3>Transferencia</h3>
            <p>15% descuento pagando con transferencia</p>
          </div>
        </div>

        <div className={styles.metodo}>
          <i>
            <Money color='var(--red)' />
          </i>
          <div className={styles.text}>
            <h3>Efectivo</h3>
            <p>20% descuento pagando en efectivo</p>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default CarrucelPago
