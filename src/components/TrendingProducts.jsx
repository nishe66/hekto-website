import React from 'react'
import trendingimg1 from '../assets/trending1.png'
import trendingimg2 from '../assets/trending2.png'
import trendingimg3 from '../assets/trending3.png'
import trendingimg4 from '../assets/trending4.png'
import trendb1 from '../assets/trendingb1.png'
import trendb2 from '../assets/trendingb2.png'
import exeimg1 from '../assets/executive1.png'
import exeimg2 from '../assets/executive2.png'
import exeimg3 from '../assets/executive3.png'
import { Link } from 'react-router-dom'
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { LuSearchX } from "react-icons/lu";

const TrendingProducts = () => {
   return (
      <section className='pt-32'>
         <div className='container mx-auto'>
            <div>
               <h2 className='text-[#1A0B5B] font-Josefin text-[42px] font-bold pb-20 text-center'>Trending Products</h2>
            </div>
            <div className='flex justify-between'>
               <div className='w-[23%] shadow-lg p-3 group'>
                  <div className='bg-[#F5F6F8] py-8 flex items-center justify-center relative overflow-hidden'>
                     <img className='bg-[#F5F6F8] h-44 object-cover' src={trendingimg1} alt="trendingimg" />
                     <div className='flex items-center gap-3 absolute top-3 -left-56 group-hover:left-3 duration-500 ease-in-out'>
                        <div className='w-10 h-10 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><BsCart3 className='text-[#2F1AC4] text-lg' /></div>
                        <div className='w-10 h-10 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><FaRegHeart className=' text-[#1DB4E7] text-lg' /></div>
                        <div className='w-10 h-10 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><LuSearchX className='text-[#1DB4E7] text-lg' /></div>
                     </div>
                     <button className='py-2 px-5 rounded bg-[#08D15F] text-[#FFFFFF] absolute -bottom-12 left-20 group-hover:bottom-5 duration-500 ease-in-out'><Link className='font-Josefin font-medium text-sm'>View Shop</Link></button>
                  </div>
                  <div className='text-center pt-4 pb-8'>
                     <h4 className='font-Lato text-[#151875] text-base font-bold pb-2'>Cantilever chair</h4>
                     <div className='flex gap-3  justify-center'>
                        <h5 className='font-Lato text-[#151875]'>$26.00</h5>
                        <h5 className='font-Lato text-[#1518756c] text-sm'>$42.00</h5>
                     </div>
                  </div>
               </div>
               <div className='w-[23%] shadow-lg p-3 group'>
                  <div className='bg-[#F5F6F8] py-8 flex items-center justify-center relative overflow-hidden'>
                     <img className='bg-[#F5F6F8] h-44 object-cover' src={trendingimg2} alt="trendingimg" />
                     <div className='flex gap-3 absolute top-3 -left-56 group-hover:left-3 duration-500 ease-in-out'>
                        <div className='w-10 h-10 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><BsCart3 className='text-[#2F1AC4] text-lg' /></div>
                        <div className='w-10 h-10 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><FaRegHeart className=' text-[#1DB4E7] text-lg' /></div>
                        <div className='w-10 h-10 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><LuSearchX className='text-[#1DB4E7] text-lg' /></div>
                     </div>
                     <button className='py-2 px-5 rounded bg-[#08D15F] text-[#FFFFFF] absolute -bottom-12 left-20 group-hover:bottom-5 duration-500 ease-in-out'><Link className='font-Josefin font-medium text-sm'>View Shop</Link></button>
                  </div>
                  <div className='text-center pt-4 pb-8'>
                     <h4 className='font-Lato text-[#151875] text-base font-bold pb-2'>Cantilever chair</h4>
                     <div className='flex gap-3  justify-center'>
                        <h5 className='font-Lato text-[#151875]'>$26.00</h5>
                        <h5 className='font-Lato text-[#1518756c] text-sm'>$42.00</h5>
                     </div>
                  </div>
               </div>
               <div className='w-[23%] shadow-lg p-3 group'>
                  <div className='bg-[#F5F6F8] py-8 flex items-center justify-center relative overflow-hidden'>
                     <img className='bg-[#F5F6F8] h-44 object-cover' src={trendingimg3} alt="trendingimg" />
                     <div className='flex gap-3 absolute top-3 -left-56 group-hover:left-3 duration-500 ease-in-out'>
                        <div className='w-10 h-10 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><BsCart3 className='text-[#2F1AC4] text-lg' /></div>
                        <div className='w-10 h-10 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><FaRegHeart className=' text-[#1DB4E7] text-lg' /></div>
                        <div className='w-10 h-10 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><LuSearchX className='text-[#1DB4E7] text-lg' /></div>
                     </div>
                     <button className='py-2 px-5 rounded bg-[#08D15F] text-[#FFFFFF] absolute -bottom-12 left-20 group-hover:bottom-5 duration-500 ease-in-out'><Link className='font-Josefin font-medium text-sm'>View Shop</Link></button>
                  </div>
                  <div className='text-center pt-4 pb-8'>
                     <h4 className='font-Lato text-[#151875] text-base font-bold pb-2'>Cantilever chair</h4>
                     <div className='flex gap-3  justify-center'>
                        <h5 className='font-Lato text-[#151875]'>$26.00</h5>
                        <h5 className='font-Lato text-[#1518756c] text-sm'>$42.00</h5>
                     </div>
                  </div>
               </div>
               <div className='w-[23%] shadow-lg p-3 group'>
                  <div className='bg-[#F5F6F8] py-8 flex items-center justify-center relative overflow-hidden'>
                     <img className='bg-[#F5F6F8] h-44 object-cover' src={trendingimg4} alt="trendingimg" />
                     <div className='flex gap-3 absolute top-3 -left-56 group-hover:left-3 duration-500 ease-in-out'>
                        <div className='w-10 h-10 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><BsCart3 className='text-[#2F1AC4] text-lg' /></div>
                        <div className='w-10 h-10 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><FaRegHeart className=' text-[#1DB4E7] text-lg' /></div>
                        <div className='w-10 h-10 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><LuSearchX className='text-[#1DB4E7] text-lg' /></div>
                     </div>
                     <button className='py-2 px-5 rounded bg-[#08D15F] text-[#FFFFFF] absolute -bottom-12 left-20 group-hover:bottom-5 duration-500 ease-in-out'><Link className='font-Josefin font-medium text-sm'>View Shop</Link></button>
                  </div>
                  <div className='text-center pt-4 pb-8'>
                     <h4 className='font-Lato text-[#151875] text-base font-bold pb-2'>Cantilever chair</h4>
                     <div className='flex gap-3  justify-center'>
                        <h5 className='font-Lato text-[#151875]'>$26.00</h5>
                        <h5 className='font-Lato text-[#1518756c] text-sm'>$42.00</h5>
                     </div>
                  </div>
               </div>
            </div>
            <div className='pt-10 flex justify-between'>
               <div className='w-[32%] bg-[#FFF6FB] pt-8 pl-6'>
                  <h3 className='text-[#151875] font-Josefin font-semibold text-2xl'>23% off in all products</h3>
                  <div className='pt-3'>
                     <Link className='font-Lato text-base font-semibold text-[#FB2E86] underline'>Shop Now</Link>
                  </div>
                  <div className='ml-40'>
                     <img src={trendb1} alt="trendingimg" />
                  </div>
               </div>
               <div className='w-[32%] bg-[#EEEFFB] pt-8 pl-6'>
                  <h3 className='text-[#151875] font-Josefin font-semibold text-2xl'>23% off in all products</h3>
                  <div className='pt-3'>
                     <Link className='font-Lato text-base font-semibold text-[#FB2E86] underline'>View Collection</Link>
                  </div>
                  <div className='ml-16'>
                     <img src={trendb2} alt="trendingimg" />
                  </div>
               </div>
               <div className='w-[32%]'>
                  <div className='flex items-center pb-5'>
                     <div className='w-28 h-24 bg-[#F5F6F8] flex items-center justify-center mr-3'><img src={exeimg1} alt="" /></div>
                     <div>
                        <h5 className='font-Josefin font-semibold text-[#151875] text-base'>Executive Seat chair</h5>
                        <h5 className='font-Josefin text-xs font-medium text-[#151875] line-through pt-1'>$32.00</h5>
                     </div>
                  </div>
                  <div className='flex items-center pb-5'>
                     <div className='w-28 h-24 bg-[#F5F6F8] flex items-center justify-center py-5 mr-3'><img src={exeimg2} alt="" /></div>
                     <div>
                        <h5 className='font-Josefin font-semibold text-[#151875] text-base'>Executive Seat chair</h5>
                        <h5 className='font-Josefin text-xs font-medium text-[#151875] line-through pt-1'>$32.00</h5>
                     </div>
                  </div>
                  <div className='flex items-center'>
                     <div className='w-28 h-24 bg-[#F5F6F8] flex items-center justify-center py-5 mr-3'><img src={exeimg3} alt="executiveimg" /></div>
                     <div>
                        <h5 className='font-Josefin font-semibold text-[#151875] text-base'>Executive Seat chair</h5>
                        <h5 className='font-Josefin text-xs font-medium text-[#151875] line-through pt-1'>$32.00</h5>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default TrendingProducts










