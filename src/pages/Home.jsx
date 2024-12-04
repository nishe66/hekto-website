import React from 'react'
import Hero from '../components/Hero'
import Logos from '../components/Logos'
import FeaturedProducts from '../components/Featuredproducts'
import ShopexOffer from '../components/ShopexOffer'
import Newslater from '../components/Newslater'



const Home = () => {
  return (
    <div>
    <Hero/>
    <FeaturedProducts/>
    <ShopexOffer/>
    <Newslater/>
    <Logos/>
     
    </div>
  )
}

export default Home



