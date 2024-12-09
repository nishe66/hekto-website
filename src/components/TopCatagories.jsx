import React from 'react'
import catagoriesimg from '../assets/topcatagories.png'
import { Link } from 'react-router-dom'
// import Slider from "react-slick";

const TopCatagories = () => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 200,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //   };

    return (
        <section className='pt-20 pb-28'>
            <div className='container mx-auto'>
                <div>
                    <h2 className='text-[#1A0B5B] font-Josefin text-[42px] font-bold pb-20 text-center'>Top Categories</h2>
                </div>
                <div className=''>
                    {/* <Slider {...settings} > */}
                    <div className='w-[23%] relative group'>
                        <div className='w-[270px] h-[270px] bg-[#F6F7FB] rounded-full flex items-center justify-center overflow-hidden relative'>
                            <img className='h-44 object-cover' src={catagoriesimg} alt="topcatagoriesimg" />
                            <button className='py-2 px-5 rounded bg-[#08D15F] text-[#FFFFFF] absolute -bottom-14 left-20 group-hover:bottom-8 ease-in-out  duration-500 opacity-0 group-hover:opacity-100'><Link className='font-Josefin font-medium text-sm'>View Shop</Link></button>
                        </div>
                        <div className='w-[270px] h-[270px] group-hover:bg-[#9877E7] rounded-full absolute top-2 -left-2 -z-10 opacity-0 group-hover:opacity-100 ease-in-out duration-500'></div>
                        <div className='pt-7 text-center'>
                            <p className='font-Josefin text-[#151875] text-xl'>Mini LCW Chair</p>
                            <p className='font-Josefin text-[#151875] text-base pt-2'>$56.00</p>
                        </div>
                    </div>
                    {/* </Slider> */}
                </div>
            </div>
        </section>
    )
}

export default TopCatagories

