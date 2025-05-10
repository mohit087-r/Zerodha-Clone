import React from 'react'

const TextCard = ({title, text}) => {
  return (
    <div className='mb-10'>
      <h4 className='text-lg text-[#424554] font-medium'>{title}</h4>
      <p className='text-[#666666]'>{text}</p>
    </div>
  )
}

export default TextCard
