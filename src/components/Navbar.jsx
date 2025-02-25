import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHistory, FaShoppingCart, FaChevronLeft, FaHome } from 'react-icons/fa';

function Navbar({ showHistory, setShowHistory, showCart, setShowCart, cartItemCount, simple }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Container>
        <Link to="/" className="navbar-brand">Modern Coffee Shop</Link>
        <div className="d-flex gap-3">
          {simple ? (
            <Link to="/menu" className="btn btn-outline-light">
              View Menu
            </Link>
          ) : (
            <>
              <Link to="/" className="btn btn-outline-light">
                <FaHome /> Home
              </Link>
              <Button 
                variant="outline-light" 
                onClick={() => setShowHistory(!showHistory)}
              >
                <FaHistory /> {showHistory ? 'Menu' : 'History'}
              </Button>
              <Button 
                variant="outline-light"
                onClick={() => setShowCart(!showCart)}
                className="d-flex align-items-center gap-2 position-relative"
              >
                <FaShoppingCart /> 
                <span>Cart ({cartItemCount})</span>
                <FaChevronLeft 
                  className={`cart-toggle d-lg-none ${showCart ? 'active' : ''}`} 
                />
              </Button>
            </>
          )}
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;