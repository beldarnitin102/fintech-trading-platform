import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomePage from './landing_page/home/HomePage.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from "./landing_page/signup/Signup.jsx"
import AboutPage from "./landing_page/about/AboutPage.jsx"
import ProductPage from "./landing_page/products/ProductPage.jsx"
import PricingPage from "./landing_page/pricing/PricingPage.jsx"
import SupportPage from "./landing_page/support/SupportPage.jsx"
import Footer from './landing_page/Footer.jsx'
import Navbar from './landing_page/Navbar.jsx'
import NotFound from './landing_page/NotFound.jsx'
import "react-toastify/dist/ReactToastify.css"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
  <Routes>

    <Route path='/home' element={<HomePage/>}/>

    <Route path='/signup' element={<Signup/>}/>

    <Route path='/about' element={<AboutPage/>}/>

    <Route path='/Product' element={<ProductPage/>}/>

    <Route path='/Pricing' element={<PricingPage/>}/>

    <Route path='/Support' element={<SupportPage/>}/>

    <Route path='*' element={<NotFound/>}/>



  </Routes>
  <Footer/>
  </BrowserRouter>
)
