import React from 'react';
import './Cart.css';

const Cart = (props) => {
    //console.log(props)
    const cart = props.cart;
    let total= 0;
    for (let i = 0; i < cart.length; i++) {
        const courses = cart[i];
        total = total + courses.price;
        
    }
    return (
        <div className='cart_container'>
            <h2>Total Courses Buy {cart.length}</h2>
            <h1> Total Price: {total}</h1>

        </div>
    );
};

export default Cart;