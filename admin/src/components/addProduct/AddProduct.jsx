import React from 'react'
import '../../css/AddProduct.css'
import upload_area from '../../assets/Admin_Assets/upload_area.svg'

const AddProduct = () => {
  return (
    <div className='addproduct'>

        <div className='addproduct-itemfield'>
            <p>Product Title</p>
            <input type="text" name='name' placeholder='Type here'/>
        </div>

        <div className='addproduct-price'>
            <div className='addproduct-itemfield'>
                <p>Price</p>
                <input type="number" name='old_price' placeholder='Type here'/>
            </div>
        </div>

        <div className='addproduct-price'>
            <div className='addproduct-itemfield'>
                <p>Offer Price</p>
                <input type="number" name='new_price' placeholder='Type here'/>
            </div>
        </div>

        <div className='addproduct-itemfield'>
            <p>Product Category</p>
            <select name='category' className='addproduct-selector' >
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="kid">Kid</option>
            </select>
        </div>

        <div className='addproduct-itemfield' >
            <label htmlFor='file-input'>
                <img className='addproduct-thumbnailimg' src={upload_area} alt="addproduct_img" />
            </label>
            <input type="file" name='image' id='file-input' hidden />
        </div>
        <button className='addproduct-button' >Add</button>

    </div>
  )
}

export default AddProduct