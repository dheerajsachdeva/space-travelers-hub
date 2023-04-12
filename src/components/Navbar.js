import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png'

const Navbar = () => (
    <>
  <div className="flex navbar">
    <div className="flex section1">
      <div className="logo"><img src = {planet}></img><div><h2>Space Travelers' Hub</h2></div></div>
      <div>
        <ul>
          <NavLink className="links" to="/">Rockets</NavLink>
          <NavLink className="links" to="/missions">Missions</NavLink>
          <NavLink className="links" to="/myprofile">My Profile</NavLink>
        </ul>
      </div>
    </div>
   
  </div>
  <div className='divider'> <hr></hr></div>
  </>
);

export default Navbar;
