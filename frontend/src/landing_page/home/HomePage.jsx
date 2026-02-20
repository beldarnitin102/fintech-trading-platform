import React from 'react'
import Hero from './Hero'
import Award from './Award'
import Pricing from './Pricing'
import Stats from './Stats'
import Education from './Education'
import OpenAccount from '../OpenAccount'
import Navbar from '../Navbar'
import Footer from '../Footer'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Award/>
      <Stats/>
      <Pricing/>
      <Education/>
      <OpenAccount/>
      <Footer/>

    </div>
  )
}

export default HomePage
