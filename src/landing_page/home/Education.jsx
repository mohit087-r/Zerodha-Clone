import React from 'react'

const Education = () => {
  return (
    <div className='grid grid-cols-12 flex items-center mt-30'>
      <div className='md:col-span-6 col-span-12 md:w-[350px] mx-auto'>
        <a href="https://zerodha.com/varsity/">
          <img src="public/images/education.svg" />
        </a>
      </div>
      <div className='md:col-span-6 col-span-12 mx-10 md:mt-0 mt-10'>
        <h2 className='text-3xl font-[500] text-[#424242]'>Free and open market education</h2>

        <p className='text-[#666666] mt-8 mb-2'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
        <a className='text-[#387ed1] font-medium' href="https://zerodha.com/varsity/"> Varsity <i class="fa-solid fa-arrow-right"></i></a>

        <p className='text-[#666666] mt-8 mb-2'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
        <a className='text-[#387ed1] font-medium' href="https://tradingqna.com/">TradingQ&A  <i class="fa-solid fa-arrow-right"></i></a>

      </div>
    </div>
  )
}

export default Education
