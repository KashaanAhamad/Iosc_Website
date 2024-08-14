import React from 'react'
import "./NavBar.css";
import bgImg from "./bg-imeg.jpg"

function NavBar() {
  return (
    <>
    <img className='bgpic' src={bgImg} alt="" />
    <div className='navbg'>
      
    </div>
    <div className='navContent'>
        <ul>
          <li><a  href='https://www.google.com'>Home</a></li>
          <li><a href='https://www.google.com'>Home</a></li>
          <li >About Us</li>
          <li>Benefits</li>
          <li>Teams</li>
          <li>Our Club</li>
        </ul>
        <button className='btn'>Apply Now</button>

      </div>
    
    
     </>
  )
}

export default NavBar