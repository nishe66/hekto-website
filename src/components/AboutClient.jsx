import React from 'react'
import maleClient from '../assets/maleclient.png'
import feClient from '../assets/femaleclient.png'
import mleClient from '../assets/mleclient.png'

const AboutClient = () => {
  return (
    <section className='bg-[#EEEFFB] py-14 mb-60'>
        <div className='container mx-auto'>
            <div>
                <div className='font-Josefin font-bold text-[#000000] text-center text-4xl'>
                    <h2>Our Client Say!</h2>
                </div>
                <div className='py-20'>
                    <div className='flex items-center justify-center gap-3 pb-8'>
                    <div><img className='rounded-md'src={maleClient} alt="clientimg" /></div>
                    <div className='-mt-6'><img className='rounded-md' src={feClient} alt="clientimg" /></div>
                    <div><img className='rounded-md'src={mleClient} alt="clientimg" /></div>
                    </div>
               <div className='w-1/2 text-center mx-auto'>
                <h4 className='text-[#151875] font-Josefin font-semibold text-[22px] pb-3'>Selina Gomez</h4>
                <h5 className='font-Lato font-semibold text-[#8A8FB9] text-xs -mt-3'>Ceo At Webecy Digita</h5>
                <p className='text-[#8A8FB9] font-Lato font-bold pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
                </div>
                </div>
            </div>
            <div className='flex justify-center gap-3 -mt-10'>
                <div className='w-10 h-2 bg-[#fb2e8799] rounded-full'></div>
                <div className='w-12 h-2 bg-[#FB2E86] rounded-full'></div>
                <div className='w-10 h-2 bg-[#fb2e8799] rounded-full'></div>
            </div>
        </div>
    </section>
  )
}

export default AboutClient

