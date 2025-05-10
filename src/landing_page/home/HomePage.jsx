import React from 'react'
import Hero from './Hero'
import Stats  from './Stats'
import Awards from './Awards'
import Pricing from './Pricing'
import Education from './Education'
import OpenAccount from './OpenAccount'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Stats/>
      <Awards/>
      <Pricing/>
      <Education/>
      <OpenAccount/>
    </div>
  )
}

export default HomePage
