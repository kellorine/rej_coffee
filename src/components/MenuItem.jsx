import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

function MenuItem({ item, onAddToCart }) {
  return (
    <Card className="menu-item w-100">
      <Card.Img 
        variant="top" 
        src={item.image} 
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="h5 mb-2">{item.name}</Card.Title>
        <Badge bg="info" className="mb-2 align-self-start">{item.type}</Badge>
        <Card.Text className="mb-3">₱{item.price.toFixed(2)}</Card.Text>
        <Button 
          variant="primary" 
          onClick={() => onAddToCart(item)}
          className="d-flex align-items-center gap-2 mt-auto mx-auto"
        >
          <FaPlus /> Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MenuItem;