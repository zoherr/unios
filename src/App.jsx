import { useState } from 'react'

import './App.css'

import HomePage from './pages/homePage'
import ProductDetails from './pages/product-details'
import Product from './pages/product'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
