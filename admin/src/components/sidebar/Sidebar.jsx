import React from 'react'
import '../../css/Sidebar.css'
import {Link} from 'react-router-dom'
import addproduct_icon from '../../assets/Admin_Assets/Product_Cart.svg'
import listproduct_icon from '../../assets/Admin_Assets/Product_list_icon.svg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to='{/addproduct}' style={{ textDecoration: 'none' }}>
        <div className='sidebar-item'>
          <img src={addproduct_icon} />
          <p>Add product</p>
        </div>
      </Link>
      <Link to='{/listproduct}' style={{ textDecoration: 'none' }}>
        <div className='sidebar-item'>
          <img src={listproduct_icon} />
          <p>Product list</p>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar