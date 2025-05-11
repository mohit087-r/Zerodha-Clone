import React from 'react'

const Hero = () => {
  return (
    <div  className='bg-[#387ed1] xl:px-50 lg:px-20 px-5 text-white pt-10 pb-10'>
      <h1 className='flex justify-between'>
        <span className='text-lg font-semibold'>Support Portal</span>
        <span className='border-b cursor-pointer hover:opacity-75'>Track tickets</span>
      </h1>
      <div className='md:flex gap-10 mt-20'>
        <div>
          <h2 className='text-xl'>Search for an answer or browse help topics to create a ticket</h2>
          <div className='bg-white mt-5 rounded flex justify-between items-center px-5 py-2'>
            <input 
              className='text-black placeholder-gray-400 w-[100%] pr-5 outline-none border-none focus:ring-0 focus:border-none' 
              type="text"
              placeholder='Eg: how do i activate F&O, why is my order getting .....'
            />
            <i class="fa-solid fa-magnifying-glass text-[#424242]"></i>
          </div>
          <div className='flex gap-5 flex-wrap mb-20 mt-5'>
            <span className='border-b cursor-pointer'>Track account opening</span>
            <span className='border-b cursor-pointer'>Track segment activation</span>
            <span className='border-b cursor-pointer'>Intraday margins</span>
            <span className='border-b cursor-pointer'>Kite use manual</span>
          </div>
        </div>
        <div>
            <h2 className='text-lg font-semibold mb-5'>Featured</h2>
            <p className='underline mb-5'>1.Change in mutual fund settlement cycle due to settlement holiday on account of Buddha Pournima on May 12, 2025</p>
            <p className='underline'>2.Current Takeovers and Delisting-May 2025</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
