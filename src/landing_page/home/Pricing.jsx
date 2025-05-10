import React from 'react'

const Pricing = () => {
  return (
    <div className='grid grid-cols-12 mt-30 md:mx-40 gap-5 mx-10'>
      <div className='xl:col-span-6 col-span-12'>
        <h2 className='text-3xl font-[500] text-[#424242]'>Unbeatable pricing</h2>
        <p className='mt-7 text-[#666666]'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
      </div>
      <div className=' flex flex-wrap xl:col-span-6 col-span-12 '>
          <div className='flex items-center'>
            <img className='h-18' src="public/images/pricing0.svg" alt="pricing0 image" />
            <p className='text-[10px] text-[#666666] mt-5 -ml-3'>Free account <br /> opening</p>
          </div>

          <div className='flex items-center'>
            <img className='h-18' src="public/images/pricingEquity.svg" alt="pricing equity image" />
            <p className='text-[10px] text-[#666666] mt-5 -ml-3'>Free equity delivery <br /> and direct mutual funds</p>
          </div>

          <div className='flex items-center'>
            <img className='h-18' src="public/images/intradayTrades.svg" alt="pricing MF image" />
            <p className='text-[10px] text-[#666666] mt-5 -ml-2' >Intraday and <br /> F&O</p>
          </div>
      </div>
      <a className='lg:mt-4 col-span-12 text-[#387ed1] font-medium hover:text-[#424554]' href="">See pricing <i class="fa-solid fa-arrow-right"></i></a>
    </div>
  )
}

export default Pricing
