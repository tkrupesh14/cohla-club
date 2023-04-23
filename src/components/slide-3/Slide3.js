import React from 'react'
import {Link} from 'react-router-dom';
import './Slide3.css'
import ImgLight from './img-light.svg'
import {AiFillCaretRight, AiFillCaretLeft} from 'react-icons/ai'
import Img from './img.svg'
function Slide3(props) {
  return (
    <div>
      <div className="container-fluid slide-1">
        <div className="row py-4">
          <div className="col-md-2">
          <span className="right-icon"> <Link to='/slide2'> <AiFillCaretLeft className={`${props.isDarkMode ? 'icon-dark' : 'icon' }`}/></Link></span>
          </div>
          <div className="col-md-8 h-100 d-flex flex-column align-items-center justify-content-center">
            <h1 className={`text-center ${props.isDarkMode ? "slide3-title-dark" : "slide3-title"}`}>it's simple</h1>
            <p className={`text-center ${props.isDarkMode ? "slide3-pera-dark" : "slide3-pera"}`}>
              just choose the industry where your question belongs and we'll connect you with a working member of that industry in under 6 hours!
            </p>
          
          </div>
          <div className="col-md-2">
          <span className="right-icon">  <Link to='/slide4'>  <AiFillCaretRight className={`${props.isDarkMode ? 'icon-dark' : 'icon' }`}/> </Link></span>
          </div>
        </div>
      </div>
      <div className="slider-div">
        <hr className='slider3'/>
        </div>
    </div>
  )
}

export default Slide3
