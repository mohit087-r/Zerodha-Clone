import React from 'react'
import UniverseCard from './UniverseCard'

const Universe = () => {
  return (
    <div className='mt-20 text-center'>
      <h1 className='text-center text-3xl text-[#424242] font-semibold'>The Zerodha Universe</h1>
      <p className='text-center mt-3 text-[#424242]'>Extend your trading and investment experience even further with our partner platforms</p>
      <div className='grid grid-cols-2 md:grid-cols-3 mt-20 place-self-center gap-20'>
        <UniverseCard 
          className='col-span-1'
          image={'/images/zerodhaFundhouse.png'}
          description={'Options trading platform that lets you create strategies, analze positions, and examine data points like open interest, FII/DII, and more.'}
        />

        <UniverseCard 
          className='col-span-1'
          image={'/images/sensibullLogo.svg'}
          description={'Our asset managment venture that is creating simple and transparent index funds to help you save for your goals'}
        />

        <UniverseCard 
          className='col-span-1'
          image={'/images/streakLogo.png'}
          description={'Systematic trading platform that allows you to create and backtest strategies without coding.'}
        />

        <UniverseCard 
          className='col-span-1'
          image={'/images/smallcaseLogo.png'}
          description={'Thematic investing plateform that helps you invest in diversified baskets of stocks on ETFs.'}
        />

        <UniverseCard 
          className='col-span-1'
          image={'https://zerodha.com/static/images/partners/tijori.svg'}
          description={'Investment research platform that offers datailed insights on stocks, sectors, supply chains, and more.'}
        />

        <UniverseCard 
          className='col-span-1'
          image={'/images/dittoLogo.png'}
          description={'Personalized advice on life and health insurance. No spam and no mis-selling'}
        />
      </div>
      <button className='mt-20 bg-[#387ed1] w-45 rounded font-medium text-white p-2 cursor-pointer hover:bg-black'>Sign up for free</button>
    </div>
  )
}

export default Universe
