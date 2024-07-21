import React from 'react';
import '../../css/Navbar.css';
import navlogo from '../../assets/Admin_Assets/nav-logo.svg';
import navprofile from '../../assets/Admin_Assets/nav-profile.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo} alt="nav-logo" />
      <img className='nav-profile' src={navprofile} alt="nav-profile" />
    </div>
  );
};

export default Navbar;

