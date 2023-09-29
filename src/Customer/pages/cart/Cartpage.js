import React, { createContext, useEffect, useReducer } from 'react'
import { HomeCardData } from '../../components/HomeSectionCard/HomeCardData';
import Cart from './Cart';
import { reducer } from './reducer';


export const CartContext=createContext();

const initialstate={
  item :HomeCardData,
  totalAmt:0,
  totalItems:0
}
export default function Cartpage() {
  const [state1,dispatch]=useReducer(reducer,initialstate)
  const removeItem=(id)=>{
    return dispatch({
      type:"REMOVE_ITEM",
      payload:id
    })
  }

  const removeCart=()=>{
    return dispatch({
      type:"CLEAR_CART"
    })
  }
  const increment=(id)=>{
    return dispatch({
      type:"INCREMENT",
      payload:id
    })
  }
  const decrement=(id)=>{
    return dispatch({
      type:"DECREMENT",
      payload:id
    })
  }
  useEffect(()=>{
    dispatch({type:"GET_ITEMS"})
  },[state1.item])
  return (
    <div className='w-100% text-lg'>
      <CartContext.Provider value={{...state1,removeItem,removeCart,increment,decrement}}>
        <Cart/>
      </CartContext.Provider>
    </div>
  )
}
