import React from 'react'

const Reusedhero = (props) => {
  return (
    <section className='bg-[#F6F5FF] py-24'>
        <div className='container mx-auto'>
        <div>
            <h2 className='font-Josefin font-bold text-[#101750] text-4xl pb-2'>{props.title}</h2>
            <h4 className='font-Lato font-medium text-[#000000]'>Home . Pages <span className='text-[#FB2E86]'>{props.titlename}</span></h4>
        </div>
        </div>
    </section>
  )
}

export default Reusedhero
