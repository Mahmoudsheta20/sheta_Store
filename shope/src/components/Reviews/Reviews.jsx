import React from 'react'
import {IoMdStar} from 'react-icons/io'
import './Reviews.css'
const Reviews = () => {
  return (
    <>
      <div className='app__reviews'>
    <div className="app__reviews-rating">
<div className="left__reviews">
  <h2>Overall Rating</h2>
  <h3>4.5</h3>
  <div className="ico">
    <IoMdStar/>
    <IoMdStar/>
    <IoMdStar/>
    <IoMdStar/>
  </div>
<p>Based on 4 rating</p>
</div>

<div className="right__reviews">
  <div className="progress">
    <span>5</span> <IoMdStar/>
    <div className="overlay">
     <span></span>
    </div>


  </div>
  <div className="progress">
  <span>4</span> <IoMdStar/>
    <div className="overlay">
     <span></span>
    </div>


  </div>
  <div className="progress">
  <span>3</span><IoMdStar/>
    <div className="overlay">
     <span></span>
    </div>


  </div>
  <div className="progress">
  <span>2</span><IoMdStar/>
    <div className="overlay">
     <span></span>
    </div>


  </div>
  <div className="progress">
  <span>1</span><IoMdStar/>
    <div className="overlay">
     <span></span>
    </div>


  </div>
</div>
    </div>
   
   <div className='app__reviews-container'>
    <div className="app__reviews-Customer">
<div className="app__reviews-Customer-image">
<div className="app__reviews-Customer-img">
  m
</div>
  
  <div className="app__reviews-name">
    <p>Mahmoud Sheta</p>
    <div className="icon_review">
    <IoMdStar/>
    <IoMdStar/>
    <IoMdStar/>
    <IoMdStar/>
  </div>
    <span>23 Aug 2022</span>
  </div>
</div>
<div className="app__reviews-Customer-chat">
  <p>Lorem ipsum dolor sit amet.</p>
</div>
</div>
    <div className="app__reviews-Customer">
<div className="app__reviews-Customer-image">
<div className="app__reviews-Customer-img">
  m
</div>
  
  <div className="app__reviews-name">
    <p>Mahmoud Sheta</p>
    <div className="icon_review">
    <IoMdStar/>
    <IoMdStar/>
    <IoMdStar/>
    <IoMdStar/>
  </div>
    <span>23 Aug 2022</span>
  </div>
</div>
<div className="app__reviews-Customer-chat">
  <p>Lorem ipsum dolor sit amet.</p>
</div>
</div>
    <div className="app__reviews-Customer">
<div className="app__reviews-Customer-image">
<div className="app__reviews-Customer-img">
  m
</div>
  
  <div className="app__reviews-name">
    <p>Mahmoud Sheta</p>
    <div className="icon_review">
    <IoMdStar/>
    <IoMdStar/>
    <IoMdStar/>
    <IoMdStar/>
  </div>
    <span>23 Aug 2022</span>
  </div>
</div>
<div className="app__reviews-Customer-chat">
  <p>Lorem ipsum dolor sit amet.</p>
</div>
</div>

   </div>






    </div>

    <div className="app__reviews-button">
   <button disabled="disabled">prev Page</button> 
<button >Next Page</button>


</div>
    </>
    
    
    
  )
}

export default Reviews