import NavBar from '@/components/navbar/NavBar'
import styles from './page.module.css'
import Carrucel from '@/components/carrucel/Carrucel'
import Medios_de_pago from '@/components/medios_de_pago/Medios_de_pago'
import Featured from '@/components/featured/Featured'

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <Carrucel />
        <Medios_de_pago />
        <Featured />
      </main>
    </div>
  )
}
