import React from 'react'
import '../../css/Navbar.css'
import navlogo from '../../assets/nav-logo.svg'

export default function Navbar() {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="nav-logo" />
    </div>
  )
}
