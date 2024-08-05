

import React from 'react';
import './Cart.css';

const Cart = ({ cartItems }) => {
 
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div>
          <p>Your cart is empty</p>
        </div>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ₹{item.price} x {item.quantity || 1}
              </li>
            ))}
          </ul>
          <div className="total">
            <b>Total: ₹{calculateTotal().toFixed(2)}</b>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
