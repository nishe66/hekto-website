import React from 'react'
import errorimg from '../assets/error.png'
import { Link } from 'react-router-dom'
const PageError = () => {
  return (
    <section className='pb-5'>
      <div className='container mx-auto'>
        <div>
          <img className='mx-auto' src={errorimg} alt="" />
        </div>
      </div>
    </section>
  )
}

export default PageError
