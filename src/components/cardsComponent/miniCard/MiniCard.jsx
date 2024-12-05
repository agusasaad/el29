import Image from 'next/image'
import Link from 'next/link'
import styles from './MiniCard.module.css'

const MiniCard = ({ item }) => {
  return (
    <Link href={`/detail/${item?.id}`} className={styles.product}>
      <Image src={item?.image} alt={item?.name} width={100} height={100} />
      <div className={styles.info}>
        <span>${item?.price}</span>
        <p>{item?.name}</p>
      </div>
    </Link>
  )
}

export default MiniCard
