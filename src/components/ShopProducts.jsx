import React from 'react'
import { HiViewGrid } from "react-icons/hi";
import { MdViewList } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { LuSearchX } from "react-icons/lu";
import { BiSolidDownArrow } from "react-icons/bi";
import { useContext } from 'react';
import { apiData } from './ContextApi';


const ShopProducts = () => {
let data = useContext(apiData);
    return (
        <section>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center pt-28'>
                    <div>
                        <h3 className='font-Josefin text-2xl text-[#151875] font-bold pb-2'>Ecommerce Acceories & Fashion item </h3>
                        <h5 className='font-Lato text-sm text-[#8A8FB9]'>About 9,620 results (0.62 seconds)</h5>
                    </div>
                    <div className='flex items-center gap-2'>
                        <h4 className='font-Lato text-base text-[#3F509E]'>Per Page:</h4>
                        <div>
                          <input className='w-14 h-8 border-2 outline-none pl-5' type="text" />
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <h3 className='font-Lato text-base text-[#3F509E]'>Sort By:</h3>
                        <select name="" id="" className='text-sm font-Lato text-[#8A8FB9] px-2 border-2 py-2 outline-none'>
                            <option value="">Best Match</option>
                            <option value="">Most Popular</option>
                            <option value="">Featured</option>
                        </select>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center gap-2'>
                            <div>
                                <h3 className='font-Lato text-base text-[#3F509E]'>View:</h3>
                            </div>
                            <div className='flex items-center gap-2' >
                                <HiViewGrid className='text-[#151875] text-lg' />
                                <MdViewList className='text-[#151875] text-lg' />
                            </div>
                        </div>
                        <div>
                            <input className='w-44 h-8 outline-none pl-4 border-2' type="text" />
                        </div>
                    </div>
                </div>
                <div className='pt-24 flex justify-between'>
                    <div className='w-[20%]'>
                        <div className='flex items-center gap-4'>
                            <h3 className='font-Josefin font-bold text-2xl text-[#151875]'>Shop by Category</h3>
                            <BiSolidDownArrow className='text-[#151875]' />
                        </div>
                    </div>
                    <div className='w-[78%] flex flex-wrap justify-between'>
                    {data.map((product) => (
                         <div key={product.id} className='w-[32%] group pb-5'>
                         <div className='w-full py-14 flex items-center justify-center relative bg-[#F6F7FB] group-hover:bg-[#EBF4F3] overflow-hidden'>
                             <img className='h-44 object-cover' src={product.thumbnail} alt="shopimg" />
                             <div className='cursor-pointer flex flex-col items-center absolute gap-3 -bottom-40 left-5 group-hover:bottom-5 duration-500 ease-in-out'>
                                 <div className='w-10 h-10 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><BsCart3 className='text-[#151875] text-lg' /></div>
                                 <div className='w-10 h-10 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><FaRegHeart className=' text-[#151875] text-lg' /></div>
                                 <div className='w-10 h-10 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><LuSearchX className='text-[#151875] text-lg' /></div>
                             </div>
                         </div>
                         <div className='text-center pt-5'>
                             <h2 className='font-Josefin text-lg font-bold text-[#151875] overflow-hidden text-ellipsis whitespace-nowrap'>{product.title}</h2>
                             <div className='flex gap-2 pt-2 justify-center'>
                                 <div className='w-3 h-3 rounded-full bg-[#DE9034]'></div>
                                 <div className='w-3 h-3 rounded-full bg-[#EC42A2]'></div>
                                 <div className='w-3 h-3 rounded-full bg-[#8568FF]'></div>
                             </div>
                             <div className='flex gap-3 pt-4 justify-center'>
                                 <h5 className='font-Josefin text-sm text-[#151875]'>{product.price}</h5>
                                 <h5 className='font-Josefin text-sm text-[#FB2E86] line-through'>$26.00 </h5>
                             </div>
                         </div>
                     </div>
                    ))}
                       
                    </div>
                </div>
                <div className='flex gap-2 justify-center text-[#3f519e77] pt-10'>
                    <button className='px-4 py-2 border-2 text-base'>Privious</button>
                    <button className='px-4 py-2 border-2 text-base'>1</button>
                    <button className='px-4 py-2 border-2 text-base'>2</button>
                    <button className='px-4 py-2 border-2 text-base'>3</button>
                    <button className='px-4 py-2 border-2 text-base'>4</button>
                    <button className='px-4 py-2 border-2 text-base'>5</button>
                    <button className='px-4 py-2 border-2 text-base'>6</button>
                    <button className='px-4 py-2 border-2 text-base'>7</button>
                    <button className='px-4 py-2 border-2 text-base'>Next</button>
                </div>
            </div>
        </section>
    )
}

export default ShopProducts

