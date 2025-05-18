import React from 'react'

const index = () => {
  return (
    <div className='relative w-1/2 lg:w-max '>
      <div className='absolute -z-40 -top-20 right-0'>
        <img src='/Hero1.png' alt='hero1' />
      </div>
      <div className='absolute -z-50'>
        <img src='/Hero2.png' alt='hero2' />
      </div>
      <div className='flex flex-col w-1/2 lg:w-max'>
        <div>
          <img src='/Hero3.png' alt='hero3' />
        </div>
      </div>
    </div>
  )
}

export default index
