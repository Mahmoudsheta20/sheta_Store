/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './Footer.css'
import {IoIosSend, IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube} from 'react-icons/io'
import {BiPhone} from 'react-icons/bi'
import {AiOutlineMail} from  'react-icons/ai'
import {IoEarth} from 'react-icons/io5'
import {BiMap} from 'react-icons/bi'
const Footer = () => {
  return (
    <div className='app__footers'>
    <div className="app__footers-top">
        <div className="icon_footer">
            <IoIosSend/>
            <p>Sign up for Newsletter</p>
            <span></span>
        </div>

        <div className="email">
            <input type="email" className='email__input' placeholder='Enter You email address' />
            <button>Subscribe</button>
        </div>
    </div>
    <div className="app__footers-bottom">
        <div className="icons">

        <h2>Sheta</h2>
        <div>
        <IoLogoFacebook/>
   <IoLogoTwitter/>
  <IoLogoYoutube/>
  <IoLogoInstagram/>    
        </div>


        </div>

<div className="content">
    <h2>About Us</h2>
    <p>Home</p>
    <p>our goals</p>
    <p>Blogs</p>
    <p>Privacy Policy</p>

</div>
<div className="content">
    <h2>Contact Us</h2>
    <p><span><BiPhone/></span> +20 010-500-76-550</p>
    <p><span><AiOutlineMail/></span> mahmoudsheta789@gmail.com</p>
    <p><span><IoEarth/></span>  <a href="https://sheta.netlify.app/"  target={'_blank'}>Our Website</a> </p>
    <p><span><BiMap/></span>Egypt,  Cairo </p>

  
</div>


    </div>

    
    <div className="copy">
        <p>Made With By @ MAHMOUD SHETA

</p>
    </div>
    </div>
  )
}

export default Footer