import React from 'react'
import './Home.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '../cards/Card'
import {useStateContext} from '../../context/StoreContext'
import FooterBanner from '../Footer-Banner/FooterBanner'
const Home = () => {

  const {Items,categroy} = useStateContext()


const handleCategroy = (id) =>{
let filter  = Items.filter(item  => item.categroyName._ref === id)

  return filter
}





const settings = {
  className: "center",

  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  
  responsive: [
   
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
       
      }
    },
    
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
       
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1 ,
         centerMode: true,
      }
    }
  ]
};

  return (
    <div className='app__home'>
 




<div className="app__card-center">
  <Slider {...settings}>
 
{Items.map(item => (

<Card key={item._id} item={item}/>

))}

</Slider>
</div>




 






 {categroy.map(e => (
  <div className="app__categroy">

 <h2>{e.name}</h2>
<div className="app__home-cards">
   {handleCategroy(e._id).map(item => (
  <Card key={item._id} item={item}/>

 )) }
</div>


  </div>
 
 
))} 




<FooterBanner/>


    </div>
  )
}

export default Home