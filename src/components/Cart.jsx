import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaShoppingCart, FaTrash, FaTimes } from 'react-icons/fa';

function Cart({ cart, showCart, onClose, onRemoveFromCart, onCheckout }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <div className={`cart-overlay ${showCart ? 'show' : ''}`} onClick={onClose} />
      <div className={`cart-section ${showCart ? 'show' : ''}`}>
        {cart.length > 0 ? (
          <>
            <Button 
              variant="link" 
              className="cart-close d-lg-none"
              onClick={onClose}
            >
              <FaTimes />
            </Button>
            <h3 className="d-flex align-items-center gap-2 mb-4">
              <FaShoppingCart /> Shopping Cart
            </h3>
            {cart.map(item => (
              <Card key={item.cartId} className="mb-2 d-flex flex-row align-items-center p-2">
                {/* ✅ Product Image */}
                <img 
                  src={item.image} 
                  alt={item.name} 
                  width="50" 
                  height="50" 
                  className="rounded me-3" 
                />
                
                {/* ✅ Product Details */}
                <div className="flex-grow-1">
                  <h5 className="mb-1">{item.name}</h5>
                  <p className="mb-0">₱{item.price.toFixed(2)}</p>
                </div>
                
                {/* ✅ Remove Button */}
                <Button 
                  variant="danger" 
                  onClick={() => onRemoveFromCart(item.cartId)}
                >
                  <FaTrash />
                </Button>
              </Card>
            ))}
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <h4>Total: ₱{total.toFixed(2)}</h4>
              <Button variant="success" onClick={onCheckout}>
                Checkout
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center py-4">
            <Button 
              variant="link" 
              className="cart-close d-block d-lg-none position-absolute top-2 end-2"
              onClick={onClose}
            >
              <FaTimes />
            </Button>
            <h3 className="mb-3">Your cart is empty</h3>
            <p className="mb-4">Add some delicious items to get started!</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;