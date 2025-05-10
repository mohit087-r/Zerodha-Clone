import React from 'react'

import SignUp from './SignUp'
import InvestmentOptions from './InvestmentOptions'
import Guide from './Guide'
import Explore from './Explore'
import Benefits from './Benefits'
import FAQs from './FAQs'
import OpenAccount from '../OpenAccount'

const SignupPage = () => {
  return (
    <div>
      <SignUp/>
      <InvestmentOptions/>
      <Guide/>
      <Benefits/>
      <Explore/>
      <FAQs/>
      <OpenAccount/>
    </div>
  )
}

export default SignupPage
