import React, { useEffect, useState } from 'react'
import '../../css/ListProduct.css'
import cross_icon from '../../assets/Admin_Assets/cross_icon.png'

const ListProduct = () => {

  const [allproducts, setAllProducts] = useState([]);

  // Fetch All Products
  const fetchAllProducts = async () => {
    await fetch('http://localhost:4000/allproducts')
    .then((response) => response.json())
    .then((data) => {setAllProducts(data)});
  }

  useEffect(() => {
    fetchAllProducts();
  }, [])

  return (
    <div className='listproduct'>
        <h1>All Products List</h1>
        <div className='listproduct-format-main' >
          <p>Products</p>
          <p>Title</p>
          <p>Old Price</p>
          <p>New Price</p>
          <p>Category</p>
          <p>Remove</p>
        </div>

        <div className='listproduct-allproducts' >
          <hr/>

          {allproducts.map((product,i) => (
            <div className='listproduct-format-main listproduct-format' key={i}>
              <img className='listproduct-product-icon' src={product.image} />
              <p>{product.name}</p>
              <p>{product.old_price}</p>
              <p>{product.new_price}</p>
              <p>{product.category}</p>
              <img className='listproduct-remove-icon' src={cross_icon} />
            </div>
          ))}
        </div>
    </div>
  )
}

export default ListProduct