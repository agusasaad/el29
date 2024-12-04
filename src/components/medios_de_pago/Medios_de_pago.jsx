import styles from './Medios_de_pago.module.css'
import CarrucelPago from './carrucel_metodo_de_pago/CarrucelPago'
import { data } from './data'

const Medios_de_pago = () => {
  return (
    <section className={styles.container}>
      <div className={styles.containerDesktop}>
        {data.map((item, index) => (
          <div className={styles.metodo} key={index}>
            <i>{item.icon}</i>
            <div className={styles.text}>
              <h3>{item.title}</h3>
              <p>{item.offert}</p>
            </div>
          </div>
        ))}
      </div>
      <CarrucelPago />
    </section>
  )
}

export default Medios_de_pago
