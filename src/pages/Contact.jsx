import React from 'react'
import Reusedhero from '../components/Reusedhero'
import ContactAbout from '../components/ContactAbout'
import GetintouchContact from '../components/GetintouchContact'

const Contact = () => {
  return (
    <div>
      <Reusedhero title="Contact Us" titlename=" . Contact Us"/>
      <ContactAbout/>
      <GetintouchContact/>
    </div>
  )
}

export default Contact
