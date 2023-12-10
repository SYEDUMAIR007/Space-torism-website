import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { hamburger, logo, close } from '../assets/assets';
import MyContext from '../Context/UserContext';

const Navbar = () => {
  const { menuOpen, setMenuOpen, setBgImg } = useContext(MyContext);
  const [activeState,setActiveState]=useState(false)

  const toggleSidebar = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleBg = (link) => {
    setBgImg(link);
    
  };


  return (
    <nav className="navbar">
      <i>
        <img id="logo" src={logo} alt="logo" />
      </i>
      <div className="horizontal-line-container"></div>
      <i>
        <img className="menu-button" src={hamburger} alt="hamburger-menu" onClick={toggleSidebar} />
      </i>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <i>
          <img className="close-btn" src={close} alt="close" onClick={toggleSidebar} />
        </i>
        
        <li><span className="serialNo">00</span>
          <NavLink
            to="/"
            className={activeState?'active':''}
            onClick={() => {
              toggleBg('Home');
            }}

          >
            HOME
          </NavLink>
        </li>
       
        <li> <span className="serialNo">01</span>
          <NavLink
            to="/destination"
            className={activeState?'active':''}
            onClick={() => {
              toggleBg('Destination');
            }}
          >
            DESTINATION
          </NavLink>
        </li>
        
        <li><span className="serialNo">02</span>
          <NavLink
            to="/crew"
            className={activeState?'active':''}
            onClick={() => {
              toggleBg('Crew');
            }}
          >
            CREW
          </NavLink>
        </li>
        
        <li><span className="serialNo">03</span>
          <NavLink
            to="/technology"
            className={activeState?'active':''}
            onClick={() => {
              toggleBg('Technology');
            }}
          >
            TECHNOLOGY
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
