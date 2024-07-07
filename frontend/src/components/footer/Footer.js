import React from 'react'
import '../../css/Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintrest_icon from '../Assets/pintrest_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt="logo" />
            <p>SHOPPER</p>
        </div>

        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <div className='footer-social-icon'>
            <div className='footer-icons-container'>
                <img src={instagram_icon} alt="instagram_icon" />
            </div>

            <div className='footer-icons-container'>
                <img src={pintrest_icon} alt="pintrest_icon" />
            </div>

            <div className='footer-icons-container'>
                <img src={whatsapp_icon} alt="whatsapp_icon" />
            </div>
        </div>
        <div className='footer-copyright'>
            <hr />
            <p>Copyright © 2024. All Rights Reserved.</p>
        </div>    
    </div>
  )
}
