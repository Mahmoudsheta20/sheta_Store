import React from 'react'
import './Card.css'

import { useStateContext } from '../../context/StoreContext'
import { Link } from 'react-router-dom'
import { urlFor } from '../../client'
import {IoAddOutline} from 'react-icons/io5'
import {AiOutlineHeart} from 'react-icons/ai'
import {motion} from 'framer-motion'

const Card = ({item}) => {
  const {addToCart,AddToLove ,LoveItem} = useStateContext()




const LoveFind = (id)=>{
  let Find = LoveItem.find(item => item._id === id )
  return Find
}


  return (


<motion.div className='item'>
       <div className='app__main-card' >

{LoveFind(item._id) ? <button onClick={()=> AddToLove(item) } className='love active' style={{backgroundColor:'red'}}><AiOutlineHeart/></button>
:         <button onClick={()=> AddToLove(item) } className='love'><AiOutlineHeart/></button>
 }


<Link to={`/details/${item.slug.current}`}>
<div className="app__home-cards-image">
        <img src={urlFor(item.image[0])} alt={item.name} />
    </div>
    </Link>
    <div className="app__home-cards-name">
        <p>{item.name}</p>
    </div>
    <div className="app__home-cards-price">
       
       <div>
          

          <div className="app__card-discout">
                 {item.discount ?<h3>${parseInt(item.price - (item.discount /100) * item.price )}.00  <span>{item.discount}%</span> </h3>
       :<h3>${item.price }.00</h3>}  
    {item.discount && (<div className='app__card-discount'><p>${item.price}</p></div>)} 
          </div>
     
       </div>
      
        <button onClick={()=> addToCart(item) }><IoAddOutline/></button>
    </div>

    </div>
</motion.div>
     


 

 
  )
}

export default Card