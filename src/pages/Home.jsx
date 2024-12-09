import React from 'react'
import Hero from '../components/Hero'
import Logos from '../components/Logos'
import ShopexOffer from '../components/ShopexOffer'
import Newslater from '../components/Newslater'
import Featuredproducts from '../components/Featuredproduct'
import UniqueFeatures from '../components/UniqueFeatures'
import DiscountItem from '../components/DiscountItem'
import LatestBlog from '../components/LatestBlog'
import TopCatagories from '../components/TopCatagories'
import TrendingProducts from '../components/TrendingProducts'
import LatestProducts from '../components/LatestProducts'



const Home = () => {
  return (
    <div>
    <Hero/>
    <Featuredproducts/>
    <LatestProducts/>
    <ShopexOffer/>
    <UniqueFeatures/>
    <TrendingProducts/>
    <DiscountItem/>
    <TopCatagories/>
    <Newslater/>
    <Logos/>
    <LatestBlog/>
    </div>
  )
}

export default Home



