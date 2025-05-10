import React from 'react'
import MemberCard from './MemberCard'
import Nithin from '/public/images/nithinKamath.jpg'

const Team = () => {
  return (
    <div className='mt-20 text-center'>
      <h2 className='text-3xl text-center text-[#424242] mb-20'>People</h2>
      <div className='flex flex-wrap mx-[10%] justify-evenly'>
        <MemberCard
          img={Nithin}
          name={"Nithin Kamath"}
          role={"Founder, CEO"}
        />

        <MemberCard
          img={Nithin}
          name={"Nithin Kamath"}
          role={"Founder, CEO"}
        />

        <MemberCard
          img={Nithin}
          name={"Nithin Kamath"}
          role={"Founder, CEO"}
        />

        <MemberCard
          img={Nithin}
          name={"Nithin Kamath"}
          role={"Founder, CEO"}
        />

        <MemberCard
          img={Nithin}
          name={"Nithin Kamath"}
          role={"Founder, CEO"}
        />

        <MemberCard
          img={Nithin}
          name={"Nithin Kamath"}
          role={"Founder, CEO"}
        />

        <MemberCard
          img={Nithin}
          name={"Nithin Kamath"}
          role={"Founder, CEO"}
        />
      </div>
    </div>
  )
}

export default Team
