import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal, Button, Image } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import MenuSection from '../components/MenuSection';
import Cart from '../components/Cart';
import OrderHistory from '../components/OrderHistory';
import Footer from '../components/Footer';
import { menuItems } from '../data/menuItems';

function MenuPage() {
  const [cart, setCart] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [activeCategory, setActiveCategory] = useState('drinks');
  const [showCart, setShowCart] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [orderToDelete, setOrderToDelete] = useState(null);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const savedOrders = JSON.parse(localStorage.getItem('orderHistory')) || [];

    setCart(savedCart);
    setOrderHistory(savedOrders);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    if (orderHistory.length > 0) {
      localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
    }
  }, [orderHistory]);

  const addToCart = (item) => {
    const updatedCart = [...cart, { ...item, cartId: Date.now() }];
    setCart(updatedCart);
    toast.success(`${item.name} added to cart`);
  };

  const removeFromCart = (cartId) => {
    const updatedCart = cart.filter(item => item.cartId !== cartId);
    setCart(updatedCart);
    toast.error('Item removed from cart');
  };

  const handleCheckout = () => {
    setShowCheckoutModal(true);
  };

  const confirmCheckout = () => {
    if (cart.length === 0) {
      toast.error('Cart is empty!');
      setShowCheckoutModal(false);
      return;
    }

    const order = {
      id: Date.now(),
      items: [...cart],
      total: cart.reduce((sum, item) => sum + item.price, 0),
      date: new Date().toISOString(),
    };

    const updatedOrders = [order, ...orderHistory];
    setOrderHistory(updatedOrders);
    setCart([]);
    localStorage.setItem('orderHistory', JSON.stringify(updatedOrders));
    localStorage.setItem('cart', JSON.stringify([]));
    setShowCart(false);
    setShowCheckoutModal(false);
    toast.success('Order placed successfully!');
  };

  const showDeleteConfirmation = (orderId) => {
    setOrderToDelete(orderHistory.find(order => order.id === orderId));
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (!orderToDelete) return;
    
    const updatedHistory = orderHistory.filter(order => order.id !== orderToDelete.id);
    setOrderHistory(updatedHistory);
    localStorage.setItem('orderHistory', JSON.stringify(updatedHistory));

    setShowDeleteModal(false);
    setOrderToDelete(null);
    toast.success('Order removed from history');
  };

  return (
    <>
      <Navbar 
        showHistory={showHistory}
        setShowHistory={setShowHistory}
        showCart={showCart}
        setShowCart={setShowCart}
        cartItemCount={cart.length}
      />

      <div className="main-content py-5">
        <Container>
          {!showHistory ? (
            <Row>
              <Col lg={8}>
                <MenuSection 
                  items={menuItems[activeCategory]}
                  activeCategory={activeCategory}
                  setActiveCategory={setActiveCategory}
                  onAddToCart={addToCart}
                />
              </Col>
              <Col lg={4} className="position-relative">
                <Cart 
                  cart={cart}
                  showCart={showCart}
                  onClose={() => setShowCart(false)}
                  onRemoveFromCart={removeFromCart}
                  onCheckout={handleCheckout}
                />
              </Col>
            </Row>
          ) : (
            <OrderHistory 
              orders={orderHistory}
              onDeleteOrder={showDeleteConfirmation}
            />
          )}
        </Container>
      </div>

      <Footer />

      {/* 🔹 Checkout Confirmation Modal with Product Images */}
      <Modal show={showCheckoutModal} onHide={() => setShowCheckoutModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to place this order?</p>
          <div>
            {cart.map((item) => (
              <div key={item.cartId} className="d-flex align-items-center mb-2">
                <Image src={item.image} alt={item.name} width={50} height={50} className="me-2" />
                <div>
                  <strong>{item.name}</strong> - ₱{item.price.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <hr />
          <p><strong>Total: ₱{cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</strong></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCheckoutModal(false)}>Cancel</Button>
          <Button variant="success" onClick={confirmCheckout}>Confirm</Button>
        </Modal.Footer>
      </Modal>

      {/* 🔹 Delete History Confirmation Modal with Product Images */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this order from history? This action cannot be undone.</p>
          {orderToDelete && (
            <div>
              {orderToDelete.items.map((item) => (
                <div key={item.cartId} className="d-flex align-items-center mb-2">
                  <Image src={item.image} alt={item.name} width={50} height={50} className="me-2" />
                  <div>
                    <strong>{item.name}</strong> - ₱{item.price.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>Cancel</Button>
          <Button variant="danger" onClick={confirmDelete}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MenuPage;
