import React from 'react'

const PricingPage = () => {
  return (
    <div className='text-center mt-20'>
      <h1 className='text-4xl font-semibold text-[#424242]'>Charges</h1>
      <p className='text-xl text-[#424242]'>List of all charges and taxes</p>

      <div className='mt-40 md:flex md:mx-30 mx-10 gap-10'>
        <div>
          <img className='h-40 place-self-center' src="/images/pricing0.svg"/>
          <h2 className='text-2xl font-semibold text-[#424242]'>Free equity delivery</h2>
          <p className='text-[#424242]'>All equity delivery investments &#40;NSE, BSE&#41;, are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div>
          <img className='h-40 place-self-center' src="/images/intradayTrades.svg" alt="" />
          <h2 className='text-2xl font-semibold text-[#424242]'>Intraday and F&O trades</h2>
          <p className='text-[#424242]'>Flat ₹ 20 or 0.03% &#40;whichever is lower&#41; per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div>
          <img className='h-40 place-self-center' src="/images/pricing0.svg"/>
          <h2 className='text-2xl font-semibold text-[#424242]'>Free direct MF</h2>
          <p className='text-[#424242]'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  )
}

export default PricingPage
