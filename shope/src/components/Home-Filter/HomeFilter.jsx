import React,{useState, useEffect} from 'react'
import Filter from '../Filter/Filter'
import './HomeFilter.css'
import Navbar from '../Navbar/Navbar'
import {useParams} from 'react-router-dom'
import {useStateContext} from '../../context/StoreContext'
import Card from '../cards/Card'
const HomeFilter = () => {
const {name} = useParams() 
const {Items,categroy} = useStateContext()
const [max, setmax] = useState(10000);
const [min, setmin] = useState(0);
const [state, setstate] = useState([]);
const [BrandFilter, setBrandFilter] = useState([]);
const [cheked, setchecked] = useState(true);
const [showFilter, setshowFilter] = useState(false);

let BrandCategory  = categroy.find(item  => item.name  === name)





useEffect(() => {


let item = Items.filter(item => item.categroyName._ref === BrandCategory._id)
let prices = item.filter(item => item.price >= min || item.preice >= max )

   setstate([...prices])

  
  const changeArry = ()=>{
    setBrandFilter((prev) => prev.filter(item  => item.categroyName._ref === BrandCategory._id))
    }
    changeArry()

    setchecked(false)
}, [Items, BrandCategory , min, max,name]);




  const handelFilter = (name)=>{
    const filter =Items.filter(item =>  item.brand.toLowerCase() === name.toLowerCase())
    let brand = filter.filter(item  => item.categroyName._ref === BrandCategory._id)
    return brand
    }




    const handleBrand = (name, check)=>{
   
      if(check){
   
let Data = state.filter(item  => item.brandName._ref === name)
let Find = BrandFilter.find(item =>item.brandName._ref === name)

if(!Find){
  setBrandFilter([...BrandFilter, ...Data])
}
  }else{
let Data = BrandFilter.filter(item  => item.brandName._ref !== name)
        setBrandFilter(Data)
      }


    }








  return (

    <>
    <Navbar  showFilter={setshowFilter}/>
 <div className='Home__Filter'>
   
   {showFilter && (
    <div className="filter-min">
          <Filter setmax={setmax} setmin={setmin} handleBrand={handleBrand} handelFilter={handelFilter} cheked={cheked} setchecked={setchecked} />

    </div>

   )}
   <div className='filter-big'>
       <Filter setmax={setmax} setmin={setmin} handleBrand={handleBrand} handelFilter={handelFilter} cheked={cheked} setchecked={setchecked} name={name} />

   </div>

<div className="Home__Filter-cards">
{BrandFilter.length ? BrandFilter.map(item => (
  <Card key={item._id} item={item}/>
)) : 
state.map(item => (
  <Card key={item._id} item={item}/>
))

 }



</div>
    
    </div>

    </>
   
  )
}

export default HomeFilter