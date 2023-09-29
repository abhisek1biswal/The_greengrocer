import React,{useEffect, useState} from 'react'

import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeCarousel from '../../components/HomeSectionCarousel/HomeCarousel'
import { Data } from '../../components/Data/Data'
import { Data1 } from '../../components/Data/Data1'
import { FruitsData } from '../../components/Data/FruitsData'

export default function Homepage() {
  
  return (
    <div>
      <MainCarousel/>
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeCarousel name="offers" prod={Data}/>
        <HomeCarousel name="vegetables" prod={Data1}/>
        <HomeCarousel name="fruits" prod={FruitsData}/>
      </div>
      
    </div>
  )
}
