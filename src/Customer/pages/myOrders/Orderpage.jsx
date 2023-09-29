import React from 'react'
import Card from '../../components/Components/Steps/Card'
import { HomeCardData } from '../../components/HomeSectionCard/HomeCardData'
export default function Orderpage() {
  return (
    <div>
      <div className=''>
        <h1 className='font-bold text-lg'>My Orders</h1>
      </div>
      <div>
      {HomeCardData.map((item) => (
        <Card key={item.id} {...item} />
      ))}
      </div>
    </div>
  )
}
