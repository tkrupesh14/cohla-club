import React from 'react'
import {Link} from 'react-router-dom';
import './Slide2.css'
import ImgLight from './img-light.svg'
import {AiFillCaretRight, AiFillCaretLeft} from 'react-icons/ai'
import Img from './img.svg'
function Slide2(props) {
  return (
    <div>
      <div className="container-fluid slide-1">
        <div className="row py-4">
          <div className="col-md-2">
          <span className="right-icon"> <Link to='/'> <AiFillCaretLeft className={`${props.isDarkMode ? 'icon-dark' : 'icon' }`}/></Link></span>
          </div>
          <div className="col-md-8 h-100 d-flex align-items-center justify-content-center">
            <h1 className={`text-center ${props.isDarkMode ? "slide2-title-dark" : "slide2-title"}`}>we're here <br />to help!</h1>
          
          </div>
          <div className="col-md-2">
            <span className="right-icon">  <Link to='/slide3'>  <AiFillCaretRight className={`${props.isDarkMode ? 'icon-dark' : 'icon' }`}/> </Link></span>
          </div>
        </div>
      </div>
      <div className="slider-div">
        <hr className='slider2'/>
        </div>
    </div>
  )
}

export default Slide2
