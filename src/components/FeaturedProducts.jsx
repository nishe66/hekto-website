import React, { useContext } from 'react'
import { apiData } from './ContextApi'
import { Link } from 'react-router-dom';
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { LuSearchX } from "react-icons/lu";

const FeaturedProducts = () => {
  let data = useContext(apiData);
  return (
    <section className='py-24'>
      <div className='container mx-auto'>
        <div>
          <div className='text-center'>
            <h2 className='text-[#1A0B5B] font-Josefin text-[42px] font-bold pb-12'>Featured Products</h2>
          </div>
          <div className='flex flex-wrap justify-center gap-7'>
            {data.map((product) => (
              <div key={product.id} className='w-[23%] shadow-lg group overflow-hidden'>
                <div className='bg-[#F6F7FB] pt-7 pb-5 relative'>
                  <img className='mx-auto h-44 object-cover group-hover:scale-125 duration-700 ease-in-out' src={product.thumbnail} alt="featuredimg" />
                  <div className='cursor-pointer flex absolute gap-5 top-4 -left-52 opacity-0 group-hover:left-5 group-hover:opacity-100 duration-700 ease-in-out'>
                    <div className='w-8 h-8 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><BsCart3 className='text-[#2F1AC4] text-lg' /></div>
                    <div className='w-8 h-8 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><FaRegHeart className=' text-[#1DB4E7] text-lg' /></div>
                    <div className='w-8 h-8 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><LuSearchX className='text-[#1DB4E7] text-lg' /></div>
                  </div>
                  <div className='absolute bottom-5 left-24 opacity-0 group-hover:opacity-100 transition'>
                    <Link className='font-Josefin font-medium text-sm text-[#FFFFFF] px-4 py-3 bg-[#08D15F] rounded'>View Details</Link>
                  </div>
                </div>
                <div className='text-center pb-5 group-hover:bg-[#2F1AC4] transition'>
                  <h3 className='font-Lato font-bold text-lg text-[#FB2E86] group-hover:text-white px-5 pt-4'>{product.title}</h3>
                  <div className='flex items-center justify-center gap-2 p-3'>
                    <div className='w-5 h-1 bg-[#05E6B7] rounded-full'></div>
                    <div className='w-5 h-1 bg-[#F701A8] rounded-full'></div>
                    <div className='w-5 h-1 bg-[#00009D] rounded-full group-hover:bg-[#F6F7FB]'></div>
                  </div>
                  <h5 className='font-Josefin text-sm text-[#00009D] group-hover:text-white'>Code -{product.sku}</h5>
                  <h5 className='font-Lato text-sm text-[#151875] group-hover:text-white mt-2'>${product.price}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
