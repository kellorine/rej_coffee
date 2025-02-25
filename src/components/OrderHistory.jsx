import React from 'react';
import { Card, Button, Image } from 'react-bootstrap';
import { FaHistory, FaTrash } from 'react-icons/fa';

function OrderHistory({ orders, onDeleteOrder }) {
  return (
    <div className="order-history">
      <h2 className="mb-4 section-title">
        <FaHistory className="me-2" /> Order History
      </h2>
      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        orders.map(order => {
          let formattedDate = "Invalid Date";
          if (order.date) {
            const parsedDate = new Date(order.date);
            if (!isNaN(parsedDate.getTime())) {
              formattedDate = parsedDate.toLocaleString('en-PH', { 
                timeZone: 'Asia/Manila',
                year: 'numeric', 
                month: 'long', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit', 
                hour12: true 
              });
            }
          }

          return (
            <Card key={order.id} className="mb-3">
              <Card.Header className="d-flex justify-content-between">
                <span>Order #{order.id}</span>
                <span>{formattedDate}</span>
              </Card.Header>
              <Card.Body>
                {order.items.map(item => (
                  <div key={item.cartId} className="d-flex align-items-center mb-2">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      className="me-3"
                      style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '5px' }} 
                    />
                    <div>
                      <h6 className="mb-1">{item.name}</h6>
                      <p className="mb-0 text-muted">₱{item.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                  <h5>Total: ₱{order.total.toFixed(2)}</h5>
                  <Button 
                    variant="danger" 
                    size="sm"
                    onClick={() => onDeleteOrder(order.id)}
                  >
                    <FaTrash /> Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          );
        })
      )}
    </div>
  );
}

export default OrderHistory;
