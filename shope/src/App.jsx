import './App.css';
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route} from 'react-router-dom'
import Cart from './components/Cart/Cart'
import Details from './components/Details/Details'
import Checkout from './components/Checkout/Checkout'
import React from 'react';
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import HomeFilter from './components/Home-Filter/HomeFilter'
import Love from './components/Love/Love'
function App() {





  return (
    <>
    <div className="overlay__home"><p>Hello world</p></div>
       <div className="App">

       
<Routes>

<Route path='/' element={

<>
   <Navbar/>
<Banner/>
  <Home/>
</>
 
   


  


}/>

 
      
     <Route path='/cart' element={<Cart/>}/>

<Route path='/details/:id' element={<Details/>}/>
<Route path='/filter/:name' element={<HomeFilter/>}/>
<Route path='/love' element={<Love/>}/>


    
</Routes>
   <Checkout/>
 <Footer/>
    </div>
    
    </>
  

  );
}

export default App;
