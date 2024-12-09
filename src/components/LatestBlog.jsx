import React from 'react'
import Blogimg1 from '../assets/latestblog1.png'
import Blogimg2 from '../assets/latestblog2.png'
import Blogimg3 from '../assets/latestblog3.png'
import { FaPenNib } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import { Link } from 'react-router-dom';

const LatestBlog = () => {
    return (
        <section className='pb-24'>
            <div className='container mx-auto'>
                <div>
                    <h2 className='text-[#1A0B5B] font-Josefin text-[42px] font-bold pb-20 text-center'>Leatest Blog</h2>
                </div>
                <div className='flex justify-between'>
                    <div className='w-[30%] shadow-lg group'>
                        <img className='pb-5 w-full' src={Blogimg1} alt="latestblog" />
                        <div className='px-5 pb-9'>
                            <div className='flex gap-7 pb-8'>
                                <div className='flex items-center gap-2'>
                                    <FaPenNib className='text-[#FB2E86]' />
                                    <h5 className='font-Josefin text-[#151875] text-base'>SaberAli</h5>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <LuCalendarDays className='text-[#FFA454]' />
                                    <h5 className='font-Josefin text-[#151875] text-base'>21 August,2020</h5>
                                </div>
                            </div>
                            <h3 className='font-Josefin text-[#151875] group-hover:text-[#FB2E86] font-bold text-lg pb-4'>Top esssential Trends in 2021</h3>
                            <p className='font-Lato text-[#72718F] text-base pb-4 pr-5'>More off this less hello samlande lied much
                                over tightly circa horse taped mightly</p>
                            <div>
                                <Link className='font-Lato text-[#151875] group-hover:text-[#FB2E86] text-base underline'>Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-[30%] shadow-lg group'>
                        <img className='pb-5 w-full' src={Blogimg2} alt="latestblog" />
                        <div className='px-5 pb-9'>
                            <div className='flex gap-7 pb-8'>
                                <div className='flex items-center gap-2'>
                                    <FaPenNib className='text-[#FB2E86]' />
                                    <h5 className='font-Josefin text-[#151875] text-base'>SaberAli</h5>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <LuCalendarDays className='text-[#FFA454]' />
                                    <h5 className='font-Josefin text-[#151875] text-base'>21 August,2020</h5>
                                </div>
                            </div>
                            <h3 className='font-Josefin text-[#151875] group-hover:text-[#FB2E86] font-bold text-lg pb-4'>Top esssential Trends in 2021</h3>
                            <p className='font-Lato text-[#72718F] text-base pb-4 pr-5'>More off this less hello samlande lied much
                                over tightly circa horse taped mightly</p>
                            <div>
                                <Link className='font-Lato text-[#151875] group-hover:text-[#FB2E86] text-base underline'>Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-[30%] shadow-lg group'>
                        <img className='pb-5 w-full' src={Blogimg3} alt="latestblog" />
                        <div className='px-5 pb-9'>
                            <div className='flex gap-7 pb-8'>
                                <div className='flex items-center gap-2'>
                                    <FaPenNib className='text-[#FB2E86]' />
                                    <h5 className='font-Josefin text-[#151875] text-base'>SaberAli</h5>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <LuCalendarDays className='text-[#FFA454]' />
                                    <h5 className='font-Josefin text-[#151875] text-base'>21 August,2020</h5>
                                </div>
                            </div>
                            <h3 className='font-Josefin text-[#151875] group-hover:text-[#FB2E86] font-bold text-lg pb-4'>Top esssential Trends in 2021</h3>
                            <p className='font-Lato text-[#72718F] text-base pb-4 pr-5'>More off this less hello samlande lied much
                                over tightly circa horse taped mightly</p>
                            <div>
                                <Link className='font-Lato text-[#151875] group-hover:text-[#FB2E86] text-base underline'>Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LatestBlog



