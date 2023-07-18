import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';

const Navbar = () => (
  <>
    <nav>
      <p className="logo">
        <img src={planet} alt="logo" className="logo-image" />
        <span className="logo-name">Space Travelers&apos; Hub</span>
      </p>
      <div className="navLinks">
        <NavLink className="link" to="/">
          Rockets
        </NavLink>
        <NavLink className="link" to="/missions">
          My Missions
        </NavLink>
        <NavLink className="link" to="/myprofile">
          My Profile
        </NavLink>
      </div>
    </nav>
  </>
);

export default Navbar;
