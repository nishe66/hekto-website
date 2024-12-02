import React from 'react'
import aboutImg from '../assets/aboutimg.png'
import { Link } from 'react-router-dom'

const AboutEcommerce = () => {
  return (
    <section className='py-24'>
        <div className='container mx-auto'>
          <div className='flex justify-between items-center'>
            <div className='w-1/2'>
                <img className='' src={aboutImg} alt="aboutimg" />
            </div>
            <div className='w-1/2 mr-10'>
                <h2 className='text-[#151875] font-Josefin font-bold text-4xl pr-5  pb-3'>Know About Our Ecomerce
                Business, History</h2>
                <p className='font-Lato text-[#8A8FB9] font-semibold pr-16 pb-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                <div className='font-Lato text-lg text-[#FFFFFF] font-semibold'>
                    <Link to='/contact' className='inline-block py-3 px-8 bg-[#FB2E86] rounded'>Contact Us</Link>
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default AboutEcommerce





