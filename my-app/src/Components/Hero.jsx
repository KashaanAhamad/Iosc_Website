import React from 'react'
import "./styleSheet/hero.css";
import cardImg from "../assets/robosoccer.jpg"

function Hero() {
  return (<>
      <div className='heading1'><h3>Our society</h3></div>
      <div className='headingMain'><h2><b>It's an interactive,</b> <i> real-life puzzle </i> <b> experience that will</b> <i> challenge your intelligence</i> <b>,<br /> creativity, and collaboration.</b></h2></div>
      
      <div className='subHeading'>
        <div></div><img className='cardPic' src={cardImg} alt="" />
        <div className='paraText'>
          <div><h2>Can you <i>beat the clock</i> and <i>escape</i> in time?</h2></div>
          <p><br />You and your team will step into a carefully crafted scenario and have a limited time to solve a series of mind-bending puzzles, riddles, and mysteries to find your way out.</p></div>
      </div>
        </>)
  
}

export default Hero