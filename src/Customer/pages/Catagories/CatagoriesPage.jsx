import HomeCarousel from '../../components/HomeSectionCarousel/HomeCarousel'
import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import { Data } from '../../components/Data/Data';
import { Data1 } from '../../components/Data/Data1';
import { FruitsData } from '../../components/Data/FruitsData';

const items = [
  <img className="cursor-pointer h-96 w-[100%]"  src='https://inhabitat.com/wp-content/blogs.dir/1/files/2017/11/Vegetables-Carousel-889x309.jpg' role='presentation'/>,
  <img className="cursor-pointer h-96 w-[100%]"  src='https://media.istockphoto.com/id/1005897786/photo/composition-with-fresh-vegetarian-grocery-products.jpg?s=612x612&w=0&k=20&c=Aipd8Y58JaYT1axpDip3tOr56fX2luWBcZT5A2445k0=' role='presentation'/>,
  <img className="cursor-pointer h-96 w-[100%]"  src='https://desicart.co.uk/cdn/shop/collections/8.jpg?v=1600784131&width=1200' role='presentation'/>,
  <img className="cursor-pointer h-96 w-[100%]"  src='https://blisspot.com/blogs/wp-content/uploads/blog/ba/8e/01/551f0d765822c16ac5d1db5ca6244ac7.jpg' role='presentation'/>,
  <img className="cursor-pointer h-96 w-[100%]"  src='https://cdn.metro-online.com/-/media/Project/MCW/PK_Metro/2020-to-2021/Product-World-2021/03FruitsVegetables.jpg?rev=320e8b150e594295b6b47cf4c27e5164&w=1392&webp=1&hash=2770B44B22B34E087965695A16A9B4C1' role='presentation'/>
  
];
export default function CatagoriesPage() {
  return (
    <div>
      <div>
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
      </div>
      <div>
        <div className='mb-4 px-2'>
          <HomeCarousel name="Today's Deals" prod={Data}/>
          <HomeCarousel name="Best Offers" prod={Data1}/>
          <HomeCarousel name="Best for this season" prod={Data}/>
          <HomeCarousel name="Fruits" prod={FruitsData}/>
        </div>
      </div>
    </div>
  )
}
