import React from 'react'
import Hero from './Hero'
import About from './About'
import CategorySelector from './CategorySelector'
import FeaturedCollections from './OurCraft'
import Productcollection from './Productcollection'
import Application from './Application'
import CuttingProcessSection from './CuttingProcessSection'
import Testimonials from './Testimonials'

const Homepage = () => {
  return (
   <>
   <Hero />
   <About/>
   <CategorySelector/>
   {/* <FeaturedCollections/> */}
   <Productcollection />
   {/* <Application/> */}
   <CuttingProcessSection/>
   {/* <Testimonials/> */}

 
   </>
  )
}

export default Homepage   