import React from 'react'
import Hero from './Hero'
import RightSection from './RightSection'
import LeftSection from './LeftSection'
import Universe from './Universe'
import Footer from '../Footer'
import Navbar from '../Navbar'

const ProductPage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <RightSection/>
      <LeftSection/>
      <Universe/>
      <Footer/>
    </div>
  )
}

export default ProductPage
