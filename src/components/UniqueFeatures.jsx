import React from 'react'
import uniqueimg from '../assets/unique.png'
import { Link } from 'react-router-dom'
const UniqueFeatures = () => {
  return (
    <section className='bg-[#F1F0FF]'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <div className='w-1/2'>
            <img src={uniqueimg} alt="uniqueimg" />

          </div>
          <div className='w-1/2'>
            <h2 className='font-Josefin text-4xl text-[#151875] font-bold pb-7 leading-[46px]'>Unique Features Of leatest &
              Trending Poducts</h2>
            <div className='pb-6'>
              <div className='relative gap-2 pb-3'>
                <div className='w-3 h-3 rounded-full bg-[#F52B70] absolute top-1 left-0'></div>
                <p className='font-Lato text-[#ACABC3] text-base font-medium ml-5'>All frames constructed with hardwood solids and laminates</p>
              </div>
              <div className='pb-3 relative'>
                <div className='w-3 h-3 rounded-full bg-[#2B2BF5] absolute top-2 left-0'></div>
                <p className='font-Lato text-[#ACABC3] text-base font-medium ml-5 pr-36'>Reinforced with double wood dowels, glue, screw - nails corner
                  blocks and machine nails</p>
              </div>
              <div className='relative gap-2 pb-3'>
                <div className='w-3 h-3 rounded-full bg-[#2BF5CC] absolute top-1 left-0'></div>
                <p className='font-Lato text-[#ACABC3] text-base font-medium ml-5'>Arms, backs and seats are structurally reinforced</p>
              </div>
            </div>
            <div className='flex items-center gap-5 pb-3'>
              <button className='py-3 px-6 bg-[#FB2E86]'><Link className='font-Josefin text-[#FFFFFF] text-lg font-semibold'>Add To Cart</Link></button>
              <div>
                <h5 className='font-Josefin text-sm font-semibold text-[#151875]'>B&B Italian Sofa</h5>
                <h5 className='text-[#151875] font-Lato text-sm'>$32.00</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UniqueFeatures

