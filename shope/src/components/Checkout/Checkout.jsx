import React from 'react'
import './Checkout.css'
import {useStateContext} from '../../context/StoreContext'
import {BsArrowLeft} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import {IoTrashOutline}from 'react-icons/io5'
import { urlFor } from '../../client'
const Checkout = () => {

    const {cartItems,showCart,setshowCart,totalPrice,deleteItem} = useStateContext()
  return (

<>
{showCart && (
         <div className='app__checkout'>
         <div className="app__icon">
 <BsArrowLeft onClick={()=> setshowCart(false)} />
         </div>
        
<div className="app__checkout-top">
      {cartItems.map(item => (

<div className='app__cart-cards' key={item.id}>

<div className="app_cart-left">
  <div className="app__cart-image">
<img src={urlFor(item.image[0])} alt="" />
</div>
<div className="app__cart-price">

<p>{item.name} <span>{item.quantity}x</span></p>
<span>${item.price * item.quantity}</span>

</div>
</div>



<div className="app__checkout-icon" onClick={() =>deleteItem(item)}>
    <IoTrashOutline/>
</div>

</div>
))}
</div>



<div className="app__checkout-bottom">
  <div className="app__checkout-total">
<p>Total</p>

<span>{totalPrice}</span>

</div>
<div className="app__checkout-button">
<Link to={'/cart'}>
    <button onClick={()=> setshowCart(false)}>Checkout</button>
</Link>
    
</div>
</div>



</div>    
)}
 
</>
  





  )
}

export default Checkout