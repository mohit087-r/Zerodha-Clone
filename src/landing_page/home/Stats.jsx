import React from 'react'
import TextCard from './TextCard'

const Stats = () => {
  return (
    <div className='grid grid-cols-12 gap-5 mx-5 md:mx-[12%] mb-10'>
      <div className='col-span-12 md:col-span-6'>
        <h2 className='text-3xl text-[#424242] font-semibold mb-10'>Trust with confidence</h2>
        <TextCard 
          title={"Customer-first always"} 
          text={"That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India."}
        />

        <TextCard
          title={"No spam or gimmicks"}
          text={'No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.'}
        />

        <TextCard
          title={"The Zerodha universe"}
          text={"Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs."}
        />

        <TextCard
          title={"Do better with money"}
          text={"With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money."}
        />
          
      </div>
      <div className='col-span-12 md:col-span-6'>
          <div>
              <img src="public/images/ecosystem.png" alt="" />
          </div>
          <div className='grid grid-cols-12 text-center'>
            <a className='col-span-6 text-[#387ed1] font-medium hover:text-[#424554]' href="">Explore our products <i class="fa-solid fa-arrow-right"></i></a>
            <a className='col-span-6 text-[#387ed1] font-medium hover:text-[#424554]' href="https://kite-demo.zerodha.com/dashboard">Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
          </div>
      </div>
    </div>
  )
}

export default Stats
