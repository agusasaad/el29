'use client'
import Menu from '@/assets/icons/Menu'
import styles from './NavBar.module.css'
import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import Contact from '@/assets/icons/Contact'
import Link from 'next/link'
import ListNav from './ListNav'
import { useState } from 'react'
import User from '@/assets/icons/User'
import Modal from '../modal/Modal'
import Input from '../form/Input'
import Form from '../form/Form'
import ButtonSubmit from '../form/ButtonSubmit'

const NavBar = () => {
  const [showMenu, setSHowMenu] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

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
          </div>
        </div>
      </nav>
      <ListNav setSHowMenu={setSHowMenu} showMenu={showMenu} />
      <Modal isModalOpen={isModalOpen} onClose={closeModal}>
        <Form>
          <Input
            title={'Correo electrónico *'}
            type='email'
            placeholder={'ejemplo@mail.com'}
            name={'email'}
          />
          <Input
            title={'Contraseña *'}
            type='password'
            placeholder={'Contraseña'}
            name={'password'}
          />
          <ButtonSubmit text={'Iniciar sesión'} type={'submit'} />
          <div className={styles.forgetPassword}>
            <button>¿Olvidaste tu contraseña?</button>
          </div>
        </Form>
      </Modal>
    </header>
  )
}

export default NavBar
