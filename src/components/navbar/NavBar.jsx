'use client'
import Menu from '@/assets/icons/Menu'
import styles from './NavBar.module.css'
import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import Contact from '@/assets/icons/Contact'
import Link from 'next/link'
import ListNav from './ListNav'
import { useContext, useEffect, useState } from 'react'
import User from '@/assets/icons/User'
import Modal from '../modal/Modal'
import Login from './Login'
import { supabase } from '@/supabase'
import ShoppingCard from '@/assets/icons/ShoppingCard'
import UserLogin from '@/assets/icons/UserLogin'
import { useAppContext } from '@/context/AppContext'

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [showLogout, setShowLogout] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  const { cart } = useAppContext()

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const validateUser = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user && !currentUser) setCurrentUser(user)
  }

  useEffect(() => {
    validateUser()
  }, [currentUser, validateUser])

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error('Error al cerrar sesión:', error.message)
      return
    }

    localStorage.removeItem('session')
    localStorage.removeItem('user')
    window.location.reload()
  }

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
              onClick={() => setShowMenu(!showMenu)}
            >
              <i>
                <Menu color='white' width='35px' height='35px' />
              </i>
              <span>MENU</span>
            </button>
          </div>
          <Link href={'/'} className={styles.logo}>
            <Image src={logo} alt='logo' width={200} height={200} priority />
          </Link>

          {!currentUser ? (
            <div className={styles.buttons}>
              <button
                className={styles.login}
                aria-label='Iniciar Sesión'
                onClick={() => openModal()}
              >
                <i>
                  <User color='white' width='33px' height='33px' />
                </i>
                <span>Iniciar Sesión</span>
              </button>
              <Link href={'/'} className={styles.contact}>
                <i>
                  <Contact color='white' width='30px' height='30px' />
                </i>
                <span>CONTACTO</span>
              </Link>
              <Link href={'/cart'} className={styles.shoppingCard}>
                <i>
                  <ShoppingCard color='white' width='33px' height='33px' />
                </i>
                <span className={styles.quantity}>{cart.length}</span>
              </Link>
            </div>
          ) : (
            <div className={styles.user}>
              <button
                className={styles.login}
                aria-label='User'
                onClick={() => setShowLogout(!showLogout)}
              >
                <i>
                  <UserLogin color='white' width='33px' height='33px' />
                </i>
                <span>{currentUser?.email}</span>
              </button>
              <div
                className={`${styles.logOut} ${
                  showLogout ? styles.active : ''
                }`}
              >
                <button onClick={handleLogout}>Cerra sesión</button>
              </div>
              <Link href={'/cart'} className={styles.shoppingCard}>
                <i>
                  <ShoppingCard color='white' width='33px' height='33px' />
                </i>
                <span className={styles.quantity}>{cart.length}</span>
              </Link>
            </div>
          )}
        </div>
      </nav>
      <ListNav
        setShowMenu={setShowMenu}
        showMenu={showMenu}
        currentUser={currentUser}
      />
      <Modal isModalOpen={isModalOpen} onClose={closeModal}>
        <Login onClose={closeModal} />
      </Modal>
    </header>
  )
}

export default NavBar
