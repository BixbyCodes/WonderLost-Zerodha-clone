import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from './landing__page/home/HomePage';
import About from "./landing__page/about/AboutPage"
import ProductPage from "./landing__page/products/ProductPage"
import PricingPage from "./landing__page/pricing/PricingPage"
import SupportPage from "./landing__page/support/SupportPage"
import NotFound from './landing__page/NotFound';
import Navbar from './landing__page/Navbar';
import Footer from './landing__page/Footer';
import Signup from "./landing__page/Signup/Signup"
import TryAi from './AI/TryAi';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path='/' element={<HomePage />}></Route>
     <Route path='/signup' element={<Signup />}></Route>
      <Route path='/about' element={<About />}></Route>
       <Route path='/product' element={<ProductPage />}></Route>
        <Route path='/pricing' element={<PricingPage />}></Route>
         <Route path='/support' element={<SupportPage />}></Route>
          <Route path='/TryAi' element={<TryAi />}></Route>
           <Route path='*' element={<NotFound />}></Route>


  </Routes>
  <Footer />
  </BrowserRouter>
);

