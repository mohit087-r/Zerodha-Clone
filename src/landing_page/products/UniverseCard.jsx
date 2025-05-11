import React from 'react'

const UniverseCard = ({image, description}) => {
  return (
    <div className='flex flex-col text-center w-50'>
      <img className='w-50' src={image}/>
      <p className='text-[9px] font-semibold text-[#666666]'>{description}</p>
    </div>
  )
}

export default UniverseCard
