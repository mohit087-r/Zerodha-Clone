import React from 'react'

const MemberCard = ({img, name, role}) => {
  return (
    <div className='text-center m-5'>
        <img className='w-50 h-50 rounded-[50%] bg-green-500' src={img} alt="" />
        <h4 className='text-ls font-[]'>{name}</h4>
        <p className='text-xs'>{role}</p>
    </div>
  )
}

export default MemberCard
