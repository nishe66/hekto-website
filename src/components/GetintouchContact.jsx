import React from 'react'
import getintouchimg from '../assets/GetinTouch.png'
const GetintouchContact = () => {
  return (
   <section className='py-20'>
    <div className='container mx-auto'>
    <div className='flex items-center justify-between'>
        <div className='w-1/2 font-Lato text-[#8A8FB9]'>
        <div className=''>
            <h2 className='font-Josefin font-bold text-[#151875] text-4xl pb-5'>Get In Touch</h2>
            <p className='text-[#8A8FB9] font-Lato font-semibold pb-11 pr-44'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
        </div>
           <div className='flex justify-between'>
           <div className='pb-8'>
            <input type="name" placeholder='Your Name*' className='w-full border-2 py-4 pr-28 pl-5 outline-none' required />
            </div>
            <div className=''>
            <input type="email" placeholder='Your E-mail' className='w-full border-2 py-4 pr-28 pl-5 outline-none' required/>
            </div>
           </div>
           <div className='pb-9'>
             <input type="text" placeholder='Subject*' className='w-full border-2 py-4 px-5 outline-none' required />
           </div>
           <div className='pb-8'>
           <textarea id="message" name="message"  placeholder="Type Your Messege*" className='w-full border-2 h-52 p-5 outline-none' required></textarea>
           </div>
           <button className='py-3 px-10 bg-[#FB2E86] text-lg text-[#FFFFFF] font-Josefin rounded'>Send Mail</button>
        </div>
        <div className='w-1/2'>
           <img src={getintouchimg} alt="getintouch-img" />
        </div>
      </div>
    </div>
   </section>
  )
}

export default GetintouchContact

