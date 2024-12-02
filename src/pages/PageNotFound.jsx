import React from 'react'
import Logos from '../components/Logos'
import PageError from '../components/PageError'
import Reusedhero from '../components/Reusedhero'


const PageNotFound = () => {
  return (
    <div>
    <Reusedhero title="404 Not Found" titlename=" . 404 Not Found"/>
    <PageError/>
    <Logos/>
    </div>
  )
}

export default PageNotFound

