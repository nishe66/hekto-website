import React from 'react'
import blgimg1 from '../../assets/blogimg1.png'
import blgimg2 from '../../assets/blogimg2.png'
import blgimg3 from '../../assets/blogimg3.png'
import Reusedblogimg from './Reusedblogimg'
import Blogcategories from './Blogcategories'
const Blogmid = () => {
  return (
    <section className='py-24'>
      <div className='container mx-auto'>
        <div className='flex gap-14'>
          <div className='w-[60%]'>
           <Reusedblogimg blogimage={blgimg1} heading="Mauris at orci non vulputate diam tincidunt nec." description="consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. 
            Adipiscing purus, cursus vulputate id id dictum at."/>
            <Reusedblogimg blogimage={blgimg2} heading="Aenean vitae in aliquam ultrices lectus. Etiam." description="consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. 
            Adipiscing purus, cursus vulputate id id dictum at."/>
            <Reusedblogimg blogimage={blgimg3} heading="Sit nam congue feugiat nisl, mauris amet nisi. " description="consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. 
            Adipiscing purus, cursus vulputate id id dictum at." />
          </div>
          <div className='w-[40%]'>
            <Blogcategories />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blogmid



