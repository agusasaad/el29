import NavBar from '@/components/navbar/NavBar'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}></main>
    </div>
  )
}
