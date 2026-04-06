import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Product from './components/Product'
import Products from './components/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
          <nav>
              <Link to = "/">Home</Link> {     }
              <Link to = "/about">About</Link> {     }
              <Link to = "/contact">Contact</Link> {     }
              <Link to = "/products">Product</Link> {     }
              <Link to = "/notfound"></Link> 

          </nav>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<Product />} />
              <Route path='*' element={<NotFound/>}/>  
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
