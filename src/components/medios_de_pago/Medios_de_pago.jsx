import CreditCard from '@/assets/icons/CreditCard'
import styles from './Medios_de_pago.module.css'
import BankTranfer from '@/assets/icons/BankTranfer'
import Money from '@/assets/icons/Money'
import CarrucelPago from './carrucel_metodo_de_pago/CarrucelPago'

const Medios_de_pago = () => {
  return (
    <section className={styles.container}>
      <div className={styles.containerDesktop}>
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
      </div>
      <CarrucelPago />
    </section>
  )
}

export default Medios_de_pago
