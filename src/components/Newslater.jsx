import React from 'react'
import { Link } from 'react-router-dom'

const Newslater = () => {
    return (
        <section className='bg-newsletter bg-cover bg-center h-[462px]'>
            <div className='container mx-auto flex h-full items-center justify-center'>
                <div className='text-center w-1/2'>
                    <h2 className='text-[#151875] font-Josefin font-bold text-4xl pb-6 leading-[54px]'>Get Leatest Update By Subscribe
                        0ur Newslater</h2>
                    <button className='bg-[#FB2E86] py-3 px-8 rounded'><Link className='font-Josefin text-lg text-[#FFFFFF]'>Shop Now</Link></button>
                </div>
            </div>
        </section>
    )
}

export default Newslater

