import { useState } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import CommunityPage from '../components/community'
import FeaturesPage from '../components/feature'
import ProductTimeLine from '../components/productTimeLine'
import ProductShowCase from '../components/productShowCase'
import Hero from '../components/hero'

function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <Hero />
      <ProductShowCase />
      <ProductTimeLine />
      <FeaturesPage/>
      <CommunityPage />
      
     
    </>
  )
}

export default HomePage
