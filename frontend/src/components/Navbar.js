import React, { useState } from 'react';
import '../css/Navbar.css'

import logo from '../components/Assets/logo.png'
import cart_icon from '../components/Assets/cart_icon.png'


export default function Navbar() {

  const [menu,setMenu] = useState("shop");

  return (

    <div className="navbar">

      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>

      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}>Men{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}>Women{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}>Kids{menu==="kids"?<hr/>:<></>}</li>
      </ul>

      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="cart_icon" />
        <div className="nav-cart-count">0</div>
      </div>

    </div>
  )
}
