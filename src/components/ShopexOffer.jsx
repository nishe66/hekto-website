import React from 'react'
import deliveryimg from '../assets/freedelivery.png'
import cashbackimg from '../assets/cashback.png'
import qualityimg from '../assets/premiumquality.png'
import hoursimg from '../assets/24hours.png'

const ShopexOffer = () => {
    return (
        <section className='pt-14'>
            <div className='container mx-auto'>
                <div>
                    <div className='font-Josefin font-bold text-[#151875] text-center text-4xl'>
                        <h2>What Shopex Offer!</h2>
                    </div>
                    <div className='flex justify-between gap-5 py-20'>
                        <div className='w-1/4 text-center py-12  flex justify-center flex-col items-center px-10 shadow-lg border-b-2 hover:border-[#FF9100] transition'>
                            <img className='pb-5' src={deliveryimg} alt="delivery-img" />
                            <h4 className='text-[#151875] font-Josefin font-semibold text-[22px] pb-4'>Free Delivery</h4>
                            <p className='font-Lato font-bold text-[#1a0b5b5f]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>
                        <div className='w-1/4 text-center py-12 flex justify-center flex-col items-center px-10 shadow-lg border-b-2 hover:border-[#FF9100] transition'>
                            <img className='pb-5' src={cashbackimg} alt="cashback-img" />
                            <h4 className='text-[#151875] font-Josefin font-semibold text-[22px] pb-4'>Free Delivery</h4>
                            <p className='font-Lato font-bold text-[#1a0b5b5f]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>
                        <div className='w-1/4 text-center py-12 flex justify-center flex-col items-center px-10 shadow-lg border-b-2 hover:border-[#FF9100] transition'>
                            <img className='pb-5' src={qualityimg} alt="quality-img" />
                            <h4 className='text-[#151875] font-Josefin font-semibold text-[22px] pb-4'>Free Delivery</h4>
                            <p className='font-Lato font-bold text-[#1a0b5b5f]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>
                        <div className='w-1/4 text-center py-12 flex justify-center flex-col items-center px-10 shadow-lg border-b-2 hover:border-[#FF9100] transition'>
                            <img className='pb-5' src={hoursimg} alt="hours-img" />
                            <h4 className='text-[#151875] font-Josefin font-semibold text-[22px] pb-4'>Free Delivery</h4>
                            <p className='font-Lato font-bold text-[#1a0b5b5f]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default ShopexOffer

