import React from 'react'
import { Link } from 'react-router-dom'
import { FaPenNib } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";


const Reusedblogimg = (props) => {
  return (
  <section>
    <div className='container mx-auto'>
       <div className='flex'>
       <div>
        <div className='pb-10'>
            <img className='pb-7' src={props.blogimage} alt="blogimg" />
            <div className='flex font-Josefin text-sm text-[#151875] gap-5 pb-7'>
                <div className='flex items-center gap-2'>
                    <FaPenNib className='text-[#FB2E86]' /> 
                    <h5 className='py-2 px-8 bg-[#FFECE2] rounded'>Surf Auxion</h5>
                </div>
                <div className='flex items-center gap-2'>
                        <LuCalendarDays className='text-[#FFA454]'/>
                        <h5 className='py-2 px-8 bg-[#FFECE2] rounded'>Aug 09 2020</h5>
                </div>
                </div>
             <div>
                <h2 className='text-[#151875] font-Josefin font-bold text-3xl pb-6'>{props.heading}</h2>
                <p className='text-[#8A8FB9] font-Lato pb-7'>{props.description}</p>
             </div>
             <div className='text-[#151875]'>
                <Link className='text-lg font-semibold'>Read More <span className='text-[#F939BF] font-bold'>.</span></Link>
            </div>
        </div>
       </div>
        
       </div>
    </div>
  </section>
  )
}

export default Reusedblogimg

