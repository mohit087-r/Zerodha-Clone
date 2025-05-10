import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className='text-3xl font-semibold text-[#424242] mb-20 text-center mt-25 '>
        <h2>We pioneered the discount broking model in India.</h2>
        <h2>Now, we are breaking ground with our technology.</h2>
      </div>
      <div className='smflex lg:mx-20 lg:px-20 gap-10 border-t border-gray-200 pt-20 mx-10'>
        <div>
          <p className='mb-5'>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
          <p className='mb-5'>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
          <p className='mb-5'>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
        </div>
        <div>
          <p className='mb-5'>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
          <p className='mb-5'>Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
          <p className='mb-5'>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
