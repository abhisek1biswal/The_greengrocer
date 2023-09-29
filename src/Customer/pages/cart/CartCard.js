import React, { useContext } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { CartContext } from './Cartpage';

export default function CartCard({id,src,item,price,quantity}) {
  const {removeItem,increment,decrement}=useContext(CartContext);
  return (
    <div className='w-[90%] h-30 mt-4 ml-20'>
      <div className='flex justify-around border rounded-lg'>
        <img className='w-30 h-20' src={src} alt=""/>
        <h3 className='text-lg text-black pt-2'>{item}</h3>
        <div className='flex pt-6'>
            <RemoveCircleOutlineIcon className='pl-2 mt-0.5' onClick={()=>decrement(id)}/>
            <p className='px-5'>{quantity}Kg</p>
            <AddCircleOutlineIcon className='pr-2 mt-0.5' onClick={()=>increment(id)}/>
        </div>
        <h2 className='text-lg pt-5'>Rs.{price}</h2>
        <div className='pt-5'>
            <button type="submit" onClick={()=>removeItem(id)}>remove item</button>
        </div>
      </div>
    </div>
  )
}
