import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FaCoffee, FaCookie, FaBirthdayCake } from 'react-icons/fa';
import MenuItem from './MenuItem';

const categoryIcons = {
  drinks: FaCoffee,
  snacks: FaCookie,
  desserts: FaBirthdayCake
};

function MenuSection({ items, activeCategory, setActiveCategory, onAddToCart }) {
  return (
    <div className="menu-section-container">
      <div className="category-buttons d-flex gap-3 justify-content-center mb-5">
        {Object.keys(categoryIcons).map(category => {
          const Icon = categoryIcons[category];
          return (
            <Button
              key={category}
              variant={activeCategory === category ? 'primary' : 'outline-primary'}
              className={`category-button ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              <Icon className="me-2" />
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          );
        })}
      </div>
      <Row className="g-4 justify-content-center">
        {items.map(item => (
          <Col key={item.id} lg={4} md={6} className="d-flex">
            <MenuItem item={item} onAddToCart={onAddToCart} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default MenuSection;