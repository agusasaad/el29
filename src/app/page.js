import styles from './page.module.css'
import Carrucel from '@/components/carrucel/Carrucel'
import Medios_de_pago from '@/components/medios_de_pago/Medios_de_pago'
import Featured from '@/components/featured/Featured'
import Banner from '@/components/banner/Banner'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Carrucel />
        <Medios_de_pago />
        <Featured
          text={'¡Comprá nuestros productos destacados y recibilos hoy mismo!'}
        />
        <Banner />
        <Featured text={'Productos recomendados'} />
        <Footer />
      </main>
    </div>
  )
}
