import React from 'react'
import '../css/Cart.css'
import CartItems from '../components/cartItems/CartItems'

export default function Cart() {
  return (
    <div className='cart'>
      <CartItems/>
    </div>
  )
}
