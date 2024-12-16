'use client'
import Link from 'next/link'
import styles from './NavBar.module.css'
import Oil from '@/assets/icons/Oil'
import Filter from '@/assets/icons/Filter'
import OutCar from '@/assets/icons/OutCar'
import InCar from '@/assets/icons/InCar'
import Tire from '@/assets/icons/Tire'
import Close from '@/assets/icons/Close'
import Dashboard from '@/assets/icons/Dashboard'
import Inicio from '@/assets/icons/Inicio'
import { useAppContext } from '@/context/AppContext'
import Arrow from '@/assets/icons/Arrow'
import Cart from '@/app/cart/page'
import ShoppingCard from '@/assets/icons/ShoppingCard'

const ListNav = ({ setShowMenu, showMenu, currentUser }) => {
  const { categories } = useAppContext()
  return (
    <div className={`${styles.list} ${showMenu ? styles.show : ''}`}>
      <div className={styles.title}>
        <button aria-label='Cerrar menu' onClick={() => setShowMenu(false)}>
          <i>
            <Close />
          </i>
        </button>
      </div>

      <div className={styles.categorias}>
        <h3>Panel de control</h3>
        <ul>
          <li>
            <Link href='/' onClick={() => setShowMenu(false)}>
              <i>
                <Inicio width='30px' height='30px' color='var(--red)' />
              </i>
              <span>Inicio</span>
            </Link>
          </li>
          {currentUser && (
            <li>
              <Link href='/dashboard' onClick={() => setShowMenu(false)}>
                <i>
                  <Dashboard width='30px' height='30px' color='var(--red)' />
                </i>
                <span>Dashboard</span>
              </Link>
            </li>
          )}

          <li>
            <Link href='/productos' onClick={() => setShowMenu(false)}>
              <i>
                <OutCar width='30px' height='30px' color='var(--red)' />
              </i>
              <span>Productos</span>
            </Link>
          </li>
          <li>
            <Link href='/cart' onClick={() => setShowMenu(false)}>
              <i>
                <ShoppingCard width='30px' height='30px' color='var(--red)' />
              </i>
              <span>Mis Productos</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ListNav
