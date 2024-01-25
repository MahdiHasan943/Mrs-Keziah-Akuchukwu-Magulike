import React from 'react'

const Header = () => {
  return (
      <div className='shadow-2xl bg-[#fafafa]  '>
          
          <div className="flex max-w-[1500px] mx-auto py-8 justify-between items-center px-2 sm:px-16">
              <a className='text-[#843E71] font-sofia  text-[18px] sm:text-[18px] font-semibold' href="#home">Mrs Keziah Akuchukwu <span className='hidden  sm:block'>Magulike</span></a>
              <div className="flex items-center gap-2 sm:gap-8">
                  <a className='text-[#000] font-sofia text-[18px] hidden  sm:block font-semibold' href="#home">Home</a>
                
                  <a className='text-[#000] font-sofia  text-[18px]  font-semibold' href="#zom">
                    
                      Zoom
                  </a>
                  <a className='text-[#000] font-sofia  text-[18px]  font-semibold' href="#con">
                    Contact
                  </a>
              </div>
          </div>
    </div>
  )
}

export default Header