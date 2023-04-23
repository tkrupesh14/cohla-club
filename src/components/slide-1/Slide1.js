import React from 'react'
import {Link} from 'react-router-dom';
import './Slide1.css'
import ImgLight from './img-light.svg'
import {AiFillCaretRight} from 'react-icons/ai'
import Img from './img.svg'

function Slide1(props) {
  return (
    <div>
      <div className="container-fluid slide-1">
        <div className="row py-4">
          <div className="col-md-2"></div>
          <div className="col-md-8 h-100 d-flex align-items-center">
            <h1 className={` ${props.isDarkMode ? "slide1-title-dark" : "slide1-title"}`}>feeling <br />clueless?</h1>
            {props.isDarkMode ? <img src={Img} alt='' className='slide1-img' /> : <img src={ImgLight} alt="" className='slide1-img' />}
          </div>
          <div className="col-md-2">
            <span className="right-icon"> <Link to='/slide2'> <AiFillCaretRight className={`${props.isDarkMode ? 'icon-dark' : 'icon' }`}/></Link></span>
          </div>
        </div>
      </div>
      <div className="slider-div">
        <hr className='slider1'/>
        </div>
    </div>
  )
}

export default Slide1
