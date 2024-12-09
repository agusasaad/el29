import styles from './../../app/dashboard/page.module.css'
const Plus = ({ height = '24px', width = '24px', color = 'black' }) => {
  return (
    <svg
      className={styles.icon}
      stroke='currentColor'
      fill={color}
      strokeWidth={0}
      viewBox='0 0 24 24'
      height={height}
      width={width}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M12.75 7.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z' />
      <path d='M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z' />
    </svg>
  )
}

export default Plus
