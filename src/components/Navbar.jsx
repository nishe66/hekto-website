import React  from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { FaAngleDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";


const Navbar = () => {
  return (
    <nav className='py-5 z-50 font-Lato'>
      <div className='container mx-auto '>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-24'>
            <div className=''>
              <Link to='/'><img className='inline-block object-cover' src={Logo} alt="imagenotfound" /></Link>
            </div>
            <div className='z-20'>
              <ul className='flex items-center gap-9'>
                <li className='group relative'><Link to='/' className='flex items-center gap-2 text-[#FB2E86]'>Home <FaAngleDown /></Link>
                  <ul className='absolute top-7 -left-8 w-32 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out text-[#FB2E86] bg-[#F2F0FF] shadow-md border'>
                    <li className='hover:bg-slate-300'><Link>Product-1</Link></li>
                    <li className='hover:bg-slate-300'><Link>Product-2</Link></li>
                    <li className='hover:bg-slate-300'><Link>Product-3</Link></li>
                    <li className='hover:bg-slate-300'><Link>Product-4</Link></li>
                  </ul>
                </li>
                <li><Link to='/about-us' className='text-[#0D0E43]'>About Us</Link></li>
                <li><Link to='*' className='text-[#0D0E43]'>Products</Link></li>
                <li><Link to='/blog' className='text-[#0D0E43]'>Blog</Link></li>
                <li><Link to='/shop' className='text-[#0D0E43]'>Shop</Link></li>
                <li><Link to='/contact' className='text-[#0D0E43]'>Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className='flex items-center relative'>
            <input type="text" className='border-2 sm:w-72 w-52 h-9 outline-none pl-4' />
            <button className='absolute top-0 right-0 bg-[#FB2E86] w-12 h-9 flex justify-center items-center text-2xl text-[#FFFFFF]'><IoSearch /></button>
          </div>
        </div>
     </div>
     </nav>
  )
}

export default Navbar


