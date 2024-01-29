import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#843E71] sm:flex items-center justify-around gap-8 py-24 shadow-3xl'>
      <a href="https://www.forevermissed.com/keziahmagulike/about">
      <img src="/images.png" className='mx-auto py-4 sm:py-0' alt="" />   

      </a>
      <p className='text-[30px] text-center sm:text-[60px] font-bold font-popping text-[#CECECE]'>Please click on Forever Missed <br className='hiddn sm:block' /> to leave a tribute.</p>

    </div>
  )
}

export default Footer