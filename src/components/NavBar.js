import React,{useState} from 'react'
import './NavBar.css'
function NavBar(props) {
  
  
  return (
    <div>
    <div className="container-fluid">
      <div className="row pt-4">
        <div className="col-md-2">
          <h2 className={`ps-5 ${props.isDarkMode ? "" : "text-white"}`} style={{fontWeight: '900'}}>about</h2>
        </div>
        <div className="col-md-8">
          <h2 className={`text-center ${props.isDarkMode ? "title" : "dark-mode-title"}`} style={{fontWeight: '900'}}>Cohla.club</h2>
        </div>
        <div className="col-md-2">
         
        <h2 onClick={props.toggleMode} style={{cursor:'pointer'}}>
        {props.isDarkMode ? '🌚' : '😎'}
      </h2>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NavBar
