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

const ListNav = ({ setShowMenu, showMenu, currentUser }) => {
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
        </ul>
      </div>

      <div className={styles.categorias}>
        <h3>Categorias</h3>
        <ul>
          <li>
            <Link href='/' onClick={() => setShowMenu(false)}>
              <i>
                <Oil width='30px' height='30px' color='var(--red)' />
              </i>
              <span>Aceites para Motor</span>
            </Link>
          </li>
          <li>
            <Link href='/' onClick={() => setShowMenu(false)}>
              <i>
                <Filter width='27px' height='27px' color='var(--red)' />
              </i>
              <span>Filtros</span>
            </Link>
          </li>
          <li>
            <Link href='/' onClick={() => setShowMenu(false)}>
              <i>
                <OutCar width='30px' height='30px' color='var(--red)' />
              </i>
              <span>Accesorios Exteriores</span>
            </Link>
          </li>
          <li>
            <Link href='/' onClick={() => setShowMenu(false)}>
              <i>
                <InCar width='30px' height='30px' color='var(--red)' />
              </i>
              <span>Accesorios Interiores</span>
            </Link>
          </li>
          <li>
            <Link href='/' onClick={() => setShowMenu(false)}>
              <i>
                <Tire width='30px' height='30px' color='var(--red)' />
              </i>
              <span>Neumáticos y Ruedas</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ListNav
