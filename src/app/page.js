import NavBar from '@/components/navbar/NavBar'
import styles from './page.module.css'
import Carrucel from '@/components/carrucel/Carrucel'

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <Carrucel />
      </main>
    </div>
  )
}
