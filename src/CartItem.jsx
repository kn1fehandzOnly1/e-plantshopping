import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach((item) => {
      const unitPrice = parseFloat(item.cost.replace('$', '')) || 0;
      total += unitPrice * item.quantity;
    });
    return total.toFixed(2);
  };

  // Calculate total quantity of items in the cart
  const calculateTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculate total cost based on quantity for an individual item
  const calculateTotalCost = (item) => {
    const unitPrice = parseFloat(item.cost.replace('$', '')) || 0;
    return (unitPrice * item.quantity).toFixed(2);
  };

  const handleContinueShopping = (e) => {
    if (e) e.preventDefault();
    if (onContinueShopping) {
      onContinueShopping(e);
    }
  };

  const handleCheckoutShopping = (e) => {
    if (e) e.preventDefault();
    alert('Functionality to be added for future reference - Checkout Coming Soon!');
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="cart-container">
      <h2 className="cart-header-title">Your Shopping Cart</h2>
      
      <div className="cart-summary-bar">
        <div className="summary-item">
          <span className="summary-label">Total Plants:</span>
          <span className="summary-value badge">{calculateTotalQuantity()}</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Total Cart Amount:</span>
          <span className="summary-value price-total">${calculateTotalAmount()}</span>
        </div>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart-view">
          <div className="empty-cart-icon">🛒</div>
          <h3>Your cart is currently empty!</h3>
          <p>Explore our beautiful collection and bring green life into your home.</p>
          <button className="continue-btn" onClick={handleContinueShopping}>
            ← Browse Plants
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items-list">
            {cart.map((item) => (
              <div className="cart-item-card" key={item.name}>
                <div className="cart-item-image-wrapper">
                  <img className="cart-item-image" src={item.image} alt={item.name} />
                </div>
                
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-description">{item.description}</p>
                  <p className="cart-item-unit-cost">
                    Unit Price: <span className="cost-highlight">{item.cost}</span>
                  </p>
                </div>

                <div className="cart-item-quantity-controls">
                  <span className="qty-label">Quantity:</span>
                  <div className="quantity-buttons-group">
                    <button
                      className="cart-item-button cart-item-button-dec"
                      onClick={() => handleDecrement(item)}
                      title="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="cart-item-quantity-value">{item.quantity}</span>
                    <button
                      className="cart-item-button cart-item-button-inc"
                      onClick={() => handleIncrement(item)}
                      title="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="cart-item-subtotal">
                  <span className="subtotal-label">Subtotal:</span>
                  <span className="subtotal-value">${calculateTotalCost(item)}</span>
                </div>

                <div className="cart-item-actions">
                  <button
                    className="cart-item-delete-btn"
                    onClick={() => handleRemove(item)}
                    title="Remove item from cart"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-bottom-actions">
            <button className="continue-shopping-btn" onClick={handleContinueShopping}>
              ← Continue Shopping
            </button>
            <button className="checkout-btn" onClick={handleCheckoutShopping}>
              Proceed to Checkout →
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItem;
