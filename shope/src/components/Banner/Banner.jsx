import React,{useState} from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'
import { urlFor } from '../../client'
import { useStateContext } from '../../context/StoreContext'
import {AiOutlineShoppingCart} from 'react-icons/ai'
const Banner = () => {
  const {heroBanner,data} = useStateContext()

   
  return (
   
    <div className='app__banner'>
     {data && (
      <div className="hero-banner-container">
      <div>
<div className="hero-banner-left">
      <p className="beats-solo">{data.smallText}</p>
        <h3>{data.midText}</h3>  
          
        <Link to={`/details/${data._id}`}>
            <button type="button"><AiOutlineShoppingCart/> Shop Now</button>
          </Link>
</div>
<div className="hero-banner-right">
           <img src={urlFor(data.image)}  alt="headphones" className="hero-banner-image" />

</div>

    

      </div>
    </div>
     )}

      


    
    </div>
  )
}

export default Banner