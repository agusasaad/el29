'use client'
import Menu from '@/assets/icons/Menu'
import styles from './NavBar.module.css'
import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import Contact from '@/assets/icons/Contact'
import Link from 'next/link'
import ListNav from './ListNav'
import { useState } from 'react'

const NavBar = () => {
  const [showMenu, setSHowMenu] = useState(false)
  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <div className={styles.oferts}>
          <p>Aceite de Motor Total Quartz 9000 5W-40 - 20% de descuento</p>
        </div>
        <div className={styles.navbar}>
          <div className={styles.hamburguer}>
            <button
              aria-label='Abrir menu'
              onClick={() => setSHowMenu(!showMenu)}
            >
              <i>
                <Menu color='white' width='35px' height='35px' />
              </i>
              <span>CATEGORIAS</span>
            </button>
          </div>
          <Link href={'/'} className={styles.logo}>
            <Image src={logo} alt='logo' width={200} height={200} />
          </Link>
          <Link href={'/'} className={styles.contact}>
            <i>
              <Contact color='white' width='30px' height='30px' />
            </i>
            <span>CONTACTO</span>
          </Link>
        </div>
      </nav>
      <ListNav setSHowMenu={setSHowMenu} showMenu={showMenu} />
    </header>
  )
}

export default NavBar
