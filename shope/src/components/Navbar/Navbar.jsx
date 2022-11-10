import React,{useState} from 'react'
import './Navbar.css'
import {BsShop,BsHandbag,BsHeart} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import { useStateContext } from '../../context/StoreContext'
import {BsSearch,BsHeartFill} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import dragon from '../../assets/dragon.jpg'
import {MdHomeFilled} from 'react-icons/md'
import {IoPerson} from 'react-icons/io5'
import {FaShoppingBag} from 'react-icons/fa'
import {CgMenuGridO} from 'react-icons/cg'
import {BiFilterAlt} from 'react-icons/bi'
const Navbar = ({showFilter}) => {
const {cartItems,setshowCart,Items,categroy,LoveItem} = useStateContext()
const [state, setstate] = useState('');
const [showcategory, setshowcategory] = useState(false);
const data = Items.filter(i => i.name.toLowerCase().includes(state)) 



  return (

    <>
       <div className='app__navbar'>

    <div className="app__container app__flex">
   <Link to={'/'}>
          <div className="app__navbar-logo">
      <BsShop/>
        <h2>SHETA</h2>
    </div>
   </Link>
   
<div className="app__serch">
    <div className="app__home-search">
    <div>
         <BsSearch/>
        <input type="text"  onChange={(e) => setstate(e.target.value.toLowerCase())} value={state}/>
        <AiOutlineClose onClick={() => setstate('')}/>
    </div>


    </div>
{state && (
      <div className="result__serach">
{data.length ? data.map(item => ( 
  <Link to={`/details/${item.slug.current}`}>
  <p>{item.name}</p>
</Link>
   
   
   
   
   )) : <p>Not Result</p>}

      
   

 

</div> 
)}



</div>
 
   
<div className="app__navbar-user" >


<div className="cart">
    <BsHandbag  onClick={()=> setshowCart(true)} />
  {cartItems.length ?   <p className='length-cart'>{cartItems.length}</p>:''}
</div>


<div className="cart">
  <Link to={'/love'}>
<BsHeart />
{LoveItem.length ?   <p className='Love-length'>{LoveItem.length}</p>:''}
</Link>
</div>



<div className="avtar">
<img src={dragon} alt="" />

</div>
</div>
    </div>


    <div className="app__catogiry app__flex">
   
   
 <div className="app__navbar-items">
    <ul>
      {categroy.map(item =>(
        <li key={item._id}>
        <Link to={`/filter/${item.name}`}>{item.name}</Link>

        
        </li>
      ))}
      </ul> 
    </div>

       
 
   

    </div>

    



   
    </div>

<div className="app__nav-min">

{showcategory && (
  <div className="app__catogiry_min">
   
   
   <div className="app__navbar-items">
      <ul>
        {categroy.map(item =>(
          <li key={item._id}>
          <Link to={`/filter/${item.name}`}>{item.name}</Link>
  
          
          </li>
        ))}
        </ul> 
      </div>
  
         
   
     
  
      </div>
  
)}





<div className="app__container app__flex">
   <Link to={'/'}>
          <div className="app__navbar-logo">
      <BsShop/>
        <h2>SHETA</h2>
    </div>
   </Link>
   
   <div className="category" onClick={() => setshowcategory(prev => !prev)}>
       <CgMenuGridO/>
   </div>



 
  
    </div>


<div className="app__serch">
    <div className="app__home-search">
    <div>
         <BsSearch/>
        <input type="text"  onChange={(e) => setstate(e.target.value.toLowerCase())} value={state}/>
        <BiFilterAlt onClick={() => showFilter(prev => !prev)}/>
        <AiOutlineClose onClick={() => setstate('')}/>
    </div>


    </div>
{state && (
      <div className="result__serach">
{data.length ? data.map(item => ( 
  <Link to={`/details/${item.slug.current}`}>
  <p>{item.name}</p>
</Link>
   
   
   
   
   )) : <p>Not Result</p>}

      
   

 

</div> 
)}



</div>

<div className="app__navbar-min">

<ul>
<li> <Link to={'/'}><MdHomeFilled/></Link> </li>
<li>   <FaShoppingBag onClick={()=> setshowCart(true)} />
  {cartItems.length ?   <p className='length-cart'>{cartItems.length}</p>:''}</li>

<li>  <Link to={'/love'}>
<BsHeartFill />
{LoveItem.length ?   <p className='Love-length'>{LoveItem.length}</p>:''}
</Link></li>

<li><IoPerson/></li>
</ul>


</div>
</div>



    </>
   
  )
}

export default Navbar