import React from 'react'
import discountimg from '../assets/discount.png'
import { IoCheckmarkSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';


const DiscountItem = () => {
  return (
  <section className='pt-28'>
    <div className='container mx-auto'>
        <div className=''>
            <div className='text-center '>
            <div>
                <h2 className='font-Josefin font-bold text-[#151875] text-[42px] pb-8'>Discount Item</h2>
            </div>
            <div className='flex gap-6 text-center justify-center'>
                <h4 className='font-Lato text-lg text-[#FB2E86] underline'>Wood Chair .</h4>
                <h4 className='font-Lato text-lg text-[#151875] hover:text-[#FB2E86] underline'>Plastic Chair</h4>
                <h4 className='font-Lato text-lg text-[#151875] hover:text-[#FB2E86] underline'>Sofa Colletion</h4>
            </div>
            </div>
            <div className='flex justify-between items-center'>
                <div className='w-1/2'>
                    <h3 className='font-Josefin font-bold text-[#151875] text-4xl pb-4'>20% Discount Of All Products</h3>
                    <h5 className='font-Josefin text-[#FB2E86] text-2xl pb-5'>Eams Sofa Compact</h5>
                    <p className='font-Lato text-lg text-[#B7BACB] pb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                    <div>
                    <div className='flex items-center gap-x-12 pb-3'>
                        <div className='flex items-center gap-2'>
                            <IoCheckmarkSharp className='text-[#7569B2]'/>
                            <p className='font-Lato text-[#B8B8DC] text-base'>Material expose like metals</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <IoCheckmarkSharp className='text-[#7569B2]'/>
                            <p className='font-Lato text-[#B8B8DC] text-base'>Clear lines and geomatric figures</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-20'>
                        <div className='flex items-center gap-2'>
                            <IoCheckmarkSharp className='text-[#7569B2]'/>
                            <p className='font-Lato text-[#B8B8DC] text-base'> Simple neutral colours.</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <IoCheckmarkSharp className='text-[#7569B2]'/>
                            <p className='font-Lato text-[#B8B8DC] text-base'>Material expose like metals</p>
                        </div>
                    </div>
                    </div>
                    <button className='py-3 px-8 bg-[#FB2E86] rounded mt-9'><Link className='font-Josefin text-[#FFFFFF] text-lg'>Shop Now</Link></button>
                    </div>
                <div className='w-1/2'>
                  <img src={discountimg} alt="discountimg" />
                </div>
            </div>
        </div>
    </div>
  </section>

  )
}

export default DiscountItem




