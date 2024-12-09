import Image from 'next/image'
import Link from 'next/link'
import styles from './Card.module.css'
const Card = ({ item }) => {
  return (
    <Link href={`/detail/${item.id}`} className={styles.product}>
      <div className={styles.conteiner_img}>
        <Image src={item.images[0]} alt={item.name} width={500} height={500} />
      </div>
      <div className={styles.info}>
        <span>${item.price}</span>
        <p>{item.name}</p>
        <button>Ver producto</button>
      </div>
    </Link>
  )
}

export default Card
