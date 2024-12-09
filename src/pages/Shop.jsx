import React from 'react'
import Reusedhero from '../components/Reusedhero'
import Logos from '../components/Logos'
import ShopProducts from '../components/ShopProducts'

const Shop = () => {
  return (
    <div>
      <Reusedhero title="Shop Grid Default " titlename=" . Shop Grid Default"/>
      <ShopProducts/>
      <Logos/>
    </div>
  )
}

export default Shop
