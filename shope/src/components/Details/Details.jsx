import React,{useState} from 'react'
import {useParams} from 'react-router-dom'
import './Details.css'
import { useStateContext } from '../../context/StoreContext'
import Navbar from '../Navbar/Navbar'
import {AiOutlinePlus , AiOutlineMinus,AiOutlineShoppingCart} from 'react-icons/ai'
import {MdLocalShipping,MdSecurity} from 'react-icons/md'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {GiReturnArrow} from 'react-icons/gi'
import DetailsOverview from '../Details-Overview/DetailsOverview'
import Specifications from '../Specifications/Specifications'
import Reviews from '../Reviews/Reviews'
import Card from '../cards/Card'
import { urlFor } from '../../client'
const Details = () => {
   const {id} =  useParams()

const {Items, decQty, incQty, Qty,addToCartQuanity} = useStateContext()
let items  = ['OVERVIEW','Specifications','Reviews']
const [state, setstate] = useState(0);
const [show, setshow] = useState(true);
const [showSection, setshowSection] = useState('');

   const item = Items.filter(item => item.slug.current ===  id)
   const itemCard = Items.filter(item => item.slug.current !==  id)
console.log(item)



const handleShow = ()=>{

if(showSection === 'Reviews'){
 return   <Reviews/>
}
else if (showSection === 'Specifications') {
  return <Specifications/>
} else {
  return  <DetailsOverview/>
}


}

const settings = {

 
   dots: false,
   infinite: false,
   speed: 500,
   slidesToShow: 3,
   slidesToScroll: 2,}


  return (

<>
{show ? <>




<Navbar/>

<div className="app__details">

{item.map(i => (
<div className='app__details-container' key={i._name}>
    <div className="app__details-image">
    <div className='app__details-img'>
          <img src={ urlFor(i.image[state])} alt={i.name} />
    </div>
  
        <div className="app__details-images">
        <Slider {...settings}>
      
         {i.image.map((img, index) => (
             <img src={urlFor(img)} alt={i.name} onMouseMove={()=> setstate(index)} />
        ))}
       
          
 
        </Slider>
       
        </div>
        
    </div>

    <div className="app__details-add">
    <p> {i.brand ? i.brand :'Nokia' } </p>
        <h2>{i.name}</h2> 
      
       <span className='app__details-details'>{i.details}</span>
        
      {i.discount ?<h3>${parseInt(i.price - (i.discount /100) * i.price )}.00<span>{i.discount}%</span></h3>
       :<h3>${i.price }.00</h3>}  
    {i.discount && (<span className='discount'>${i.price}</span>)} 

    

        <div className="app__details-buttom">
  <div className="app__cart-cards-count">
          <p onClick={decQty}><AiOutlineMinus/></p>
       <p>{Qty}</p>
        <p onClick={incQty} ><AiOutlinePlus/></p>
        </div>


            <button onClick={()=> addToCartQuanity(i, Qty)} > <span><AiOutlineShoppingCart/></span> Add to cart</button>
       
          
        </div>

    </div>


  

     </div>
))}


  <div className="app__details-cards">
  <div className="app__details-card">
     <MdLocalShipping/>
     <h2>Fast Shipping</h2>
     <p>Free shipping when you Order Over $100</p>
  </div>
  <div className="app__details-card">
     <GiReturnArrow/>
     <h2>FREE RETURNS
</h2>
     <p>Get free returns on eligible items
</p>
  </div>
  <div className="app__details-card">
     <MdSecurity/>
     <h2>
SECURE SHOPPING</h2>
     <p>Your data is always protected</p>
  </div>
   


    </div>






</div>     



<div className="app__details-reviwe">
<div className="app__details-reviwe-list">
   <ul>
   {items.map((item, index) =>(
      <li key={item} style={{color: ` ${showSection === item ? 'blue' : ''} `}} onClick={()=> setshowSection(item) }>{item}</li>
   ))}


</ul>
</div>


      <div className='app__DetailsOverview'>
{handleShow()}

      </div>


      <div className="app__home-cards">
     {itemCard.map(item => (

<Card key={item.id} item={item}/>
))}


      </div>
 
</div>


 
   
</> : <div className="ovelay"><span></span></div>}
</>


   
  )
}

export default Details