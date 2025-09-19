import React from 'react'
import Hero from './Hero'
import About from './About'
import CategorySelector from './CategorySelector'
import FeaturedCollections from './OurCraft'
import Productcollection from './Productcollection'

const Homepage = () => {
  return (
   <>
   <Hero />
   <About/>
   <CategorySelector/>
   <FeaturedCollections/>
   <Productcollection />
   </>
  )
}

export default Homepage