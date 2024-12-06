const User = ({ height = '24px', width = '24px', color = 'white' }) => {
  return (
    <svg
      stroke={color}
      fill='none'
      strokeWidth={1.5}
      viewBox='0 0 24 24'
      strokeLinecap='round'
      strokeLinejoin='round'
      height={height}
      width={width}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M18 20a6 6 0 0 0-12 0' />
      <circle cx={12} cy={10} r={4} />
      <circle cx={12} cy={12} r={10} />
    </svg>
  )
}

export default User
