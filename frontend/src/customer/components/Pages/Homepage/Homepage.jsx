import React from 'react'
import Maincarousel from '../../HomeCarousel/Maincarousel'
import HomeSectionCarousel from '../../HomeSectionCarousel/HomeSectionCarousel'

const Homepage = () => {
  return (
    <div>
     <Maincarousel/>
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
       <HomeSectionCarousel/>
       <HomeSectionCarousel/>
       <HomeSectionCarousel/>
       <HomeSectionCarousel/>
      </div>
    </div>
  )
}

export default Homepage
