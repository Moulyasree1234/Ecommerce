import React from 'react'
import MainCarousel from '../../HomeCarousel/Maincarousel'
import HomeSectionCarousel from '../../HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../../Data/mens_kurta';

const Homepage = () => {
  return (
    <div>
     <MainCarousel/>
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
      <HomeSectionCarousel data={mens_kurta} section="Men's Kurta" />
      <HomeSectionCarousel data={mens_kurta} section="Men's Shoes" />
      <HomeSectionCarousel data={mens_kurta} section="Men's Shirts" />
      <HomeSectionCarousel data={mens_kurta} section="women's Kurtas" />
      <HomeSectionCarousel data={mens_kurta} section="Women's Saress" />

      </div>
    </div>
  )
}

export default Homepage
