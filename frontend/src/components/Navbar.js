import React from 'react'
import '../css/Navbar.css'

import logo from '../components/Assets/logo.png'
import cart_icon from '../components/Assets/cart_icon.png'


export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li>Shop<hr/></li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="cart_icon" />
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  )
}
