import React from 'react'

function Stats() {
  return (
    <div className='container p-3'>
      <div className='row p-5'>
        <div className='col-6 p-5'>
          <h1 className='fs-5'>Trust with confidence</h1>
          <h3 className='fs-4'>Customer-first always</h3>
          <p className='text-muted'>Thats Why 1.3+ crore customer trust Wonder Lost with ₹3.5+ lakh crore worth of equity investmern.</p>
          <h3 className='fs-4'>No Span or gimmicks</h3>
          <p className='text-muted'>No gimmic spam gamification or annoying path nortificaation .High Quality apps that you use at your pace ,the way you like.</p>
          <h3 className='fs-4'>The Wonder Lost universe</h3>
      <p className='text-muted'>Not just an app but a whole ecosystem .Our investment in 30+ fintech startups offer you tailored serviuces specific to your needs.</p>
          <h3 className='fs-4'>Do better with money</h3>
          <p className='text-muted'>With initiaves like Nudge kill Switch we dont just facilitates transation but actually help you do better with your money.</p>
        </div>
        <div className='col-6 p-5'>
          <img src="images/ecosystem.png" style={{width:"90%"}}></img>
          <div className='text-center p-5'>
            <a href='' className='mx-5 ' style={{textDecoration:"none"}}>Explore Our Products <i class="fa-solid fa-arrow-right"></i></a>

            <a href=''style={{textDecoration:"none"}}>Try Kite <i class="fa-solid fa-arrow-right"></i></a>

          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Stats
