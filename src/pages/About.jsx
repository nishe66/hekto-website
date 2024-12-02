import React from 'react'
import Reusedhero from '../components/Reusedhero'
import AboutEcommerce from '../components/AboutEcommerce'
import AboutFeatures from '../components/AboutFeatures'
import AboutClient from '../components/AboutClient'


const About = () => {
  return (
    <div>
    <Reusedhero title="About Us" titlename=" . About Us"/>
    <AboutEcommerce/>
    <AboutFeatures/>
    <AboutClient/>
    </div>
  )
}

export default About
