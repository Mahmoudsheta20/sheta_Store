import React from 'react'
import {useStateContext} from '../../context/StoreContext'
import Navbar from '../Navbar/Navbar'
import './Love.css'
import { urlFor } from '../../client'
import {AiOutlineClose}from 'react-icons/ai'
import {Link} from 'react-router-dom'
const Love = () => {
const {LoveItem,deleteLove} = useStateContext()
console.log(LoveItem)
  return (
    <div className='app__love'>
    
    <Navbar/>
    <div className="app__love-main">
    {LoveItem.map(item => (
<Link to={`/details/${item.slug.current}`}>
<div className='app__love-cards'>
<div className="app__cart-left">
<div className="app__love-image">
<img src={urlFor(item.image[0])} alt="" />

</div>

</div>

<div className="app__love-right">
<div className="app__cart-cards-name">

<p>{item.name}</p>
</div>
<div className="app__cart-cards-price">

 <p>${item.price}</p>
  
</div>
<div className="app__love-icon" onClick={() =>deleteLove(item)}>
<AiOutlineClose/>
</div>

</div>



</div>
</Link>


))}


    </div>
    
    </div>
  )
}

export default Love