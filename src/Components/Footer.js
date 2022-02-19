import React from 'react'

const Footer = () => {
  return (
    <div className='footer py-4' style={{backgroundColor:'#032044'}}>
        <div className="social-icons  d-flex justify-content-center">

       <a href="/"><img src="Images/Icons/fb.png" alt="" height="30px" className='mx-2' /></a> 
      <a href="/"> <img src="Images/Icons/insta.png" alt="" height="30px" className='mx-2'/></a> 
      <a href="/">  <img src="Images/Icons/linkedin.png" alt=""height="30px" className='mx-2' /></a>
     <a href="/">  <img src="Images/Icons/twitter-icon.png" alt="" height="30px" className='mx-2'/></a>
        </div>
    
    <p style={{color:'white'}} className='text-center py-2'>2022 copyrights</p>
    </div>
  )
}

export default Footer