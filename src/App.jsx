import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navabr from './components/navbar'
import Hero from './components/hero'
import ProductShowCase from './components/productShowCase'
import ProductTimeLine from './components/productTimeLine'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navabr />
      <Hero />
      <ProductShowCase />
      <ProductTimeLine />
    </>
  )
}

export default App
