import React from 'react'
import Hero from './Hero'
import About from './About'
import CategorySelector from './CategorySelector'
import FeaturedCollections from './OurCraft'

const Homepage = () => {
  return (
   <>
   <Hero />
   <About/>
   <CategorySelector/>
   <FeaturedCollections/>
   
   </>
  )
}

export default Homepage