import React from 'react'

const OutCar = ({ height = '24px', width = '24px', color = 'black' }) => {
  return (
    <svg
      stroke={color}
      fill='currentColor'
      strokeWidth={0}
      viewBox='0 0 512 512'
      height={height}
      width={width}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={32}
        d='m80 224 37.78-88.15C123.93 121.5 139.6 112 157.11 112h197.78c17.51 0 33.18 9.5 39.33 23.85L432 224m-352 0h352v144H80zm32 144v32H80v-32m352 0v32h-32v-32'
      />
      <circle
        cx={144}
        cy={288}
        r={16}
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={32}
      />
      <circle
        cx={368}
        cy={288}
        r={16}
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={32}
      />
    </svg>
  )
}

export default OutCar
