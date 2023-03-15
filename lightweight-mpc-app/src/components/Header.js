import React, {useRef} from 'react'
import '../css/Header.css'
import logo from '../img/equinor_logo.jpg'


function Header() { // Function written in JSX
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const ImageStyle = {height: "75px", width: "75px", transform: "translate(750px, 18px)"}  
  
  
  
  return (
    <div className='Header'>  
      <h1> Light Weight MPC </h1>
      <img src={logo} alt='Equinor logo'
        style={ImageStyle}
      ></img>
    </div>
  )
}

// Classname is to add CSS

export default Header