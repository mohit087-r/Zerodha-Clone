import React from 'react'
import {Link} from 'react-router-dom'
const Hero = () => {
  return (
  
      <div className='text-center mb-25 mt-14'>
        <img className=' mx-auto md:w-4xl sm:px-10' src="public/images/homeHero.png" alt="" />
        <h1 className='text-[#424242] text-[42px] font-semibold mt-15'>Invest in everything</h1>
        <p className='text-[#424242] mt-5c text-xl'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <Link to='/signup'>
          <div className='mt-8 bg-[#387ed1] w-45 place-self-center rounded font-medium text-white p-2 cursor-pointer hover:bg-black'>Sign up for free</div>
        </Link>
      </div>
      
  )
}

export default Hero
