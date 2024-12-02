import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import postimg from '../../assets/postimg1.png'
import postImg from '../../assets/postimg2.png'
import postimge from '../../assets/postimg3.png'
import Postimg from '../../assets/postimg4.png'
import saImg from '../../assets/saleimg1.png'
import saimg from '../../assets/saleimg2.png'
import saImge from '../../assets/saleimg3.png'
import offrimg1 from '../../assets/offerimg1.png'
import offrimg2 from '../../assets/offerimg2.png'
import offrimg3 from '../../assets/offerimg3.png'
import offrimg4 from '../../assets/offerimg4.png'
import { Link } from 'react-router-dom';

const Blogcategories = () => {
  return (
    <section>
        <div className='container'>
          <div className=''>
             <div>
               <h4 className="text-[#151875] font-Josefin text-[22px] font-semibold pb-4">Search</h4>
               <div className='relative'>
                <input type="text" placeholder='Search For Posts' className='border-2 py-2 pr-10 pl-5' />
                <IoSearch className='text-2xl text-gray-300 absolute top-2 left-48' />
               </div>
            </div>
            <div className='pt-10'>
                <h4 className='text-[#151875]  text-[22px] font-semibold font-Josefin pb-6'>Categories</h4>
                <div className='text-[#3F509E]'>
                    <div className='flex gap-8 pb-3'>
                        <span className='bg-[#F939BF] py-2 px-6 rounded text-white'>Hobbies(14)</span>
                        <span>Women(21)</span>
                    </div>
                    <div className='flex gap-20 pb-3'>
                        <span>Hobbies(14)</span>
                        <span>Women(21)</span>
                    </div>
                    <div className='flex gap-20'>
                        <span>Hobbies(14)</span>
                        <span>Women(21)</span>
                    </div>
                    
                </div>
            </div>
            <div>
                <h4 className='text-[#151875]  text-[22px] font-semibold font-Josefin pt-9'>Recent Post</h4>
                <div className='pt-8'>
                    <div className='flex gap-5 pb-6'>
                        <div>
                            <img className='rounded-sm' src={postimg} alt="postimg" />
                        </div>
                        <div>
                            <p className='text-[#3F509E] font-Josefin font-semibold'>It is a long established fact</p>
                            <p  className='text-[#8A8FB9] font-Josefin'>Aug 09 2020</p>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center pb-6'>
                        <div>
                            <img className='rounded-sm' src={postImg} alt="postimg" />
                        </div>
                        <div>
                            <p className='text-[#3F509E] font-Josefin font-semibold'>It is a long established fact</p>
                            <p className='text-[#8A8FB9] font-Josefin'>Aug 09 2020</p>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center pb-6'>
                        <div>
                            <img className='rounded-sm' src={postimge} alt="postimg" />
                        </div>
                        <div>
                            <p className='text-[#3F509E] font-Josefin font-semibold'>It is a long established fact</p>
                            <p className='text-[#8A8FB9] font-Josefin'>Aug 09 2020</p>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center pb-6'>
                        <div>
                            <img className='rounded-sm' src={Postimg} alt="postimg" />
                        </div>
                        <div>
                            <p className='text-[#3F509E] font-Josefin font-semibold'>It is a long established fact</p>
                            <p className='text-[#8A8FB9] font-Josefin'>Aug 09 2020</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-9'>
                <h4 className='text-[#151875]  text-[22px] font-semibold font-Josefin pb-9'>Sale Product</h4>
                <div>
                    <div className='flex gap-5 items-center pb-4'>
                        <div>
                            <img src={saImg} alt="saleimg" />
                        </div>
                        <div>
                            <p className='text-[#3F509E] font-Josefin font-semibold'>It is a long established fact</p>
                            <p className='text-[#8A8FB9] font-Josefin'>Aug 09 2020</p>
                        </div> 
                    </div>
                    <div className='flex gap-5 items-center pb-4'>
                        <div>
                            <img src={saimg} alt="saleimg" />
                        </div>
                        <div>
                            <p className='text-[#3F509E] font-Josefin font-semibold'>Viverra pulvinar et enim.</p>
                            <p className='text-[#8A8FB9] font-Josefin'>Aug 09 2020</p>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center pb-4'>
                        <div>
                            <img src={saImge} alt="saleimg" />
                        </div>
                        <div>
                            <p className='text-[#3F509E] font-Josefin font-semibold'>Mattis varius donec fdsfd</p>
                            <p className='text-[#8A8FB9] font-Josefin'>Aug 09 2020</p>
                        </div>
                    </div>
                   
                </div>
            </div>
            <div className='pt-9'>
                <h4 className='text-[#151875]  text-[22px] font-semibold font-Josefin pb-9'>Offer product</h4>
                <div>
                    <div className='flex gap-10'>
                        <div>
                            <div>
                            <img src={offrimg1} alt="offerimg" />
                            </div>
                            <div className='text-center pt-3'>
                            <p className='text-[#151875] font-Josefin font-semibold text-sm'>Duis lectus est.</p>
                            <p className='text-[#8A8FB9] font-Lato font-semibold text-xs'>$12.00 - $15.00</p>
                            </div>
                        </div> 
                        <div>
                            <div>
                            <img src={offrimg2} alt="offerimg" />
                            </div>
                            <div className='text-center pt-3'>
                            <p className='text-[#151875] font-Josefin font-semibold text-sm'>Duis lectus est.</p>
                            <p className='text-[#8A8FB9] font-Lato font-semibold text-xs'>$12.00 - $15.00</p>
                            </div>
                        </div> 
                    </div>
                    <div className='flex gap-10 pt-5'>
                        <div>
                            <div>
                            <img src={offrimg3} alt="offerimg pt-3" />
                            </div>
                            <div className='text-center'>
                            <p className='text-[#151875] font-Josefin font-semibold text-sm'>Duis lectus est.</p>
                            <p className='text-[#8A8FB9] font-Lato font-semibold text-xs'>$12.00 - $15.00</p>
                            </div>
                        </div>
                        <div>
                            <div>
                            <img src={offrimg4} alt="offerimg pt-3" />
                            </div>
                            <div className='text-center'>
                            <p className='text-[#151875] font-Josefin font-semibold text-sm'>Duis lectus est.</p>
                            <p className='text-[#8A8FB9] font-Lato font-semibold text-xs'>$12.00 - $15.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-9'>
                <h4 className='text-[#151875]  text-[22px] font-semibold font-Josefin pb-5'>Follow</h4>
                <div className='flex items-center gap-3'>
                <div className='text-white w-8 h-8 flex items-center justify-center bg-[#5625DF] rounded-full'>
                <FaFacebookF className='text-xl'/>
                </div>
                <div className='text-white w-8 h-8 flex items-center justify-center bg-[#FF27B7] rounded-full'>
                <AiFillInstagram className='text-xl'/>
                </div>
                <div className='text-white w-8 h-8 flex items-center justify-center bg-[#37DAF3] rounded-full'>
                <FaTwitter className='text-xl'/>
                </div>
                </div>
            </div>
            <div className='pt-9'>
                <h4 className='text-[#151875]  text-[22px] font-semibold font-Josefin pb-5'>Tags</h4>
                <div>
                    <ul className='flex gap-5 font-Lato'>
                        <li><Link className='underline text-[#151875]'>General</Link></li>
                        <li><Link className='underline text-[#FB2E86]'>Atsanil</Link></li>
                        <li><Link className='underline text-[#151875]'>Insas.</Link></li>
                    </ul>
                    <ul className='flex gap-5 pt-2'>
                        <li><Link className='underline text-[#151875]'>Bibsaas</Link></li>
                        <li><Link className='underline text-[#151875]'>Nulla.</Link></li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Blogcategories


