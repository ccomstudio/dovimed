import React from 'react'
import { FeaturedProducts, Hero, Services, PageHero } from '../components'
import Slider from '../components/Slider'

const HomePage = () => {
  return (
    <main>
      <PageHero/>
      <Slider/>
      <Hero />
      <Services />
      <FeaturedProducts />
    </main>
  )
}

export default HomePage
