import React from 'react'


export default function Card({src,item,price,quantity}) {
  
  return (
    <>
      <div className='w-[90%] h-30 mt-4 ml-10'>
      <div className='flex justify-around border rounded-lg'>
        <img className='w-30 h-20' src={src} alt=""/>
        <h3 className='text-lg text-black pt-3'>{item}</h3>
        <div className='flex pt-6'>
          <p className='px-5'>{quantity}Kg</p>
        </div>
        <h2 className='text-lg pt-5'>Rs.{price}</h2>
        
      </div>
    </div>
    </>
  )
}
