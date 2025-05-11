import React from 'react'

const Products = () => {
  return (
    <div className='mt-20'>
      <div className='flex flex-col md:flex-row md:mx-40 mx-10 gap-20 items-center'>
        <div className='flex-1'>
          <img src="/images/kite.png" alt="" />
        </div>
        <div className='mt-10 md:mt-0 text-[#424242] flex-1'>
          <h2 className='text-3xl font-semibold -mt-10 md:mt-0'>Kite</h2>
          <p className='mt-5'>Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.</p>
          <div className='flex gap-10 mt-5'>
            <a className='font-medium hover:text-[#424554] text-[#387ed1]' href="https://zerodha.com/investments">Try demo <i className="fa-solid fa-arrow-right "></i></a>
            <a className='font-medium hover:text-[#424554] text-[#387ed1]' href="https://zerodha.com/investments">Learn more <i className="fa-solid fa-arrow-right "></i></a>
          </div>
          <div className='flex gap-10 mt-10'>
            <img src="/images/googlePlayBadge.svg"/>
            <img src="/images/appstoreBadge.svg"/>
          </div>
        </div>
      </div>


      <div className='flex flex-col-reverse md:flex-row md:mx-40 mx-10 gap-y-5 md:gap-40 items-center mt-20'>
        <div className='text-[#424242] flex-1'>
          <h2 className='text-3xl font-semibold -mt-10 md:mt-0'>Console</h2>
          <p className='mt-5'>The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.</p>
          <div className='flex gap-10 mt-5'>
            <a className='font-medium hover:text-[#424554] text-[#387ed1]' href="https://zerodha.com/investments">Learn more <i className="fa-solid fa-arrow-right "></i></a>
          </div>
        </div>
        <div className='flex-1'>
          <img src="/images/console.png" alt="" />
        </div>
      </div>
      

      <div className='flex flex-col md:flex-row md:mx-40 mx-10 gap-20 items-center mt-20'>
        <div className='flex-1'>
          <img src="/images/coin.png" alt="" />
        </div>
        <div className='mt-10 md:mt-0 text-[#424242] flex-1'>
          <h2 className='text-3xl font-semibold -mt-10 md:mt-0'>Coin</h2>
          <p className='mt-5'>Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.</p>
          <div className='flex gap-10 mt-5'>
            <a className='font-medium hover:text-[#424554] text-[#387ed1]' href="https://zerodha.com/investments">Coin <i className="fa-solid fa-arrow-right "></i></a>
            
          </div>
          <div className='flex gap-10 mt-10'>
            <img src="/images/googlePlayBadge.svg"/>
            <img src="/images/appstoreBadge.svg"/>
          </div>
        </div>
      </div>

      <div className='flex flex-col-reverse md:flex-row md:mx-40 mx-10 gap-y-5 md:gap-40 items-center mt-20'>
        <div className='text-[#424242] flex-1'>
          <h2 className='text-3xl font-semibold'>Kite Connect API</h2>
          <p className='mt-5'>Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.</p>
          <div className='flex gap-10 mt-5'>
            <a className='font-medium hover:text-[#424554] text-[#387ed1]' href="https://zerodha.com/investments">Kite Connect <i className="fa-solid fa-arrow-right "></i></a>
          </div>
        </div>
        <div className='flex-1'>
          <img src="/images/kiteconnect.png" alt="" />
        </div>
      </div>

      <div className='flex flex-col md:flex-row md:mx-40 mx-10 gap-20 items-center mt-20'>
        <div className='flex-1'>
          <img src="/images/varsity.png" alt="" />
        </div>
        <div className='mt-10 md:mt-0 text-[#424242] flex-1'>
          <h2 className='text-3xl font-semibold -mt-10 md:mt-0'>Varsity mobile</h2>
          <p className='mt-5'>An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.</p>
          <div className='flex gap-10 mt-10'>
            <img src="/images/googlePlayBadge.svg"/>
            <img src="/images/appstoreBadge.svg"/>
          </div>
        </div>
      </div>
      
      <p className='text-xl text-[#424242] text-center mt-20'>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
    </div>
  )
}

export default Products
