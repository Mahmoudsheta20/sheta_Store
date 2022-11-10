import React from 'react'
import {useStateContext} from '../../context/StoreContext'
import './Cart.css'
import {IoTrashOutline}from 'react-icons/io5'

import {AiOutlinePlus , AiOutlineMinus} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import{BsArrowLeft} from 'react-icons/bs'
import { urlFor } from '../../client'

const Cart = () => {
  const {cartItems,toggleCartItemQuanitity,count,totalPrice,deleteItem} = useStateContext()


  return (
    <div className='app__cart'>

    
 <div className="app__cart-product">
      <div className='app__cart-header'>
<h1>Shopping Cart</h1>
<p>{cartItems.length} Items</p>
</div>

    {cartItems.map(item => (

        <div className='app__cart-cards'>
<div className="app__cart-left">
   <div className="app__cart-cards-image">
<img src={urlFor(item.image[0])} alt="" />

    </div>
<div className="app__cart-cards-name">
        
        <p>{item.name}</p>
    </div>
</div>
<div className="app__cart-right">
    <div className="app__cart-count">
    <p onClick={ ()=> toggleCartItemQuanitity(item._id, 'dec')}><AiOutlineMinus/></p>
       <p>{item.quantity}</p>
        <p onClick={ ()=> toggleCartItemQuanitity(item._id, 'inc')}><AiOutlinePlus/></p>
    </div>
    <div className="app__cart-cards-price">
    
       <div>
         <p>${item.price}<span>x{item.quantity}</span></p>
          
       </div>
     
    


    </div>
    <div className="app__cart-cards-price">
    

       <div>
        
          <p id='total'>${item.price * item.quantity}</p>
       </div>


    </div>
    <div className="app__checkout-icon" onClick={() =>deleteItem(item)}>
    <IoTrashOutline/>
</div>
</div>


   
    </div>
    ))}
      <Link to={'/'} className='Continue-a'>
    <p className='Continue'><BsArrowLeft/> Continue Shopping</p>

   </Link>
    </div>

   

    <div className="app__cart-checkout">
    <div className='app__cart-header'>
<h1>Order Summary</h1>

</div>

<div className="app__cart-cards-price">
      <p>{count} Items</p>
       <p>{totalPrice}</p>
 </div>
<div className="app__cart-cards-shapping">
      <p>SHAPPING</p>
      <input type="text" name="" id="" />
      
 </div>
<div className="app__cart-cards-shapping">
      <p>PROMO CODE</p>
      <input type="text" name="" id="" />

      <button>APPLY</button>
      
 </div>


 <div className="app__cart-cards-price-cehckout">
      <p>Total Cost</p>
       <p>{totalPrice}</p>

    
 </div>
   <button className='app__cart-checkout-button'>SHECKOUT</button>
    </div>
 
    </div>
  )
}

export default Cart