import React, { createContext, useContext, useState,useReducer } from 'react'

export const ShopItems=createContext();
export default function Homesectioncard({item}) {
  
  return (
    <>
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border'>
      <div className='h-[13rem] w-[10rem]'>
        <img className="object-cover object-top w-full h-full"  src={item.src} role='presentation'/>
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-medium text-grey-900'>{item.item}</h3>
        <p className='mt-2 text-sm text-grey-500'>{item.price}</p>
      </div>
      <div>
        <button className='w-56 h-7 border border-black mb-2 rounded-md'>Add to Cart</button>
      </div>
    </div>
    </>
  )
}
