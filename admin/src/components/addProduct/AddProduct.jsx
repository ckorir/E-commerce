import React, { useState } from 'react'
import '../../css/AddProduct.css'
import upload_area from '../../assets/Admin_Assets/upload_area.svg'

const AddProduct = () => {

    const [image, setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name: '',
        image: '',
        old_price: '',
        new_price: '',
        category: 'women',
    });

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }

    const changeHandler = (e) => {
        setProductDetails({
            ...productDetails,
            [e.target.name]: e.target.value
        })
    }

    // Add Product to Database
    const addProduct = async () => {
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product', image);

        // Upload Image to Storage
        await fetch('http://localhost:4000/upload', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData,
        }).then((res) => res.json()).then((data) => {responseData = data} ) 

        if (responseData.success) {
            product.image = responseData.image_url;
            console.log(product);

            // Add Product to DB
            await fetch('http://localhost:4000/addproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            }).then((res) => res.json()).then((data) => {
                data.success?alert('Product Added'):alert('Something went wrong')
                // responseData = data
            } )
        }
    }

  return (
    <div className='addproduct'>

        <div className='addproduct-itemfield'>
            <p>Product Title</p>
            <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here'/>
        </div>

        <div className='addproduct-price'>
            <div className='addproduct-itemfield'>
                <p>Price</p>
                <input value={productDetails.old_price} onChange={changeHandler} type="number" name='old_price' placeholder='Type here'/>
            </div>
        
            <div className='addproduct-itemfield'>
                <p>Offer Price</p>
                <input value={productDetails.new_price} onChange={changeHandler} type="number" name='new_price' placeholder='Type here'/>
            </div>
        </div>

        <div className='addproduct-itemfield'>
            <p>Product Category</p>
            <select value={productDetails.category} onChange={changeHandler} name='category' className='addproduct-selector' >
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="kid">Kid</option>
            </select>
        </div>

        <div className='addproduct-itemfield' >
            <label htmlFor='file-input'>
                <img className='addproduct-thumbnail-img' src={image?URL.createObjectURL(image):upload_area} alt="addproduct_img" />
            </label>
            <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
        </div>
        <button onClick={() => {addProduct()}} className='addproduct-button' >Add</button>

    </div>
  )
}

export default AddProduct