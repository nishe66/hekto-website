import React from 'react'
import heroleftimg from '../assets/hero.png'
import herorightimg from '../assets/sofahero.png'
const Hero = () => {
  return (
   <section className='bg-[#F2F0FF] py-20 overflow-hidden'>
    <div className='container mx-auto'>
     <div className='flex items-center justify-between'>
     <img className='w-80 h-80 -mt-64 -ml-10 'src={heroleftimg} alt="heroimg" />
        <div className='w-[60%] -ml-16 relative'>
           <h4 className='text-[#FB2E86] font-bold font-Lato pb-3'>Best Furniture For Your Castle....</h4>
            <h1 className='text-[#000000] font-Josefin font-bold  text-[53px] pb-3'>New Furniture Collection
            Trends in 2020</h1>
            <p className='text-[#8A8FB9] font-bold font-Lato pr-16 pb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
            in phasellus non in justo.</p>
            <button className='text-[#FFFFFF] font-semibold font-Josefin bg-[#FB2E86]
             py-3 px-8 rounded'>Shop Now</button>
             <div className='w-3 h-3 rounded-full bg-[#FB2E86] absolute top-64 -left-36'></div>
        </div>
        <div className='w-[40%] pr-10'>
            <img className='w-full'src={herorightimg} alt="sofa-img" />
        </div>
     </div>
    </div>
   </section>
  )
}

export default Hero
