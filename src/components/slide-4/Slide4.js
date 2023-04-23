import React from 'react'
import {Link} from 'react-router-dom';
import './Slide4.css'
import ImgLight from './img-light.svg'
import {AiFillCaretRight, AiFillCaretLeft} from 'react-icons/ai'
import Img from './img.svg'
function Slide4(props) {
  return (
    <div>
      <div className="container-fluid slide-1">
        <div className="row py-4">
          <div className="col-md-2">
          <span className="right-icon"> <Link to='/slide3'> <AiFillCaretLeft className={`${props.isDarkMode ? 'icon-dark' : 'icon' }`}/></Link></span>
          </div>
          <div className="col-md-8">
            <iframe src="https://tally.so/r/mVGeZN" frameborder="0" width='100%' height='100%'></iframe>
          
          </div>
          <div className="col-md-2">
          
          </div>
        </div>
      </div>
      <div className="slider-div">
        <hr className='slider4'/>
        </div>
    </div>
  )
}

export default Slide4
