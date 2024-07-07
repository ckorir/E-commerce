import React, { useContext } from 'react'
import '.././css/ShopCartegory.css'
import { ShopContext } from '../context/Context'

export default function ShopCartegory(props) {
  const {all_products} = useContext(ShopContext);

  return (
    <div className='shop-cartegory'>
      <img src={props.banner} alt="banner" />
    </div>
  )
}
