import Image from 'next/image'
import styles from './Footer.module.css'
import Facebook from '@/assets/icons/Facebook'
import Instagram from '@/assets/icons/Instagram'
import Whastapp from '@/assets/icons/Whastapp'
import Link from 'next/link'
import logo from '@/assets/images/logo.png'

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <section className={styles.section_1}>
          <div className={styles.logo}>
            <Image src={logo} alt={'logo'} width={300} height={300} />
          </div>
          <div className={styles.list}>
            <h5>Navegación</h5>
            <ul>
              <li>
                <Link href={'/productos'}>Productos</Link>
              </li>
              <li>
                <Link href={'/cart'}>Carrito</Link>
              </li>
            </ul>
          </div>
          <div className={styles.social}>
            <h5>Redes Sociales</h5>
            <ul>
              <li>
                <Link href={'/'}>
                  <Facebook width='20px' height='20px' />
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <Instagram width='20px' height='20px' />
                </Link>
              </li>
              <li>
                <Link href='https://wa.me/+5491128067218' target='_blank'>
                  <Whastapp width='20px' height='20px' />
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <section className={styles.section_2}>
          <ul>
            <li>
              <Link href='https://wa.me/+5491128067218' target='_blank'>
                +54 9 11 2806-7218
              </Link>
            </li>
            <li>
              <Link href={'/'}>el29j@example.com</Link>
            </li>
            <li>
              <Link
                href='https://www.google.com/maps?q=Buenos+Aires,+Argentina'
                target='_blank'
              >
                Buenos Aires, Argentina
              </Link>
            </li>
          </ul>
        </section>
        <div className={styles.line}></div>
        <section className={styles.setion_3}>
          <p>Todos los derechos reservados 2024 - El 29 respuestos</p>
        </section>
      </div>
    </footer>
  )
}

export default Footer
