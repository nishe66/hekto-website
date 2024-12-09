import React from 'react'
import latespro from '../assets/latestproduct.png'
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { LuSearchX } from "react-icons/lu";
const LatestProducts = () => {
    return (
        <section className='pt-16'>
            <div className='container mx-auto'>
                <div>
                    <h2 className='text-[#1A0B5B] font-Josefin text-[42px] font-bold pb-5 text-center'>Leatest Products</h2>
                </div>
                <div className='flex gap-14 justify-center pb-14'>
                    <h3 className='font-Lato text-lg text-[#FB2E86] underline'>New Arrival</h3>
                    <h3 className='font-Lato text-lg text-[#151875] hover:text-[#FB2E86] underline'>Best Seller</h3>
                    <h3 className='font-Lato text-lg text-[#151875] hover:text-[#FB2E86] underline'>Featured</h3>
                    <h3 className='font-Lato text-lg text-[#151875] hover:text-[#FB2E86] underline'>Special Offer</h3>
                </div>
                <div>
                    <div className='w-[32%] group'>
                        <div className='w-full py-8  bg-[#EEEFFB] group-hover:bg-[#FFFFFF] flex items-center justify-center relative overflow-hidden'>
                            <img className='h-56 object-cover' src={latespro} alt="latestproductimg" />
                            <div className='cursor-pointer flex flex-col items-center absolute gap-3 -bottom-36 left-6 opacity-0 group-hover:bottom-4 group-hover:opacity-100 duration-700 ease-in-out '>
                                <div className='w-10 h-10 hover:bg-[#EEEFFB] rounded-full flex items-center justify-center'><BsCart3 className='text-[#2F1AC4] text-xl' /></div>
                                <div className='w-10 h-10 hover:bg-[#EEEFFB] rounded-full flex items-center justify-center'><FaRegHeart className=' text-[#2F1AC4] text-xl' /></div>
                                <div className='w-10 h-10 hover:bg-[#EEEFFB] rounded-full flex items-center justify-center'><LuSearchX className='text-[#2F1AC4] text-xl' /></div>
                            </div>
                            <div>
                                <button className='font-Josefin font-semibold absolute -top-14 left-6 group-hover:top-8 text-lg py-2 px-12 bg-[#3F509E] text-[#EEEFFB] duration-700 ease-in-out'>sale</button>
                            </div>
                        </div>
                        <div className='flex items-center justify-between pt-4'>
                            <div>
                                <h5 className='font-Josefin text-base text-[#151875] border-b-2'>Comfort Handy Craft</h5>
                            </div>
                            <div className='flex items-center gap-3'>
                                <h5 className='font-Josefin text-base text-[#151875]'>$42.00</h5>
                                <h5 className='font-Josefin text-sm text-[#FB2448] line-through'>$65.00</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LatestProducts



