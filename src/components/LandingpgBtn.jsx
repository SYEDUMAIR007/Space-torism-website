import React, { createElement } from 'react'
import { useState } from 'react';

const LandingpgBtn = () => {
  const[hover,setHover]=useState(false);
const toggleHover=()=>{
    setHover(!hover)
}
  return (
    <span className={hover? 'landingpgBtn-hover ':''}>
    <button className={hover? 'landingpgBtn ':'landingpgBtn landingpg-Margin'} onMouseEnter={toggleHover}
    onMouseLeave={toggleHover}>EXPLORE</button>
    </span>
  )
}

export default LandingpgBtn