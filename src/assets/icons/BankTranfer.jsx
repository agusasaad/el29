const BankTranfer = ({ height = '24px', width = '24px', color = 'black' }) => {
  return (
    <svg
      stroke='currentColor'
      fill={color}
      strokeWidth={0}
      viewBox='0 0 24 24'
      height={height}
      width={width}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M19.924 10.383a1 1 0 0 0-.217-1.09l-5-5-1.414 1.414L16.586 9H4v2h15a1 1 0 0 0 .924-.617zM4.076 13.617a1 1 0 0 0 .217 1.09l5 5 1.414-1.414L7.414 15H20v-2H5a.999.999 0 0 0-.924.617z' />
    </svg>
  )
}

export default BankTranfer