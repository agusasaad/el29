import React from 'react'

const Menu = ({ height = '24px', width = '24px', color = 'white' }) => {
  return (
    <svg
      stroke='currentColor'
      fill={color}
      strokeWidth={0}
      viewBox='0 0 512 512'
      height={height}
      width={width}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z' />
    </svg>
  )
}

export default Menu
