import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navabr from './components/navbar'
import Hero from './components/hero'
import ProductShowCase from './components/productShowCase'
import ProductTimeLine from './components/productTimeLine'
import FeaturesPage from './components/feature'
import CommunityPage from './components/community'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navabr />
      <Hero />
      <ProductShowCase />
      <ProductTimeLine />
      <FeaturesPage />
      <CommunityPage />
      <Footer />
      
    </>
  )
}

export default App
