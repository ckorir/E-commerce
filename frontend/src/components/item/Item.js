import React from 'react'
import '../../css/Item.css'
import { Link } from 'react-router-dom'

export default function item(props) {

  // Function to handle smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={scrollToTop} src={props.image} alt='' /></Link>
      <p>{props.name}</p>
      <div className='item-prices'>
        <div className='item-price-new'>
          ${props.new_price}
        </div>
        <div className='item-price-old'>
          ${props.old_price}
        </div>
      </div>
    </div>
  )
}
