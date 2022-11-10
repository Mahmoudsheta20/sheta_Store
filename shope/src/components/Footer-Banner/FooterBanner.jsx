import React from 'react'
import './Footer.css'


import { Link } from 'react-router-dom'
import { urlFor } from '../../client'
import { useStateContext } from '../../context/StoreContext'
import {AiOutlineShoppingCart} from 'react-icons/ai'
const FooterBanner = () => {
  const {dataBanner} = useStateContext()

  return (
    <div className='app__footer'>
   {dataBanner && (
      <div className="footer-banner-container">
      <div>
      <div className="footer-banner-left">
      <p className="beats-solo">{dataBanner.discount} OFF</p>
        <h3>{dataBanner.largeText1}</h3>  
        <p className="beats-solo">20 Nov to 30 dec</p>
       
           
          
</div>
    <div className="hero-banner-right">
           <img src={urlFor(dataBanner.image)}  alt="headphones" className="hero-banner-image" />

</div>  
<div className="footer-banner-left">
      <p className="beats-solo">{dataBanner.smallText}</p>
        <h3>{dataBanner.midText}</h3>  
          
        <Link to={`/details/${dataBanner._id}}`}>
            <button type="button"><AiOutlineShoppingCart/> Shop Now</button>
          </Link>
</div>


    
      


        <div>
        
          {/* <div className="desc">
            <h5>Description</h5>
            <p>{data.desc}</p>
          </div> */}
        


        </div>
      </div>
    </div>
   )}

    
  


    
    </div>
  )
}

export default FooterBanner