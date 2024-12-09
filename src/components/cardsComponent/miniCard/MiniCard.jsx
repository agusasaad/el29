import Image from 'next/image'
import Link from 'next/link'
import styles from './MiniCard.module.css'

const MiniCard = ({ item }) => {
  return (
    <Link href={`/detail/${item?.id}`} className={styles.product}>
      <div className={styles.container_img}>
        <Image
          src={item?.images[0]}
          alt={item?.name}
          width={100}
          height={100}
        />
      </div>
      <div className={styles.info}>
        <span>${item?.price}</span>
        <p>{item?.name}</p>
      </div>
    </Link>
  )
}

export default MiniCard
