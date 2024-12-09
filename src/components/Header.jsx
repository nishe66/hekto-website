import React from 'react'
import { CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";
import { LuUser } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { LiaShoppingCartSolid } from "react-icons/lia";
const Header = () => {
  return (
    <header className='bg-[#7E33E0] py-3  text-[#F1F1F1] font-Josefin font-semibold'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-12'>
            <div className='flex items-center gap-2'>
              <CiMail />
              <h3>mhhasanul@gmail.com</h3>
            </div>
            <div className='flex items-center gap-2'>
              <FiPhoneCall />
              <h3>(12345)67890</h3>
            </div>
          </div>
          <div className=''>
            <ul className='flex items-center gap-5'>
              <li className='flex items-center gap-2'>
                <select name="" id="" className='bg-transparent outline-none'>
                  <option className='bg-[#7E33E0]' value="">English <FaAngleDown /></option>
                  <option className='bg-[#7E33E0]' value="">Bangla <FaAngleDown /></option>
                  <option className='bg-[#7E33E0]' value="">Arabic <FaAngleDown /></option>
                </select></li>
              <li className='flex items-center gap-2'>
                <select name="" id="" className='bg-transparent outline-none'>
                  <option className='bg-[#7E33E0]' value="">USD <FaAngleDown /></option>
                  <option className='bg-[#7E33E0]' value="">BDT <FaAngleDown /></option>
                  <option className='bg-[#7E33E0]' value="">Riyal <FaAngleDown /></option>
                </select>
              </li>
              <li className='flex items-center gap-2'>Login <LuUser /></li>
              <li className='flex items-center gap-2'>Wishlist <FaRegHeart /></li>
              <li className='flex items-center gap-5'> <LiaShoppingCartSolid className='text-2xl' /></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
