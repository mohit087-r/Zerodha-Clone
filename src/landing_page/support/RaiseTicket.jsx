import React from 'react'

const Ticket = () => {
  return (
    <div className='xl:px-50 lg:px-20 px-5 my-10'>
      <h1 className='text-xl text-[#666666]'>To create a ticket, select a relevant topic</h1>
      <div className='mt-10 md:grid grid-cols-3 gap-10'>
        <div className='mt-5'>
          <h1 className='flex items-center text-[#424242] gap-3'>
            <i class="fa-solid fa-plus"></i>
            <p className='font-semibold'>Account Opening</p>
          </h1>
          <div className=' flex flex-col gap-2 text-[#387ed1] pl-6 text-sm font-normal mt-3'>
            <p className='cursor-pointer'>Resident individual</p>
            <p className='cursor-pointer'>Minor</p>
            <p className='cursor-pointer'>Non Resident India &#40;NRI&#41;</p>
            <p className='cursor-pointer'>Company, Partnership, HUF and LLP</p>
            <p>Glossary</p>
          </div>
        </div>

        <div className='mt-5'>
          <h1 className='flex items-center gap-3 text-[#424242]'>
            <i class="fa-solid fa-user"></i>
            <p className='font-semibold'>Your Zerodha Account</p>
          </h1>
          <div className=' flex flex-col gap-2 text-[#387ed1] pl-6 text-sm font-normal mt-3'>
            <p className='cursor-pointer'>Your Profile</p>
            <p className='cursor-pointer'>Account modification</p>
            <p className='cursor-pointer'>Client Master Report &#40;CMR&#41; and Depository Participant &#40;DP&#41;</p>
            <p className='cursor-pointer'>Nomination</p>
            <p className='cursor-pointer'>Transfer and conversion of securities</p>
          </div>
        </div>

        <div className='mt-5'>
          <h1 className='flex items-center gap-3 text-[#424242]'>
            <i class="fa-solid fa-chart-simple"></i>
            <p className='font-semibold'>Kite</p>
          </h1>
          <div className=' flex flex-col gap-2 text-[#387ed1] pl-6 text-sm font-normal mt-3'>
              <p className='cursor-pointer'>IPO</p>
              <p className='cursor-pointer'>Trading FAQs</p>
              <p className='cursor-pointer'>Margin Trading Facility (MTF) and Margins</p>
              <p className='cursor-pointer'>Charts and orders</p>
              <p className='cursor-pointer'>Alerts and Nudges</p>
              <p className='cursor-pointer'>General</p>
          </div>
        </div>

        <div className='mt-5'>
          <h1 className='flex items-center gap-3 text-[#424242]'>
            <i class="fa-regular fa-window-maximize"></i>
            <p className='font-semibold'>Funds</p>
          </h1>
          <div className=' flex flex-col gap-2 text-[#387ed1] pl-6 text-sm font-normal mt-3'>
              <p className='cursor-pointer'>Add money</p>
              <p className='cursor-pointer'>Withdraw money</p>
              <p className='cursor-pointer'>Add bank accounts</p>
              <p className='cursor-pointer'>eMandates</p>
                  
          </div>
        </div>

        <div className='mt-5'>
          <h1 className='flex items-center gap-3 text-[#424242]'>
            <i class="fa-regular fa-life-ring"></i>
            <p className='font-semibold'>Console</p>
          </h1>
          <div className=' flex flex-col gap-2 text-[#387ed1] pl-6 text-sm font-normal mt-3'>
              <p className='cursor-pointer'>Portfolio</p>
              <p className='cursor-pointer'>Corporate actions</p>
              <p className='cursor-pointer'>Funds statement</p>
              <p className='cursor-pointer'>Reports</p>
              <p className='cursor-pointer'>Profile</p>
              <p className='cursor-pointer'>Segments</p>          
          </div>
        </div>

        <div className='mt-5'>
          <h1 className='flex items-center gap-3 text-[#424242]'>
            <i class="fa-regular fa-circle"></i>
            <p className='font-semibold'>Coin</p>
          </h1>
          <div className=' flex flex-col gap-2 text-[#387ed1] pl-6 text-sm font-normal mt-3'>
              <p className='cursor-pointer'>Understanding mutual funds and Coin</p>
              <p className='cursor-pointer'>Coin app</p>
              <p className='cursor-pointer'>Coin web</p>
              <p className='cursor-pointer'>Transactions and reports</p>
              <p className='cursor-pointer'>National Pension Scheme &#40;NPS&#41;</p>      
          </div>
        </div>

      </div>
    </div>
  )
}

export default Ticket
