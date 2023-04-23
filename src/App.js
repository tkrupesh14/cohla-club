import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Slide1 from './components/slide-1/Slide1';
import Slide2 from './components/slide-2/Slide2';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Slide3 from './components/slide-3/Slide3';
import Slide4 from './components/slide-4/Slide4';
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  if(isDarkMode === false){
    document.body.style.backgroundColor = '#081133';
    
  }else{
    document.body.style.backgroundColor = '#FFE0CA';
    
  }

  return (
    <>
    <BrowserRouter>
    <NavBar isDarkMode={isDarkMode} toggleMode={toggleMode}/>
    <Routes>
      <Route path='/' element={<Slide1 isDarkMode={isDarkMode} toggleMode={toggleMode}/>} />
      <Route path='/slide2' element={<Slide2 isDarkMode={isDarkMode} toggleMode={toggleMode}/>} />
      <Route path='/slide3' element={<Slide3 isDarkMode={isDarkMode} toggleMode={toggleMode}/>} />
      <Route path='/slide4' element={<Slide4 isDarkMode={isDarkMode} toggleMode={toggleMode}/>} />
    
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
