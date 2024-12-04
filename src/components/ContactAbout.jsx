import React from 'react'

const ContactAbout = () => {
  return (
    <section className='py-20'>
      <div className='container mx-auto'>
        <div className='flex justify-between'>
          <div className='w-1/2'>
            <h2 className='font-Josefin font-bold text-[#151875] text-4xl pb-3'>Information About us</h2>
            <p className='text-[#8A8FB9] font-Lato font-semibold pr-20 pb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
            <div className='flex gap-5'>
              <div className='w-6 h-6 rounded-full bg-[#5625DF]'></div>
              <div className='w-6 h-6 rounded-full bg-[#FF27B7]'></div>
              <div className='w-6 h-6 rounded-full bg-[#37DAF3]'></div>
            </div>
          </div>
          <div className='w-1/2'>
            <div>
              <h2 className='font-Josefin font-bold text-[#151875] text-4xl pb-6'>Contact Way
              </h2>
            </div>
            <div className='flex gap-6 text-[#8A8FB9] font-Lato font-semibold'>
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 rounded-full bg-[#5625DF]'></div>
                <div>
                  <p>Tel: 877-67-88-99</p>
                  <p>E-Mail: shop@store.com</p>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 rounded-full bg-[#FF27B7]'></div>
                <div>
                  <p>Support Forum</p>
                  <p>For over 24hr</p>
                </div>
              </div>
            </div>
            <div className='flex gap-6 pt-12 text-[#8A8FB9] font-Lato font-semibold'>
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 rounded-full bg-[#FFB265]'></div>
                <div>
                  <p>20 Margaret st, London</p>
                  <p>Great britain, 3NM98-LK</p>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 rounded-full bg-[#1BE982]'></div>
                <div>
                  <p>Free standard shipping</p>
                  <p>on all orders.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactAbout



