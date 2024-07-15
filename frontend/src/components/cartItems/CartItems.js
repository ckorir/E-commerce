import React, { useContext } from 'react';
import '../../css/CartItems.css';
import { ShopContext } from '../../context/Context';
import remove_icon from '../../components/Assets/cart_cross_icon.png';

export default function CartItems() {

    const { all_product, cartItems, removeFromCart, getTotalAmount } = useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className='cartitems-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className='cartitems-format cartitems-format-main'>
                                <img className='carticon-product-icon' src={e.image} alt='' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img className='cartitems-remove-icon' onClick={() => { removeFromCart(e.id) }} src={remove_icon} alt='' />
                            </div>
                            <hr />
                        </div>
                    );
                } else {
                    return null;
                }
            })}

            <div className='cartitems-down' >
                <div className='cartitems-total'>
                    <h1>Cart Total</h1>
                    <div>
                        <div className='cartitems-total-item'>
                            <p>Subtotal</p>
                            <p>${getTotalAmount()}</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <h3>Total</h3>
                            <h3>${getTotalAmount()}</h3>
                        </div>
                    </div>
                    <button className='cartitems-checkout'>Checkout</button>
                </div>

                <div className='cartitems-promo'>
                    <p>Enter promo code if you have</p>
                    <div className='cartitems-promobox'>
                        <input type="text" placeholder='Enter promo code' />
                        <button>Apply</button>
                    </div>  
                </div>

            </div>

        </div>
    );
}
