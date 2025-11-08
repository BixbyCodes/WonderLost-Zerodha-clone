import React from 'react'
import { Link } from 'react-router-dom'

function OpenAccount() {
  return (
   <div className='container p-5 '>
     <div className='row text-center'>
        {/* <img src="images/homeHero.png"  alt="hero__image"  className='mb-5'/> */}
        <h1 className='mt-5'>
Open a your account
        </h1>
        <p>
Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>
        <Link to="/signup" className='p-3 btn btn-primary fs-5 mb-5' style={{width:"25%" , margin:"0 auto"}}>
Sign up for free
        </Link>
         </div>
    </div>
  )
}

export default OpenAccount
