import Link from 'next/link'
import styles from './NavBar.module.css'
import Oil from '@/assets/icons/Oil'
import Filter from '@/assets/icons/Filter'
import OutCar from '@/assets/icons/OutCar'
import InCar from '@/assets/icons/InCar'
import Tire from '@/assets/icons/Tire'
import Close from '@/assets/icons/Close'

const ListNav = ({ setSHowMenu, showMenu }) => {
  return (
    <ul className={`${styles.list} ${showMenu ? styles.show : ''}`}>
      <div className={styles.title}>
        <button aria-label='Cerrar menu' onClick={() => setSHowMenu(false)}>
          <i>
            <Close />
          </i>
        </button>
      </div>
      <li>
        <Link href='/aceites-para-motor'>
          <i>
            <Oil width='30px' height='30px' color='var(--red)' />
          </i>
          <span>Aceites para Motor</span>
        </Link>
      </li>
      <li>
        <Link href='/filtros'>
          <i>
            <Filter width='27px' height='27px' color='var(--red)' />
          </i>
          <span>Filtros</span>
        </Link>
      </li>
      <li>
        <Link href='/accesorios-exteriores'>
          <i>
            <OutCar width='30px' height='30px' color='var(--red)' />
          </i>
          <span>Accesorios Exteriores</span>
        </Link>
      </li>
      <li>
        <Link href='/accesorios-interiores'>
          <i>
            <InCar width='30px' height='30px' color='var(--red)' />
          </i>
          <span>Accesorios Interiores</span>
        </Link>
      </li>
      <li>
        <Link href='/neumaticos-y-ruedas'>
          <i>
            <Tire width='30px' height='30px' color='var(--red)' />
          </i>
          <span>Neumáticos y Ruedas</span>
        </Link>
      </li>
    </ul>
  )
}

export default ListNav
