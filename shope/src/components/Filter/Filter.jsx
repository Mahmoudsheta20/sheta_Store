import React,{useState,useRef,useEffect} from 'react'
import {useStateContext} from '../../context/StoreContext'
import './Filter.css'
const Filter = ({setmin, setmax,handleBrand,handelFilter,cheked,setchecked,name }) => {
   const [min, setMin] = useState(0);
   const [max, setMax] = useState(10000);
const {brand} = useStateContext()



const handlePrice = ()=>{
setmin(min)
setmax(max)
}

// eslint-disable-next-line no-array-constructor




const itemsEls = useRef([])
itemsEls.current = []
const getRef = (element) =>{
  if(element && !itemsEls.current.includes(element)){
    itemsEls.current.push(element)
  }
  console.log(itemsEls.current)
  
}


useEffect(() => {

itemsEls.current.forEach(e => e.checked = false )
}, [name]);

  return (
    <div className='app__filter'>
    <div className="app__filter-categories">
    <h3>Brand</h3>
 
        {brand.map(categorie =>(
          
            <div className='app__filter-categories-form' key={categorie._id} onClick={() => setchecked(true) } >
          <input className='input_one' ref={getRef} type="checkbox" id={categorie._id}  name={categorie.name} value={categorie.name} onChange={(e) => handleBrand(categorie._id, e.target.checked)}  />  
            <label htmlFor={categorie.name}> {categorie.name}</label><br />
            <p>({ handelFilter(categorie.name).length})</p> 
            </div>
         
          
        ))}

           
       
    </div>
   
<div className="app__filter-range">
<h3>Price Range</h3>
<div className="app__filter-range-input">
        <input type="number" name="Min" id="Min" placeholder='Min' onChange={(e)=> setMin(e.target.value)} value={min} />
    <input type="number" name="Max" id="Max" placeholder='Max'  onChange={(e)=> setMax(e.target.value)} value={max}/>
</div>
<div className="app_filte-button">
     <button onClick={handlePrice}>GO</button>
</div>
   
</div>

    </div>
  )
}

export default Filter