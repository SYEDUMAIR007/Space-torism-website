import React,{useContext} from 'react'
import {Outlet} from "react-router-dom";
import Navbar from '../components/Navbar';
import MyContext from '../Context/UserContext'

const Layout = () => {
  const {bgImg}=useContext(MyContext)
  const className =
    bgImg === 'Home'
      ? 'homepg'
      : bgImg === 'Destination'
      ? 'destinationspg'
      : bgImg === 'Crew'
      ? 'crewpg'
      : 'launchpg';
  return (
    <div className={className}>
   
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout